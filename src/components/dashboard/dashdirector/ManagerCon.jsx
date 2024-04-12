import { getManager } from "@/lib/data";
import Link from 'next/link'
import { FaRegEdit } from "react-icons/fa";

const ManagerCon = async () => {
    const manager = await getManager()
    const { name, service_year, image, quality, achive, _id } = manager[0]
    return (
        <div>
            <div>
                <p>Manager</p>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Service Year</th>
                            <th>Achivement</th>
                            <th>Quality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>{name}</td>
                            <td>{service_year}</td>
                            <td>{achive}</td>
                            <td>{quality}</td>
                            <td>
                                <Link href={`/dashboard/directors/${_id}`}>
                                    <button><FaRegEdit className="text-xl text-green-400" /></button>
                                </Link>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManagerCon;
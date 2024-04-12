'use client'
import Image from 'next/image'
import Empty from '@/assets/empty.jpg'

import { MdAdminPanelSettings } from "react-icons/md";
import { RiUserFill } from "react-icons/ri";

const UserContent =  ({ users }) => {

    const handleAdmin =async (event) => {
        event.preventDefault()
        const form = event.target
        const isAdmin = form.value;
        const id = form.id;
        // const role = { isAdmin }
        // console.log(role, id);

        try {
            const response = await fetch(`/api/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ isAdmin }),
            });
            if (response.ok) {
                // Optional: Handle success message or redirect
            } else {
                throw new Error('Update failed');
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }
    return (
        <div>
            <div className="flex items-center justify-between">
                <p>Total User: {users.length}</p>
            </div>
            <hr className="my-3" />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>isAdmin</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map(user => (
                                <tr key={user._id}>
                                    <th>
                                        <Image src={user?.image ? user?.image : Empty} height={40} width={40} alt='profile' className='rounded-full' />
                                    </th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user?.isAdmin === true ? <MdAdminPanelSettings className='text-2xl' /> : <RiUserFill className='text-2xl' />}</td>
                                    <td>
                                        {/* <select onChange={() => handleAdmin(user?._id)} className="select select-bordered w-full max-w-xs">
                                            <option value={true}>Admin</option>
                                            <option value={false}>User</option>
                                        </select> */}

                                        <select name="isAdmin" value={user?.isAdmin} onChange={handleAdmin} className="select select-bordered shadow appearance-none border rounded-full  text-white select-sm leading-tight focus:outline-none caption-bottom bg-pink-400 focus:shadow-outline" id={user._id}>
                                            <option value={false}>User</option>
                                            <option value={true}>Admin</option>

                                        </select>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserContent;
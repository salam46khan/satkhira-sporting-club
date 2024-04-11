'use client'
import { getCourse } from "@/lib/data";
import AddCourses from "./AddCourses";
import Image from 'next/image'
import { RiDeleteBin6Line } from "react-icons/ri";

const DashboardCourse = ({ courses }) => {
    // console.log(courses);

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/course/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('delete successful');
            } else {
                throw new Error('Deletion failed');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            // Optional: Handle error message
        }
    };
    return (
        <div>
            <div className="flex items-center justify-between">
                <p>Total Courses: {courses.length}</p>
                <div>
                    <AddCourses />
                </div>
            </div>
            <hr className="my-3" />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Duration</th>
                            <th>Level</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            courses?.map(course => (
                                <tr key={course._id}>
                                    <th>
                                        <Image src={course?.image} alt="" height={35} width={45} />
                                    </th>
                                    <td>{course?.course}</td>
                                    <td>{course?.batch}</td>
                                    <td>{course?.duration}</td>
                                    <td>{course?.level}</td>
                                    <td>
                                        <button onClick={() => handleDelete(course?._id)}><RiDeleteBin6Line className="text-xl text-red-400" /></button>
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

export default DashboardCourse;
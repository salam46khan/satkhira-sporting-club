'use client'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import AddBlogBtn from "./AddBlogBtn";
import BlogDialog from "./BlogDialog";
import Image from 'next/image'
import Link from 'next/link'
// import BlogUpdate from "./BlogUpdate";

const DashboardBlog = ({ blogs }) => {
    // console.log(blogs);
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/blog/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // router.push('/'); //
            } else {
                throw new Error('Deletion failed');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            
        }
    };

    return (
        <div className="">
            <div className="flex items-center justify-between">
                <p>Total Blog: {blogs.length}</p>
                <div>
                    <AddBlogBtn />
                </div>
            </div>
            <hr className="my-3" />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Title</th>
                            <th>Discribtions</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            blogs?.map(blog => (
                                <tr key={blog._id}>
                                    <th>
                                        <Image height={45} width={70} src={blog?.image} alt="blog photo" />
                                    </th>
                                    <td>{blog?.title}</td>
                                    <td>{blog?.body?.length > 60 ? blog?.body.slice(0, 60) + '...' : blog?.body}</td>
                                    <td>
                                        <div className="flex items-center gap-5">



                                            <Link href={`/dashboard/blogs/${blog._id}`}>
                                                <button><FaRegEdit className="text-xl text-green-400" /></button>
                                            </Link>

                                            <button onClick={() => handleDelete(blog?._id)}><RiDeleteBin6Line className="text-xl text-red-400" /></button>

                                        </div>
                                    </td>
                                </tr>
                            ))
                        }


                    </tbody>
                </table>
            </div>

            <div>
                <BlogDialog />
                {/* <BlogUpdate /> */}
            </div>
        </div>
    );
};

export default DashboardBlog;
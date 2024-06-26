
import { getBlog } from "@/lib/data";
import Blog from "./Blog";


const BlogContent = async() => {
    const blog = await getBlog()
    // console.log(blog);
    return (
        <div className="text-gray-200">
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">All Blog</p>
            </div>
            
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                {
                    blog?.map(blog => <Blog key={blog._id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default BlogContent;
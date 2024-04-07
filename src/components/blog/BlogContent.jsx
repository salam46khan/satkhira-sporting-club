import { getBlog } from "@/lib/data";
import Blog from "./Blog";

// const getBlog = async () => {
//     const res = await fetch ('https://jsonplaceholder.typicode.com/posts', {
//         cache: 'no-store'
//     })

//     if(!res.ok){
//         throw new Error('somthing wrong')
//     }
//     return res.json()
// }

const BlogContent = async() => {
    const blog = await getBlog()
    console.log(blog);
    return (
        <div className="text-gray-200">
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">All Blog; {blog.length}</p>
            </div>
            
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                {
                    blog?.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
                {/* <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog /> */}
            </div>
        </div>
    );
};

export default BlogContent;
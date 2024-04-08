import BlogDetail from "@/components/blog/BlogDetail";
// import { getSingleBlog } from "@/lib/data";


const getSingleBlog = async (id) => {
    const res = await fetch (`http://localhost:3000/api/blog/${id}`, {
        cache: 'no-store'
    })
    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}

const BlogDetails = async ({ params }) => {
    const {id} = params;
    const singleBlog =await getSingleBlog(id);
    // console.log(singleBlog);
    return (
        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16">
                <div className="divider divider-start divider-secondary">
                    <p className="font-bold text-3xl">Course Details</p>
                </div>
                <BlogDetail singleBlog={singleBlog}/>
            </div>
        </div>
    );
};

export default BlogDetails;
import BlogUpdate from "@/components/dashboard/dashblog/BlogUpdate";
import { getSingleBlog } from "@/lib/data";

const page =async ({params}) => {
    const {id} = params;
    const singleBlog = await getSingleBlog(id);
    return (
        <div>
            <p>hi: {singleBlog.title}</p>
            <BlogUpdate singleBlog={singleBlog}/>
        </div>
    );
};

export default page;
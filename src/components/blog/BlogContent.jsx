import Blog from "./Blog";

const BlogContent = () => {
    return (
        <div className="text-gray-200">
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">All Blog</p>
            </div>
            
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
                <Blog />
                <Blog />
                <Blog />
                <Blog />
                <Blog />
            </div>
        </div>
    );
};

export default BlogContent;
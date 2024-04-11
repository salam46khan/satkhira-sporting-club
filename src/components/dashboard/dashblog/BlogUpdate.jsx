'use client'
const BlogUpdate = ({singleBlog}) => {
    const {title, image, body, _id} = singleBlog;

    const handleUpdateBlog = async (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const body = form.body.value;
        // console.log(title, image, body);

        try {
            const response = await fetch(`/api/blog/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, image, body }),
            });
            if (response.ok) {
                // Optional: Handle success message or redirect
            } else {
                throw new Error('Update failed');
            }
        } catch (error) {
            console.error('Error updating post:', error);
            // Optional: Handle error message
        }
    }

    return (
        <div className="mt-5 w-full max-w-sm rounded-md bg-white/20 p-4 mx-auto shadow-md shadow-black">
            <p className="text-pink-400 text-2xl font-bold text-center">Update Blog</p>

            <form onSubmit={handleUpdateBlog}>
                <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                    <input
                        type="text"
                        required
                        placeholder="Enter blog title"
                        defaultValue={title}
                        className="bg-inherit focus:outline-none w-full"
                        name="title"
                    />
                </div>
                <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                    <input
                        type="text"
                        required
                        placeholder="Enter blog photo URL"
                        defaultValue={image}
                        className="bg-inherit focus:outline-none w-full"
                        name="image"
                    />
                </div>

                <div className=" shadow-inner shadow-white/70 rounded-lg overflow-hidden px-4 py-2 my-5">
                    <textarea
                        type="text"
                        required
                        placeholder="Enter blog details"
                        defaultValue={body}
                        className="bg-inherit focus:outline-none w-full"
                        name="body"
                    />
                </div>
                <div className="text-center mt-3">
                    <input className="text-center py-2 px-8 rounded cursor-pointer bg-pink-400 text-white " type="submit" value="Update Blog" />
                </div>
            </form>

        </div>
    );
};

export default BlogUpdate;
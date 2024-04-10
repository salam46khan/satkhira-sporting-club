'use client'

import { useState } from "react";


const BlogDialog = () => {


    const handleBlogPost = async (event) => {
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const body = form.body.value;
        const image = form.image.value

        try {
            const response = await fetch('/api/blog', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ title, body, image }),
            });
      
            form.reset()
            if (!response.ok) {
              console.log('Network response was not ok');
            }
      
            const data = await response.json();
            console.log(data);
            // Handle success, maybe redirect to the newly created blog post
          } catch (error) {
            console.error('There was an error:', error);
            // Handle error
          }

    }
    return (
        <dialog id="my_modal_3" className="modal bg-blue-400/30">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="p-3">
                    <p className="font-bold text-2xl text-center text-pink-400">Add Blog</p>
                    <form onSubmit={handleBlogPost}>
                        <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                            <input
                                type="text"
                                required
                                placeholder="Enter blog title"
                                className="bg-inherit focus:outline-none w-full"
                                name="title"
                            />
                        </div>
                        <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                            <input
                                type="text"
                                required
                                placeholder="Enter blog photo URL"
                                className="bg-inherit focus:outline-none w-full"
                                name="image"
                            />
                        </div>
                        
                        <div className=" shadow-inner shadow-white/70 rounded-lg overflow-hidden px-4 py-2 my-5">
                            <textarea
                                type="text"
                                required
                                placeholder="Enter blog details"
                                className="bg-inherit focus:outline-none w-full"
                                name="body"
                            />
                        </div>
                        <div className="text-center mt-3">
                            <input className="text-center py-2 px-8 rounded cursor-pointer bg-pink-400 text-white " type="submit" value="Submit Blog" />
                        </div>
                    </form>
                </div>

            </div>
        </dialog>
    );
};

export default BlogDialog;
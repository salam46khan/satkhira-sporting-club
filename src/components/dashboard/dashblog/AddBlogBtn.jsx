'use client'
const AddBlogBtn = () => {
    return (
        <div>
            <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="py-2 px-8 rounded bg-pink-400 text-white">Add Blog</button>
        </div>
    );
};

export default AddBlogBtn;
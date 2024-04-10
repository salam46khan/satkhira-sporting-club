'use client'

import { useState } from "react";

const AddCourses = () => {
    
    const [course, setCourse] = useState('')
    const [batch, setBatch] = useState('')
    const [duration, setDuration] = useState('')
    const [level, setLevel] = useState('')
    const [details, setDetails] = useState('')
    const [image, setImage] = useState('')
    
  
    const handleAddCourse = async (event) => {
        event.preventDefault()
      try {
        const response = await fetch('/api/course', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ course, batch, duration, level, details, image }),
        });
        if (!response) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        
        set
      } catch (error) {
        console.error('There was an error:', error);
      }
    };
  

    return (
        <div>
            <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className="p-3">
                        <p className="font-bold text-2xl text-center text-pink-400">Add Courses</p>
                        <form onSubmit={handleAddCourse}>
                            <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                <input
                                    type="text"
                                    placeholder="Enter Course title"
                                    className="bg-inherit focus:outline-none w-full"
                                    onChange={(e) => setCourse(e.target.value)}
                                    name="course"
                                />
                            </div>
                            
                            <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                <input
                                    type="text"
                                    placeholder="Enter Course photo URL"
                                    className="bg-inherit focus:outline-none w-full"
                                    onChange={(e) => setImage(e.target.value)}
                                    name="image"
                                />
                            </div>
                            <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                <input
                                    type="text"
                                    placeholder="Enter Batch Name or Number"
                                    className="bg-inherit focus:outline-none w-full"
                                    name="batch"
                                    onChange={(e) => setBatch(e.target.value)}
                                />
                            </div>
                            <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                <input
                                    type="text"
                                    placeholder="Enter Course duration"
                                    className="bg-inherit focus:outline-none w-full"
                                    name="duration"
                                    onChange={(e) => setDuration(e.target.value)}
                                />
                            </div>
                            <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                <input
                                    type="text"
                                    placeholder="Enter Course level "
                                    className="bg-inherit focus:outline-none w-full"
                                    name="level"
                                    onChange={(e) => setLevel(e.target.value)}
                                />
                            </div>
                            <div className=" shadow-inner shadow-white/70 rounded-lg overflow-hidden px-4 py-2 my-5">
                                <textarea
                                    type="text"
                                    placeholder="Enter blog details"
                                    className="bg-inherit focus:outline-none"
                                    name="details"
                                    onChange={(e) => setDetails(e.target.value)}
                                />
                            </div>
                            <div className="text-center mt-3">
                                <input className="text-center py-2 px-8 rounded cursor-pointer bg-pink-400 text-white " type="submit" value="Submit Blog" />
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default AddCourses;
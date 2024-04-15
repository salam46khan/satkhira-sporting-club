
const AddTrainar = () => {
    return (
        <dialog id="my_modal_trainar" className="modal bg-blue-400/30">
            <div className="modal-box">
                <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <p className="text-2xl font-bold text-pink-400 text-center">Add Trainars</p>
                <form onSubmit={handleAddTrainar}>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            required
                            placeholder="Enter trainar name"
                            className="bg-inherit focus:outline-none w-full"
                            name="name"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            required
                            placeholder="Enter trainar prof"
                            className="bg-inherit focus:outline-none w-full"
                            name="prof"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            required
                            placeholder="Enter trainar photo URL"
                            className="bg-inherit focus:outline-none w-full"
                            name="image"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            required
                            placeholder="Enter trainar facebook link"
                            className="bg-inherit focus:outline-none w-full"
                            name="link_fb"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            required
                            placeholder="Enter trainar instagram link"
                            className="bg-inherit focus:outline-none w-full"
                            name="link_ins"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            required
                            placeholder="Enter trainar twitter link"
                            className="bg-inherit focus:outline-none w-full"
                            name="link_x"
                        />
                    </div>
                    <div className="flex justify-center mt-3">
                        <input className="py-2 px-8 bg-pink-400 rounded text-white cursor-pointer" type="submit" value="Add Trainar" />
                    </div>
                </form>
            </div>
        </dialog>
    );
};

export default AddTrainar;
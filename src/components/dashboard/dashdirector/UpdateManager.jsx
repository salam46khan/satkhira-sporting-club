'use client'

const UpdateManager = ({ manager }) => {
    const { name, service_year, image, achive, about, quality, link_fb, link_x, link_ins, _id } = manager;

    const handleUpdateManager =async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const service_year = form.service_year.value;
        const image = form.image.value;
        const achive = form.achive.value;
        const about = form.achive.value;
        const quality = form.quality.value;
        const link_fb = form.link_fb.value;
        const link_ins = form.link_ins.value;
        const link_x = form.link_x.value;
        const managerInfo = { name, service_year, image, achive, about, quality, link_fb, link_ins, link_x }
        // console.log(managerInfo);

        try {
            const response = await fetch(`/api/manager/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(managerInfo),
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
        <div>
            <div className='w-full max-w-md p-4 bg-white/20 rounded-md mx-auto'>
                <p className='text-2xl text-pink-400 font-bold text-center'>Update Manager Info</p>
                <form onSubmit={handleUpdateManager}>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            placeholder="Enter manager name"
                            defaultValue={name}
                            className="bg-inherit focus:outline-none w-full"
                            name="name"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            placeholder="Enter service year"
                            defaultValue={service_year}
                            className="bg-inherit focus:outline-none w-full"
                            name="service_year"
                        />
                    </div>

                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            placeholder="Enter manager achivement"
                            defaultValue={achive}
                            className="bg-inherit focus:outline-none w-full"
                            name="achive"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                        <input
                            type="text"
                            placeholder="Enter manager quality"
                            defaultValue={quality}
                            className="bg-inherit focus:outline-none w-full"
                            name="quality"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 pb-2">
                        <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 md:my-0 my-5">
                            <input
                                type="text"
                                placeholder="Enter photo URL"
                                defaultValue={image}
                                className="bg-inherit focus:outline-none w-full"
                                name="image"
                            />
                        </div>
                        <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5 md:my-0">
                            <input
                                type="text"
                                placeholder="Enter facebook link"
                                defaultValue={link_fb}
                                className="bg-inherit focus:outline-none w-full"
                                name="link_fb"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-3 pt-2">
                        <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 md:my-0 my-5">
                            <input
                                type="text"
                                placeholder="Enter tweeter link"
                                defaultValue={link_x}
                                className="bg-inherit focus:outline-none w-full"
                                name="link_x"
                            />
                        </div>
                        <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5 md:my-0">
                            <input
                                type="text"
                                placeholder="Enter instagram link"
                                defaultValue={link_ins}
                                className="bg-inherit focus:outline-none w-full"
                                name="link_ins"
                            />
                        </div>
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-lg overflow-hidden px-4 py-2 my-5">
                        <textarea
                            type="text"
                            placeholder="Enter blog details"
                            defaultValue={about}
                            className="bg-inherit focus:outline-none w-full"
                            name="about"
                        />
                    </div>
                    <div className="flex justify-center">
                        <input className="py-2 px-8 rounded bg-pink-400 text-white cursor-pointer" type="submit" value="Update Manager Info" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default UpdateManager;
'use client'
import Image from 'next/image';
import Link from 'next/link'
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

const TrainarCon = ({ trainars }) => {

    const handleAddTrainar = async (event) => {
        event.preventDefault()
        const from = event.target;
        const name = from.name.value;
        const prof = from.prof.value;
        const image = from.image.value;
        const link_fb = from.link_fb.value;
        const link_ins = from.link_ins.value;
        const link_x = from.link_x.value;

        const trainarInfo = { name, prof, image, link_fb, link_ins, link_x }
        console.log(trainarInfo);

        try {
            const response = await fetch('/api/trainar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, prof, image, link_fb, link_ins, link_x }),
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
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`/api/trainar/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // router.push('/'); //
            } else {
                throw new Error('Deletion failed');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            
        }
    };

    return (
        <div className="mt-4">
            <hr className="my-2" />
            <div className="flex justify-between items-center">
                <div>
                    <p>Total Trainar: {trainars.length}</p>
                </div>
                <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="py-2 px-8 rounded bg-pink-400 text-white" onClick={() => document.getElementById('my_modal_trainar').showModal()}>Add Trainar</button>

                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>photo</th>
                                <th>Name</th>
                                <th>Profision</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trainars?.map(trainar => (
                                    <tr key={trainar._id}>
                                        <th>
                                            <Image className='rounded-full h-full' src={trainar?.image} height={40} width={40} alt='photo' />
                                        </th>
                                        <td>{trainar?.name}</td>
                                        <td>{trainar?.prof}</td>
                                        <td>
                                            <div className="flex items-center gap-5">


                                                <button onClick={() => handleDelete(trainar?._id)}><RiDeleteBin6Line className="text-xl text-red-400" /></button>

                                            </div>
                                        </td>
                                    </tr>

                                ))
                            }
                            {/* row 1 */}

                        </tbody>
                    </table>
                </div>
            </div>




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
        </div>
    );
};

export default TrainarCon
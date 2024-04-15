'use client'
import Image from 'next/image'
import { RiDeleteBin6Line } from 'react-icons/ri';

const PlayerContent = ({ player }) => {


    const handleAddPlayer = async (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const position = form.position.value;
        const category = form.cagegory.value;
        const playerInfo = { name, image, position, category }
        console.log(playerInfo);

        try {
            const response = await fetch('/api/player', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playerInfo),
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


    const handleDelete = async (id) => {
        console.log(id);
        try {
            const response = await fetch(`/api/player/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                console.log('delete successful');
            } else {
                throw new Error('Deletion failed');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
            // Optional: Handle error message
        }
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <p>Total Fevorit Player: {player.length} </p>
                <div>
                    <button className='py-2 px-8 bg-pink-400 text-white rounded' onClick={() => document.getElementById('my_modal_player').showModal()}>Add Player</button>
                </div>
            </div>
            <hr className="my-3" />
            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Position</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                player?.map(player => (
                                    <tr key={player._id}>
                                        <th>
                                            <Image className='rounded-full' src={player?.image} alt='photo' height={40} width={40} />
                                        </th>
                                        <td>{player.name}</td>
                                        <td>{player.position}</td>
                                        <td>
                                            {
                                                player?.category === 'v' ? 'Volley Player' : player?.category === 'c' ? "Cricketer" : "Footballer"
                                            }
                                        </td>
                                        <td>
                                            <button onClick={() => handleDelete(player?._id)}><RiDeleteBin6Line className="text-xl text-red-400" /></button>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                <dialog id="my_modal_player" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <p className="text-2xl text-pink-400 font-bold text-center">Add Player</p>
                            <form onSubmit={handleAddPlayer}>
                                <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter player name"
                                        className="bg-inherit focus:outline-none w-full"
                                        name="name"
                                    />
                                </div>
                                <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter photo URL"
                                        className="bg-inherit focus:outline-none w-full"
                                        name="image"
                                    />
                                </div>
                                <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter player position"
                                        className="bg-inherit focus:outline-none w-full"
                                        name="position"
                                    />
                                </div>
                                <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden px-4 py-2 my-5">
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter category: c/f/v"
                                        className="bg-inherit focus:outline-none w-full"
                                        name="cagegory"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <input className="px-8 py-2 bg-pink-400 rounded text-white" type="submit" value="Add Player" />
                                </div>

                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default PlayerContent;
import Image from 'next/image'
import Link from 'next/link'
import user from '@/assets/user.jpg'
const Player = () => {
    return (
        <div className="w-full max-w-[280px] p-2 py-5 rounded-md bg-white/20 hover:bg-white/40 duration-200">
            <Image height={140} width={140} className='rounded-full mx-auto' src={user} alt='player photo'/>
            <div className='text-center mt-4'>
                <p className='text-xl '>Name of Plauyr</p>
                <p className='font-bold text-pink-400'>position</p>
            </div>
        </div>
    );
};

export default Player;
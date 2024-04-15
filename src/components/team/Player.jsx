import Image from 'next/image'
import Link from 'next/link'
import user from '@/assets/user.jpg'
import { IoIosFootball } from "react-icons/io";
import { MdSportsCricket } from "react-icons/md";
import { FaVolleyballBall } from 'react-icons/fa';

const Player = ({player}) => {
    const {name, position, category, image} = player;
    return (
        <div className="w-full max-w-[280px] p-2 py-5 rounded-md bg-white/20 hover:bg-white/40 duration-200">
            <div className='relative'>
                <div className='absolute bottom-0 right-1/3 translate-x-4 bg-pink-100 rounded-full p-1 '>
                    {
                        category === 'v' ? <FaVolleyballBall className='text-pink-400 text-xl'/> : category === 'f' ? <IoIosFootball className='text-pink-400 text-xl'/> : <MdSportsCricket className='text-pink-400 text-xl'/> 
                    }
                    
                </div>
                <Image height={140} width={140} className='rounded-full mx-auto h-[140px] w-[140px]' src={image} alt='player photo' />
            </div>
            <div className='text-center mt-4'>
                <p className='text-xl '>{name}</p>
                <p className='font-bold text-pink-400'>{position}</p>
            </div>
        </div>
    );
};

export default Player;
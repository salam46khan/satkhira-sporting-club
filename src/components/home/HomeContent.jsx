
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";
import { MdSportsCricket } from "react-icons/md";
import { TbPlayFootball, TbPlayVolleyball } from "react-icons/tb";
import TextAnimation from './TextAnimation';


const HomeContent = () => {
    return (
        <div className="mx-auto w-full max-w-4xl text-gray-200">
            <p className='font-semibold'>Wecome to</p>
            <h2 className="text-3xl font-bold text-white">Satkhira</h2>
            <h2 className="text-3xl font-bold text-white"><span className="text-3xl font-bold text-pink-400">Sporting</span> Club</h2>
            <div>
                <TextAnimation />
            </div>
            <div className="w-full md:w-3/5">
                <p className='text-xs md:text-[18px] py-2'>
                    Elevate your game with Satkhira Sporting Club. Whether you&apos;re dreaming of scoring goals on the football field, smashing boundaries in cricket, we&apos;re here to turn your dreams into reality...
                </p>
            </div>
            <div className='flex items-center gap-2 mt-3'>
                <Link className="flex items-center gap-1 hover:bg-inherit border-2 border-pink-400 text-white duration-300 bg-pink-400 py-2 px-5  rounded-full hover:text-pink-400" href={'/about'}>
                    <span className='text-sm font-bold'>Learn More</span>
                    <IoArrowForward className='text-2xl' />
                </Link>
                <Link className="flex items-center gap-1 hover:bg-pink-400 text-white duration-300 bg-inherit py-2 px-5  rounded-full border-2 hover:border-pink-400" href={'/login'}>
                    <span className='text-sm font-bold'>Join</span>
                    <IoArrowForward className='text-2xl' />
                </Link>

            </div>

            <div className='mt-5 md:mt-16 w-full max-w-6xl flex flex-col md:flex-row gap-3'>

                <Link className="py-3 px-4 bg-white/20 rounded-md hover:bg-white/40 duration-300 flex w-full max-w-xs md:flex-col flex-row items-center md:items-start gap-4" href={'/'}>
                    <TbPlayFootball className='text-pink-400 text-2xl md:text-5xl' />
                    <div className='flex flex-1 justify-between items-center w-full'>
                        <p className='font-bold text-xl'>Football</p>
                        <IoArrowForward className='text-2xl text-pink-400' />
                    </div>
                </Link>
                <Link className="py-3 px-4 bg-white/20 rounded-md hover:bg-white/40 duration-300 flex w-full max-w-xs md:flex-col flex-row items-center md:items-start gap-4" href={'/'}>
                    <MdSportsCricket className='text-pink-400 text-2xl md:text-5xl' />
                    <div className='flex flex-1 justify-between items-center w-full'>
                        <p className='font-bold text-xl'>Cricket</p>
                        <IoArrowForward className='text-2xl text-pink-400' />
                    </div>
                </Link>
                <Link className="py-3 px-4 bg-white/20 rounded-md hover:bg-white/40 duration-300 flex w-full max-w-xs md:flex-col flex-row items-center md:items-start gap-4" href={'/'}>
                    <TbPlayVolleyball className='text-pink-400 text-2xl md:text-5xl' />
                    <div className='flex flex-1 justify-between items-center w-full'>
                        <p className='font-bold text-xl'>Volleyball</p>
                        <IoArrowForward className='text-2xl text-pink-400' />
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HomeContent;
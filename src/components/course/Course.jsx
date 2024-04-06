import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowForward } from 'react-icons/io5';
const Course = () => {
    return (
        <div className="w-full max-w-xs bg-white/20 hover:bg-white/30 duration-300 p-4 rounded-md ">
            <Image src={Cri} alt='course thambnail' width={300} height={200} className='w-full h-auto' />
            <div className='py-4 text-center'>
                <p className='text-2xl font-bold text-pink-400'>Chorse name and short title about course</p>
            </div>
            <div className='flex justify-between shadow-inner p-2 shadow-black/40 rounded-full'>
                <p>Batch: 1</p>
                <p>Durations: 6 month</p>
            </div>
            <div className='text-center mt-4 flex justify-center'>
                <Link className='py-2 px-8 bg-pink-400 rounded-full flex items-center gap-1 ' href={'/course/1'}>
                    <span className='text-sm font-bold'>View Details</span>
                    <IoArrowForward className='text-2xl' />
                </Link>
            </div>
        </div>
    );
};

export default Course;
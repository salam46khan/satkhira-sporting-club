import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowForward } from 'react-icons/io5';
const Course = ({courseee}) => {
    const {course, batch, duration, image, _id} = courseee
    return (
        <div className="w-full max-w-xs bg-white/20 hover:bg-white/30 duration-300 p-4 rounded-md ">
            <Image src={image} alt='course thambnail' width={300} height={200} className='w-full h-auto' />
            <div className='py-4 text-center'>
                <p className='text-2xl font-bold text-pink-400'>{course}</p>
            </div>
            <div className='flex justify-between shadow-inner p-2 px-4 shadow-white/50 rounded-full'>
                <p>Batch: {batch}</p>
                <p>Durations: {duration}</p>
            </div>
            <div className='text-center mt-4 flex justify-center'>
                <Link className='py-2 px-8 bg-pink-400 rounded-full flex items-center gap-1 ' href={`/course/${_id}`}>
                    <span className='text-sm font-bold'>View Details</span>
                    <IoArrowForward className='text-2xl' />
                </Link>
            </div>
        </div>
    );
};

export default Course;
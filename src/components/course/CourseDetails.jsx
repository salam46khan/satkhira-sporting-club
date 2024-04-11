import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowBack } from 'react-icons/io5';

const CourseDetail = ({singleCourse}) => {
    const {course, level, duration, batch, details, image} = singleCourse;
    return (
        <div>
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">Course Details</p>
            </div>
            <div className="flex w-full max-w-5xl mx-auto justify-between flex-col md:flex-row gap-5 p-3 rounded-md items-center">
                <div className='w-full md:w-2/5 h-auto'>
                    <Image src={image} alt='course photo'  width={400} height={300} className='md:h-[370px] w-full' />
                </div>
                <div className='w-full md:w-3/5'>
                    <p className='text-2xl font-bold text-pink-400'>{course}</p>
                    <div className='text-white py-2'>
                        <p>Duration: {duration}</p>
                        <p>Batch: {batch}</p>
                        <p>Participation level: {level}</p>
                    </div>
                    <p className='text-xl text-white'>Discriptions:</p>
                    <p className='pl-3'>
                        {details}
                    </p>
                    <div className='mt-2 flex gap-2 flex-col md:flex-row'>
                        <button className='bg-pink-400 py-2 px-8 rounded-full text-white '>Enroll Now</button>
                        <Link href={'/course'} className='bg-pink-400 py-2 px-8 rounded-full flex justify-center items-center text-white gap-1'>
                            <span>Go Back</span>
                            <IoArrowBack className='text-2xl'/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
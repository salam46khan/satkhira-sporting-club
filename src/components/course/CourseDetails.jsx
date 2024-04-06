import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowBack } from 'react-icons/io5';

const CourseDetail = () => {
    return (
        <div>
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">Course Details</p>
            </div>
            <div className="flex w-full max-w-5xl mx-auto justify-between flex-col md:flex-row gap-5 p-3 border rounded-md items-center">
                <div className='w-full md:w-2/5 border h-auto'>
                    <Image src={Cri} alt='course photo'  width={400} className='md:h-[370px] w-full' />
                </div>
                <div className='w-full md:w-3/5'>
                    <p className='text-2xl font-bold text-pink-400'>Chorse name and short title about course</p>
                    <div className='text-white py-2'>
                        <p>Duration: 6 month</p>
                        <p>Batch: 1</p>
                        <p>Participation level: Beginner</p>
                    </div>
                    <p className='text-xl text-white'>Discriptions:</p>
                    <p className='pl-3'>
                        When it comes to Coursera, beginner is the lowest level of participation and advanced is the highest. Mixed levels are in between, and they vary depending on how active you have been in past courses.
                    </p>
                    <div className='mt-2 flex gap-2'>
                        <button className='bg-pink-400 py-2 px-8 rounded-full text-white '>Enroll Now</button>
                        <Link href={'/course'} className='bg-pink-400 py-2 px-8 rounded-full flex items-center text-white gap-1'>
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
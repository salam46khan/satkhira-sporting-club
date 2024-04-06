import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowForward } from 'react-icons/io5';

const Blog = () => {
    return (
        <div className="w-full max-w-[300px] bg-white/20 hover:bg-white/30 duration-300 overflow-hidden rounded-md ">
            <Image src={Cri} alt='course thambnail' width={300} height={200} className='w-full h-auto' />
            <div className='px-4 pt-1 pb-4'>
                <p className='text-pink-400'>date </p>
                <p className='text-2xl text-white font-bold'>Blog title fro this blog write here</p>
                <p className='text-xs py-1'>
                    These courses are designed for individuals who are new to the subject and have little to no prior knowledge or experience
                </p>
                <div className='text-center flex mt-3'>
                    <Link className='py-2 px-8 bg-pink-400 rounded-full flex items-center gap-1 ' href={'/blog/1'}>
                        <span className='text-sm font-bold'>View Details</span>
                        <IoArrowForward className='text-2xl' />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;
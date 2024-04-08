import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowForward } from 'react-icons/io5';

const Blog = ({blog}) => {
    const {title, body, _id} =blog;
    return (
        <div className="w-full max-w-[300px] bg-white/20 hover:bg-white/30 duration-300 overflow-hidden rounded-md ">
            <Image src={Cri} alt='course thambnail' width={300} height={200} className='w-full h-auto' />
            <div className='px-4 pt-1 pb-4'>
                <p className='text-pink-400'>date </p>
                <p className='text-2xl text-white font-bold'>{title.length>30 ? title.slice(0,28)+'..': title}</p>
                <p className='text-xs py-1'>
                    {body.length>50 ? body.slice(0,50)+'...' : body}
                </p>
                <div className='text-center flex mt-3'>
                    <Link className='py-2 px-8 bg-pink-400 rounded-full flex items-center gap-1 ' href={`/blog/${_id}`}>
                        <span className='text-sm font-bold'>View Details</span>
                        <IoArrowForward className='text-2xl' />
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Blog;
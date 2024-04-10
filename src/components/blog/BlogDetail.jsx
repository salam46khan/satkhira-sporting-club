import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowBack } from 'react-icons/io5';


const BlogDetail = ({singleBlog}) => {
    // console.log(singleBlog);
    const {title, body, image, createdAt} = singleBlog;
    return (
        <div>
            <div className="mt-5">
                <div className="w-full max-w-3xl p-3 mx-auto">
                    <Image src={image} width={400} height={300} alt='blog phot' className='w-full' />
                    <div className='py-3'>
                        <p className='text-3xl text-pink-400 font-bold'>{title}</p>
                        <p className=''>{createdAt.slice(0,10)} </p>
                        <div className='pt-4'>
                            <p>
                                {body}
                            </p>
                        </div>
                        <div className='flex mt-3'>
                            <Link href={'/blog'} className='bg-pink-400 py-2 px-8 rounded-full flex items-center text-white gap-1'>
                                <span>Go Back</span>
                                <IoArrowBack className='text-2xl' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
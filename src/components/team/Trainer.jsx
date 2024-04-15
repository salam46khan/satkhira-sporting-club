import Image from 'next/image'
import user from '@/assets/user.jpg';
import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { BsInstagram } from 'react-icons/bs';
const Trainer = ({trainar}) => {
    return (
        <div className="w-full max-w-[330px] p-3 rounded-md bg-white/20 hover:bg-white/30 duration-300">
            <Image src={trainar?.image} alt='trainers photo' height={200} width={200} className='w-full h-auto' />
            <div className='pt-5'>
                <h2 className='text-2xl font-semibold'>{trainar?.name}</h2>
                <p className='text-pink-400'>{trainar?.prof}</p>
            </div>
            <div>
                <div className='flex justify-end  gap-3 mt-3'>
                    <Link href={'/'} className='bg-white/40 p-2 rounded-full hover:bg-blue-500 duration-200'>
                        <FaFacebookF className='text-2xl' />
                    </Link>
                    <Link href={'/'} className='bg-white/40 p-2 rounded-full hover:bg-black duration-200'>
                        <FaXTwitter className='text-2xl' />
                    </Link>
                    <Link href={'/'} className='bg-white/40 p-2 rounded-full hover:bg-pink-500 duration-200'>
                        <BsInstagram className='text-2xl' />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Trainer;
import Image from 'next/image'
import user from '@/assets/user.jpg'
import Link from 'next/link';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
const Manager = () => {
    return (
        <div className="w-full flex flex-col md:flex-row bg-white/20 p-4 rounded-md gap-4 items-center">
            <div className="md:w-1/4 w-full">
                <Image src={user} className='w-full h-full' alt='manager photo' height={200} width={200} />
            </div>
            <div className="md:w-3/4 w-full md:px-4">
                <h1 className='text-3xl text-pink-400 font-bold'>Salam Khan</h1>
                <p>Manager</p>
                <div className='text-xl font-bold mt-3'>
                    <p>Years of Service:</p>
                    <p>Achievements: </p>
                    <p>Qualities:  </p>
                </div>
                <div>
                    <p>
                        [Manager s Full Name] has been an integral part of Satkhira Sporting Club since [Year]. With [Number of Years] years of dedicated service, he has played a pivotal role in shaping the club&apos;s success and fostering a culture of excellence.
                    </p>
                </div>
                <div className='flex justify-center md:justify-start gap-3 mt-3'>
                    <Link href={'/'} className='bg-white/40 p-2 rounded-full hover:bg-blue-500 duration-200'>
                        <FaFacebookF className='text-2xl'/>
                    </Link>
                    <Link href={'/'} className='bg-white/40 p-2 rounded-full hover:bg-black duration-200'>
                        <FaXTwitter className='text-2xl'/>
                    </Link>
                    <Link href={'/'} className='bg-white/40 p-2 rounded-full hover:bg-pink-500 duration-200'>
                        <BsInstagram className='text-2xl'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Manager;
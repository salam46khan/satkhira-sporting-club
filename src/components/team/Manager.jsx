import Image from 'next/image'
import user from '@/assets/user.jpg'
import Link from 'next/link';
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { getManager } from '@/lib/data';
const Manager =async () => {
    const manager = await getManager()
    const {name, service_year, image, achive, about, quality, link_fb, link_ins, link_x } = manager[0]
    return (
        <div className="w-full flex flex-col md:flex-row bg-white/20 p-4 rounded-md gap-4 items-center">
            <div className="md:w-1/4 w-full">
                <Image src={image} className='w-full h-full' alt='manager photo' height={200} width={200} />
            </div>
            <div className="md:w-3/4 w-full md:px-4">
                <h1 className='text-3xl text-pink-400 font-bold'>{name}</h1>
                <p>Manager</p>
                <div className='text-xl font-bold mt-3'>
                    <p>Years of Service: {service_year}</p>
                    <p>Achievements: {achive}</p>
                    <p>Qualities: {quality}</p>
                </div>
                <div>
                    <p>
                        {about}
                    </p>
                </div>
                <div className='flex justify-center md:justify-start gap-3 mt-3'>
                    <Link href={link_fb} className='bg-white/40 p-2 rounded-full hover:bg-blue-500 duration-200'>
                        <FaFacebookF className='text-2xl'/>
                    </Link>
                    <Link href={link_x} className='bg-white/40 p-2 rounded-full hover:bg-black duration-200'>
                        <FaXTwitter className='text-2xl'/>
                    </Link>
                    <Link href={link_ins} className='bg-white/40 p-2 rounded-full hover:bg-pink-500 duration-200'>
                        <BsInstagram className='text-2xl'/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Manager;
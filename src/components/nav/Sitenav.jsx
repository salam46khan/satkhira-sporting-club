'use client'
import Image from 'next/image';
import logo from '@/assets/sport_logo.png'
import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';
import { ImUsers } from "react-icons/im";
import { MdContentCopy, MdPlayLesson } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import { PiStudentDuotone } from "react-icons/pi";
import { GiBabyfootPlayers } from "react-icons/gi";

const Sitenav = () => {
    const sidenav = <>
        <li>
            <Link href={'/dashboard/users'}>
                <ImUsers />
                Users
            </Link>
        </li>
        <li>
            <Link href={'/dashboard/blogs'}>
                <MdContentCopy />
                Blogs
            </Link>
        </li>
        <li>
            <Link href={'/dashboard/directors'}>
                <FaUserTie />
                Directors
            </Link>
        </li>
        <li>
            <Link href={'/dashboard/students'}>
                <PiStudentDuotone />
                Students
            </Link>
        </li>
        <li>
            <Link href={'/dashboard/courses'}>
                <MdPlayLesson />
                Courses
            </Link>
        </li>
        <li>
            <Link href={'/dashboard/players'}>
                <GiBabyfootPlayers />
                Players
            </Link>
        </li>
    </>

    const [navOpen, setNavOpen] = useState(false)
    return (
        <div className='h-full text-gray-200'>
            <div className='absolute  block md:hidden -translate-y-1/2 top-1/2 -left-5 z-50 '>
                <button onClick={() => setNavOpen(!navOpen)} className="btn btn-ghost hover:bg-white/40  btn-circle">
                    <IoIosArrowForward className='text-5xl text-pink-300' />
                </button>
            </div>

            <div className={`w-full absolute top-0  md:hidden z-10 p-2 pt-20 bg-blue-800/50 duration-300 ${navOpen ? 'left-0' : '-left-[772px]'}`}>
                <div className='flex items-center gap-2'>
                    <Image className='' src={logo} height={70} width={70} alt='sporting club logo' />
                    <div>
                        <p className='text-2xl font-bold text-pink-400'>Satkhira</p>
                        <p className='text-xl font-bold'>Sporting Club</p>
                    </div>
                </div>
                <hr className='my-7' />
                <div>
                    <ul className="menu mt-3 p-2 shadow rounded-box w-full">
                        {sidenav}
                    </ul>
                </div>
            </div>

            <div className="w-[300px] hidden md:block p-2 pt-20 bg-white/20 h-full">
                <div className='flex items-center gap-2'>
                    <Image className='' src={logo} height={70} width={70} alt='sporting club logo' />
                    <div>
                        <p className='text-2xl font-bold text-pink-400'>Satkhira</p>
                        <p className='text-xl font-bold'>Sporting Club</p>
                    </div>
                </div>
                <hr className='my-7' />
                <div>
                    <ul className="menu mt-3 p-2 shadow rounded-box w-full">
                        {sidenav}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sitenav;
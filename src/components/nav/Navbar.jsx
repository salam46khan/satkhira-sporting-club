import Link from 'next/link'
import Image from 'next/image'
import logo from '@/assets/sport_logo.png'
import { LuUser2 } from "react-icons/lu";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import user from '@/assets/user.jpg'
import { MdOutlineLogout } from 'react-icons/md';
import { handleLogout } from '@/lib/actions';
import { auth } from '@/lib/auth';

const Navbar = async () => {
    
    const session = await auth()
    console.log(session);
    const isAdmin = true
    return (
        <div className='bg-blue-800 fixed top-0 left-0 w-full text-white z-50'>
            <div className="navbar px-5">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <div tabIndex={0} role="button" className="btn hover:bg-white/20 btn-ghost btn-circle">
                            <HiMiniBars3CenterLeft className='text-2xl' />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 bg-blue-800/80">
                            <li>
                                <Link href={'/'}>Home</Link>
                            </li>
                            <li>
                                <Link href={'/about'}>About</Link>
                            </li>
                            <li>
                                <Link href={'/team'}>Team</Link>
                            </li>
                            <li>
                                <Link href={'/course'}>Courses</Link>
                            </li>
                            <li>
                                <Link href={'/blog'}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center ">
                    <Link className='flex items-center gap-2' href={'/'}>
                        <Image src={logo} alt='satkhira sporting club logo' height={60} width={60} />
                        <div className='hidden md:block'>
                            <p className='font-bold text-3xl text-pink-400'>Satkhira<span className='font-bold text-3xl text-white'>Sporting</span>Club</p>

                        </div>
                    </Link>
                </div>
                <div className="navbar-end">
                    {
                        session ?
                            <>
                                <div className="dropdown relative">
                                    <div tabIndex={1} role="button" className="btn hover:bg-white/20 btn-ghost btn-circle overflow-hidden">
                                        <Image src={session? session?.user?.image : user} alt='' height={60} width={60} />
                                    </div>
                                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 absolute right-0 z-[1] p-2 shadow bg-base-100 rounded-box w-32 bg-blue-800/80">
                                        <li>
                                            <Link href={'/profile'}>Profile</Link>
                                        </li>
                                        {
                                            isAdmin ?
                                                <li>
                                                    <Link href={'/dashboard/users'}>Dashboard</Link>
                                                </li>
                                                : ""
                                        }
                                        <li>
                                            <form action={handleLogout}>
                                                <button className='flex justify-between text-red-400'>
                                                    Log out
                                                    <MdOutlineLogout className='' />
                                                </button>
                                            </form>

                                        </li>
                                    </ul>
                                </div>
                            </>
                            :

                            <Link className="btn btn-ghost btn-circle hover:bg-white/20" href={'/login'}>
                                <LuUser2 className='text-2xl' />
                            </Link>
                    }
                    {/* <Link className="btn btn-ghost btn-circle hover:bg-white/20" href={'/login'}>
                        <LuUser2 className='text-2xl' />
                    </Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
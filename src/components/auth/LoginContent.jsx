import { MdOutlineAlternateEmail, MdVpnKey } from "react-icons/md";
import GithubLogin from "./GithubLogin";
import Link from 'next/link'
import { Login } from "@/lib/actions";


const LoginContent = () => {
    return (
        <div className="w-full max-w-sm p-5 bg-white/20 rounded-md">
            <div className="text-center py-2">
                <p className="font-bold text-2xl">Please Login</p>
            </div>
            <div>
                <GithubLogin />
                <div className="divider">OR</div>
                <form  action={Login}>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden py-2 my-4 flex items-center">
                        <MdOutlineAlternateEmail className=" w-10" />
                        <input
                            type="email"
                            // onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter your email"
                            className="flex-1 bg-inherit focus:outline-none"
                            name="email"
                        />
                    </div>
                    <div className=" shadow-inner shadow-white/70 rounded-full overflow-hidden py-2 my-4 flex items-center">
                        <MdVpnKey className="w-10" />
                        <input
                            type="password"
                            // onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                            className="flex-1 bg-inherit focus:outline-none"
                            name="password"
                        />
                    </div>
                    <div>
                        <input className="w-full py-2 text-white rounded-full bg-pink-400 hover:bg-pink-500 duration-200 " type="submit" value="Login" />
                    </div>
                </form>
                <div className="flex justify-end mt-3">
                    <Link href={'/register'}>
                        Don&apos;t have an account, <span className="text-pink-400">Ragistation</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LoginContent;
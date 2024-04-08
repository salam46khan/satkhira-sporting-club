import { handleGithubLogin } from "@/lib/actions";
import { auth, signIn } from "@/lib/auth";
import { FaGithub } from "react-icons/fa";

const GithubLogin =async () => {
    const session =await auth()
    console.log(session);

    
    return (
        <div>
            <form action={handleGithubLogin}>
                <button className="w-full rounded-md bg-black text-pink-400 p-2 flex justify-center items-center gap-2">
                    <FaGithub className="text-xl" />
                    Login with Github
                </button>
            </form>
        </div>
    );
};

export default GithubLogin;
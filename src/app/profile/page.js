import ProfileContent from "@/components/profile/ProfileContent";
import { auth } from "@/lib/auth";

const page = async () => {
    const session = await auth()
    console.log(session);
    return (

        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16">
                <div>
                    <div className="w-full max-w-3xl mx-auto bg-white/20 rounded-md p-4">
                        <p className="text-2xl font-bold text-center text-white">hi {session?.user?.name} welcome to <span className="text-2xl font-bold text-center text-pink-400">Satkhira Sporting Club</span></p>
                    </div>
                    <div>
                        <ProfileContent profile={session.user}/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default page;
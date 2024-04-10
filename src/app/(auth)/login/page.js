import LoginContent from "@/components/auth/LoginContent";
import { auth } from "@/lib/auth";


const LoginPage = () => {
    
    auth?.user && router.push('/')
    return (
        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16 flex justify-center items-center">
               <LoginContent />
            </div>
        </div>
    );
};

export default LoginPage;
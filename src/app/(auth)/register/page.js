import RegisterContent from "@/components/auth/RegisterContent";

const RegisterPage = () => {
    return (
        <div className="px-3 py-5 min-h-screen container mx-auto">
            <div className="pt-16 flex justify-center items-center">
               <RegisterContent />
            </div>
        </div>
    );
};

export default RegisterPage;
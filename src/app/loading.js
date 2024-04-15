import Logo from '@/assets/sport_logo.png';
import Image from 'next/image'
const loading = () => {
    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div>
                <Image src={Logo} alt='logo' height={100} width={100}/>
                <p className='text-xl text-pink-400 font-bold'>loading...</p>
            </div>
        </div>
    );
};

export default loading;
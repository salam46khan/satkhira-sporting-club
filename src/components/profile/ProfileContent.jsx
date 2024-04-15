import Empty from '@/assets/empty.jpg';
import Image from 'next/image'
const ProfileContent = ({profile}) => {
    return (
        <div className="w-full max-w-3xl mx-auto mt-5">
            <Image className='h-[160px] w-[160px] rounded-full mx-auto my-3' src={profile?.image ? profile?.image : Empty} height={160} width={160} alt='profile'/>

            <p className='text-2xl font-bold text-center text-pink-400'>{profile.name}</p>
            <p className='text-center'>{profile.email}</p>
        </div>
    );
};

export default ProfileContent;
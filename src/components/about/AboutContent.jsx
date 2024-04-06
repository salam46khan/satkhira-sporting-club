import Image from 'next/image';
import about from '@/assets/about_pic.jpeg'
const AboutContent = () => {
    return (
        <div className="text-gray-200">
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">About Us</p>
            </div>
            <div>
                <p>
                    Inaugurated in 2020 in the vibrant city of Satkhira, Satkhira Sporting Club embarked on a remarkable journey fueled by passion, dedication, and a love for sports. From humble beginnings to becoming a cornerstone of the local sporting community, our club has evolved into a powerhouse of talent and excellence.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 py-3 w-full items-center">
                <div className="w-full md:w-1/2">
                    <p className="text-2xl font-bold text-pink-400">Achievements</p>
                    <p>
                        Satkhira Sporting Club takes pride in its illustrious history of success and achievement. Our commitment to excellence has led to numerous triumphs on and off the field, including clinching prestigious trophies and championships. <br />
                        From thrilling victories in local tournaments to representing our region with distinction on the national stage, our club has consistently showcased the talent, determination, and sportsmanship that define our ethos. We cherish our achievements as a testament to the collective effort and dedication of our players, coaches, and supporters.
                    </p>
                </div>
                <div className='w-full md:w-1/2'>
                    <Image className='w-full h-full' src={about} alt='about practice photo' height={300} width={500} />
                </div>
            </div>
            <div>
                <p className="text-2xl font-bold text-pink-400">Player Development:</p>
                <p>
                    At Satkhira Sporting Club, player development lies at the heart of everything we do. With state-of-the-art facilities, expert coaching staff, and a supportive environment, we provide a platform for over 200 passionate players to hone their skills, unleash their potential, and achieve their sporting dreams.
                </p>
            </div>
        </div>
    );
};

export default AboutContent;
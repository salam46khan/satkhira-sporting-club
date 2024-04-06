import Image from 'next/image';
import Link from 'next/link';
import Cri from '@/assets/cric_practice.png'
import { IoArrowBack } from 'react-icons/io5';

const BlogDetail = () => {
    return (
        <div>
            <div className="divider divider-start divider-secondary">
                <p className="font-bold text-3xl">Course Details</p>
            </div>
            <div className="mt-5">
                <div className="w-full max-w-3xl p-3 mx-auto">
                    <Image src={Cri} width={400} height={300} alt='blog phot' className='w-full' />
                    <div className='py-3'>
                        <p className='text-3xl text-pink-400 font-bold'>Blog title fro this blog write here</p>
                        <p className=''>date </p>
                        <div className='pt-4'>
                            <p>
                                Intermediate: Intermediate courses are intended for learners who have some basic understanding of the subject and are looking to deepen their knowledge and skills. They may require some prior experience or familiarity with the topic.
                                Advanced: Advanced courses are geared towards individuals who already have a strong grasp of the subject and are seeking more specialized or in-depth knowledge. They often assume a high level of prior expertise.
                                Mixed: level may indicate a course that combines elements from different proficiency levels, catering to a broader range of learners. These courses may offer a variety of content suitable for different skill levels.
                            </p>
                        </div>
                        <div className='flex mt-3'>
                            <Link href={'/blog'} className='bg-pink-400 py-2 px-8 rounded-full flex items-center text-white gap-1'>
                                <span>Go Back</span>
                                <IoArrowBack className='text-2xl' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;
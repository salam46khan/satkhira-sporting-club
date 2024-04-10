import DashboardBlog from '@/components/dashboard/dashblog/DashboardBlog';
import { getBlog } from '@/lib/data';
import React from 'react';

const DashBlog = async() => {
    const blogs =await getBlog()
    return (
        <div className='pe-5'>
            <div className="divider divider-start">
                <p className="font-bold text-3xl">All Blog</p>
            </div>
            <DashboardBlog blogs={blogs} />
        </div>
    );
};

export default DashBlog;
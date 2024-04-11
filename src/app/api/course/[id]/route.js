import { Course } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const GET = async (request, {params}) => {
    const {id} = params;
    try{
        connectDb()
        const course = await Course.findById(id)
        return NextResponse.json(course)
    }
    catch(err){
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}

export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        connectDb();
        await Course.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete blog');
    }
};


import { Blog } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'

export const GET = async (request, {params}) => {
    const {id} = params;
    try{
        connectDb()
        const blog = await Blog.findById(id)
        return NextResponse.json(blog)
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
        await Blog.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete blog');
    }
};

export const PUT = async (request, { params }) => {
    const { id } = params;
    const data = await request.json();
    // console.log(data);
    const { title, image, body } = data;
    try {
        connectDb();
        const updatedBlog = await Blog.findByIdAndUpdate(id, { title, image, body }, { new: true });
        return NextResponse.json(updatedBlog);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update blog');
    }
};
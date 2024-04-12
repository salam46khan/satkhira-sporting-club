import { User } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'

export const PUT = async (request, { params }) => {
    const { id } = params;
    const data = await request.json();
    console.log(data);
    const { isAdmin } = data;
    try {
        connectDb();
        const updatedBlog = await User.findByIdAndUpdate(id, { isAdmin }, { new: true });
        return NextResponse.json(updatedBlog);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update blog');
    }
};
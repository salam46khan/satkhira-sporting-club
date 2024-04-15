import { Trainar } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        connectDb();
        await Trainar.findByIdAndDelete(id);
        return NextResponse.json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete blog');
    }
};
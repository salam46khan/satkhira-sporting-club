import { Blog } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'

export const GET = async (request) => {

    try {
        connectDb()
        const blogs = await Blog.find().sort({ createdAt: -1 })
        return NextResponse.json(blogs)
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}

export const POST = async (request, response) => {
    try {
        

        const data = await request.json();
        console.log(data);
        console.log(request.body);
        await connectDb();
        const { title, body, image } = data;
        const newBlog = new Blog({ title, body, image });
        await newBlog.save();

        response.status(201).json({ success: true, data: newBlog });
    }
    catch (err) {
        console.error(err);
       
        response.status(500).json({ success: false, error: 'Failed to post blog' });
    }
}


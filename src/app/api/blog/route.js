import { Blog } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'

export const GET = async (request) => {

    try{
        connectDb()
        const blogs = await Blog.find()
        return NextResponse.json(blogs)
    }
    catch(err){
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}
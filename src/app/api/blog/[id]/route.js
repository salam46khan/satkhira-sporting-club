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
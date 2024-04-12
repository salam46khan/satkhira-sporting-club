
import { User } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'

export const GET = async (request) => {

    try {
        connectDb()
        const blogs = await User.find().sort({ createdAt: -1 })
        return NextResponse.json(blogs)
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}

import { Manager } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const GET = async (request) => {

    try {
        connectDb()
        const course = await Manager.find()
        return NextResponse.json(course)
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}
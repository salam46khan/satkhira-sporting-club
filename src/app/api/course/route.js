import { Course } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const GET = async (request) => {

    try {
        connectDb()
        const course = await Course.find().sort({ createdAt: -1 })
        return NextResponse.json(course)
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}


export const POST = async (request, response) => {
    try {
        await connectDb(); // Assuming connectDb is an async function

        const { image, course, duration, level, batch, details, dp } = await request.json();

        const newCourse = new Course({ course, duration, level, batch, details, image, dp});
        await newCourse.save();

        // Send a success response
        response.status(201).json({ success: true, data: newCourse });
    } catch (err) {
        console.error('Error saving course:', err);
        // Send an error response
        response.status(500).json({ success: false, error: 'Failed to save course' });
    }
};


import { Trainar } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const GET = async (request) => {

    try {
        connectDb()
        const course = await Trainar.find()
        return NextResponse.json(course)
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to fetch trainar')
    }
}

export const POST = async (request, response) => {
    try {
        await connectDb(); // Assuming connectDb is an async function

        const { name, prof, image, link_fb, link_ins, link_x } = await request.json();

        const newTrainar = new Trainar({ name, prof, image, link_fb, link_ins, link_x });
        await newTrainar.save();

        // Send a success response
        response.status(201).json({ success: true, data: newTrainar });
    } catch (err) {
        console.error('Error saving course:', err);
        // Send an error response
        response.status(500).json({ success: false, error: 'Failed to save course' });
    }
};
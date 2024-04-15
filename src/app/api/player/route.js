
import { Player } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const GET = async (request) => {

    try {
        connectDb()
        const course = await Player.find()
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

        const { image, name, position, category } = await request.json();

        const newPlayer = new Player({ image, name, position, category});
        await newPlayer.save();

        // Send a success response
        response.status(201).json({ success: true, data: newPlayer });
    } catch (err) {
        console.error('Error saving course:', err);
        // Send an error response
        response.status(500).json({ success: false, error: 'Failed to save player' });
    }
};
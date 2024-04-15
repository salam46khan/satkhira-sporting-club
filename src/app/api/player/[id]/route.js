import { Player } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        connectDb();
        await Player.findByIdAndDelete(id);
        return NextResponse.json({ message: 'player deleted successfully' });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to delete blog');
    }
};
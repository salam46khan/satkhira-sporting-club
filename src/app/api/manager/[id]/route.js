import { Manager } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'

export const PUT = async (request, { params }) => {
    const { id } = params;
    const data = await request.json();
    console.log(data);
    const { name, service_year, image, achive, about, quality, link_fb, link_ins, link_x } = data;
    try {
        connectDb();
        const updatedManger = await Manager.findByIdAndUpdate(id, { name, service_year, image, achive, about, quality, link_fb, link_ins, link_x  }, { new: true });
        return NextResponse.json(updatedManger);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to update blog');
    }
};
import { Course } from "@/lib/models";
import { connectDb } from "@/lib/utils";
import { NextResponse } from 'next/server'


export const GET = async (request) => {

    try {
        connectDb()
        const course = await Course.find()
        return NextResponse.json(course)
    }
    catch (err) {
        console.log(err);
        throw new Error('failed to fetch blog')
    }
}

// export const POST = async (request) => {
//     try {
//         connectDb();

//         // Parse request body
//         const { course, level, batch, photo, duration, details } = await request.json();

//         // Create a new course document
//         const newCourse = new Course({
//             course, level, batch, photo, duration, details
//         });

//         // Save the new course to the database
//         await newCourse.save();

//         // Return success response
//         return NextResponse.json({ success: true, data: newCourse });
//     } catch (err) {
//         console.error(err);
//         // Return error response
//         return NextResponse.error('Failed to create course', { status: 500 });
//     }
// };


// export const POST = async (request, response) => {
//     try {
//         const data = await request.json();
//         console.log(data);
//         console.log(request.body);
//         await connectDb(); // Assuming connectDb is an async function
//         const { image, course, duration, level, batch, details } = data;
//         const newCourse = new Course({ level, batch, details ,course, duration, image });
//         await newCourse.save();

//         // Send a success response
//         response.status(201).json({ success: true, data: newBlog });
//     }
//     catch (err) {
//         console.error(err);
//         // Send an error response
//         response.status(500).json({ success: false, error: 'Failed to post blog' });
//     }
// }



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

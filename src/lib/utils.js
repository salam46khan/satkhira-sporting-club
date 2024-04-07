import mongoose from 'mongoose'

// import { mongoose } from "mongoose";

// const connection = {}

// export const connectDb = async () => {
//     try {
//         if(connection.isConnected){
//             console.log('using existing connection');
//             return;
//         }
//         const db = await mongoose.connect(`${process.env.MONGO}`)
//         connection.isConnected = db.connections[0].readyState

//         // await mongoose.connect(`${process.env.MONGO}`)
//     }
//     catch (err) {
//         console.log(err);
//         throw new Error(err)
//     }
// }

export const connectDb = async () => {
    if (mongoose.connections[0].readyState) {
        return true;
    }
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('ok connected');
        return true
    }
    catch (err) {
        console.log(err);
    }
}

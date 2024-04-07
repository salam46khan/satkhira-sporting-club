import { Blog } from "./models";
import { connectDb } from "./utils";
import {unstable_noStore as noStore} from 'next/cache'
 
export const getUsers = () =>{
    
}
export const getBlog = async () =>{
    try{
        connectDb()
        const blogs = await Blog.find()
        console.log(blogs);
        return blogs
    }
    catch(err){
        console.log(err);
        throw new Error('failed to fetch blog data')
    }
}

export const getSingleBlog = async (id) => {
    noStore()
    try{
        connectDb()
        const singleBlog = await Blog.findById(id)
        console.log(singleBlog);
        return singleBlog
    }
    catch(err){
        console.log(err);
        throw new Error('failed to fetch blog data')
    }
}
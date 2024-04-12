import { Blog } from "./models";
import { connectDb } from "./utils";
import {unstable_noStore as noStore} from 'next/cache'
 
export const getUsers = async() =>{
    const res = await fetch ('http://localhost:3000/api/user', {
        cache: 'no-store'
    })

    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}


export const getBlog = async () => {
    const res = await fetch ('http://localhost:3000/api/blog', {
        cache: 'no-store'
    })

    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}

export const getSingleBlog = async (id) => {
    const res = await fetch (`http://localhost:3000/api/blog/${id}`, {
        cache: 'no-store'
    })
    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}



export const getCourse = async () => {
    const res = await fetch ('http://localhost:3000/api/course', {
        cache: 'no-store'
    })

    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}


export const getSingleCourse = async (id) => {
    const res = await fetch (`http://localhost:3000/api/course/${id}`, {
        cache: 'no-store'
    })
    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}

export const getManager = async () => {
    const res = await fetch ('http://localhost:3000/api/manager', {
        cache: 'no-store'
    })

    if(!res.ok){
        throw new Error('somthing wrong')
    }
    return res.json()
}
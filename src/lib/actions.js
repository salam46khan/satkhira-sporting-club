'use server'

import { route } from "next/navigation"
import { signIn, signOut } from "./auth"
import { Course, User } from "./models"
import { connectDb } from "./utils"
import bcrypt from 'bcryptjs'
 


export const handleGithubLogin = async () => {
    // 'use server'
    await signIn('github')
}
export const handleLogout = async () => {
    // 'use server'
    await signOut()
}

export const handleRegister = async (formData) => {
    // 'use server'
    const {name, email, password, image} = Object.fromEntries(formData)

    console.log(name, email, password);
    try{
        connectDb()
        const user = await User.findOne({email})
        if(user){
            console.log('user already exsit');
            return 'user already exsit'
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            name,
            email,
            password: hashPassword,
            image
        })

        await newUser.save()
        console.log('save to database');
        route.push('/login')
    }
    catch(err){
        console.log(err);
        return {error : 'somthing wrong for post user data'}
    }
}

export const Login = async (formData) => {
    // 'use server'
    const {email, password} = Object.fromEntries(formData)

    console.log(email, password);

    try{
        await signIn('credentials', {email, password})
    }
    catch(err){
        console.log(err);
        return {error : 'somthing wrong for post user data'}
    }
}


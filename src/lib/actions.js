import { signIn, signOut } from "./auth"
import { User } from "./models"
import { connectDb } from "./utils"


export const handleGithubLogin = async () => {
    'use server'
    await signIn('github')
}
export const handleLogout = async () => {
    'use server'
    await signOut()
}

export const handleRegister = async (formData) => {
    const {name, email, password, image} = Object.fromEntries(formData)

    try{
        connectDb()
        const user = await User.findOne({email})
        if(user){
            console.log('user already exsit');
            return 'user already exsit'
        }
        const newUser = new User({
            name,
            email,
            password,
            image
        })
    }
    catch(err){
        console.log(err);
        return {error : 'somthing wrong for post user data'}
    }
}
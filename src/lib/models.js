import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title : {
        type: String
    },
    body : {
        type : String
    }
},{
    timestamps: true
})


const userSchema = new mongoose.Schema({
    name : {
        type: String
    },
    email : {
        type : String,
        unique: true
    },
    password : {
        type : String
    },
    image : {
        type: String
    },
    isAdmin : {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})


export const Blog = mongoose?.models.Blog || mongoose.model('Blog', blogSchema)
export const User = mongoose?.models.User || mongoose.model('User', userSchema)

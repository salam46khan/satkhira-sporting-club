import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title : {
        type: String
    },
    image: {
        type: String,
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

const courseSchema = new mongoose.Schema({
    course : {
        type : String,
    },
    batch : {
        type : String,
    },
    duration : {
        type : String
    },
    details : {
        type: String
    },
    level : {
        type: String
    },
    image: {
        type: String
    }
},{
    timestamps: true
})

const managerSchema = new mongoose.Schema({
    name: String,
    service_year: String,
    image: String,
    achive: String,
    quality: String,
    about: String,
    link_fb: String,
    link_ins: String,
    link_x: String,
},{
    timestamps: true
})


export const Blog = mongoose?.models?.Blog || mongoose.model('Blog', blogSchema)
export const User = mongoose?.models?.User || mongoose.model('User', userSchema)
export const Course = mongoose?.models?.Course || mongoose.model('Course', courseSchema)
export const Manager = mongoose?.models?.Manager || mongoose.model('Manager', managerSchema)

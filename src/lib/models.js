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


export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)

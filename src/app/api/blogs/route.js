import { connectDB } from "@/app/lib/dbconnect"
import BlogModel from "@/app/lib/models/blogmodel"


export async function GET(request) {
    await connectDB()
    const blog = await BlogModel.find();
    console.log("Blog from mongodb =>", blog);
    
    return Response.json({
        data: blog,
        mess: "Blog Fetched Successfully"
    })
};
export async function POST(request) {
    await connectDB()
    const blogs = await request.json()
    const BlogAdded = await new BlogModel({...blogs});
    await BlogAdded.save();
    console.log("Blog Added ==> ", BlogAdded);
    return Response.json({
        data: blogs,
        mess: "Blog Fetched Successfully"
    })
};
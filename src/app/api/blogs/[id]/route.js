import BlogModel from "@/app/lib/models/blogmodel";

export async function GET(request, {params}) {
    const id = params.id
    console.log("id ==>",id);

    const Blog = await BlogModel.findById(id)
   return Response.json(Blog)
    
}
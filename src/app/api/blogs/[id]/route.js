export async function GET(request, {params}) {
    const id = params.id
    console.log("id ==>",id);

   return Response.json(id)
    
}
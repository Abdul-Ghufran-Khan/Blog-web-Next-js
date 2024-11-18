import Link from "next/link";

export default async function Blogs() {
    let res = await fetch('http://localhost:3000/api/blogs',
        {cache : "no-cache"}
    );
    res =await res.json()
    
    return (
        <div className="bg-white min-h-screen">
        <div className="container flex justify-between mx-auto py-2">
            <h1 className="text-3xl font-bold text-center font-sans">Blogs</h1>
            <Link href={"/Blog/addBlogs"}>
            <button className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded" >Add Blog</button>
            </Link>
        </div>
        <div className="container mx-auto my-5">
            {res.data.map((blog) => {
                return (
                    <Link href={`/Blog/${blog._id}`} key={blog._id}>
                    <div className="border border-slate-500 rounded-md p-2 my-3">
                        <h2 className="text-3xl font-semibold">{blog.title}</h2>
                    </div>
                    </Link>
                )
            })}
        </div>
        </div>
    )
}
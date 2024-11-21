
export default async function name({ params }) {
    let res = await fetch(`http://localhost:3000/api/blogs/${params.id}`)
    res = await res.json()
    return (
        <div className="container mx-auto my-5">
            <div className="border border-slate-500 rounded-md p-2 my-3">
            <h2 className="text-3xl font-semibold">Blog Detail of {res.title}</h2>
            <h2 className="text-2xl font-semibold">Blog Detail of {res.body}</h2>
            <h2 className="text-xl underline font-normal">Blog Detail of {res.author}</h2>
            </div>
        </div>
    )

}
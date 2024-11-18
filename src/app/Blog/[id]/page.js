
export default async function name({params}) {
    return(
        <div className="container mx-auto my-5">
            <div className="border border-slate-500 rounded-md p-2 my-3">
                        <h2 className="text-3xl font-semibold">Blog Detail of {params.id}</h2>
                    </div>
        </div>
    )
    
}
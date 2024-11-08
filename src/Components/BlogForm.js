"use client";
import { addblog } from "@/actions/Blogs";
import { useRouter } from "next/navigation";
import { useRef } from "react";


export default function BlogForm() {
  const router = useRouter()
    const formref = useRef("null")
    return (
        <form ref={formref} 
        action={async (formdata) => {
          console.log("form Data => ", formdata);
          const obj = {
            title: formdata.get("title"),
            body: formdata.get("body"),
            author: formdata.get("author"),
          };
          console.log("form Data ==>", obj);
          
            await addblog(obj);
            router.push("/Blog");
            formref.current.reset();
        }} className="w-2/3 mx-auto flex flex-col gap-4">
        <input
          type="text"
          className="border border-gray-500 p-4 rounded bg-slate-200 flex flex-grow my-1"
          required
          name="title"
          placeholder="Blog Title" />

        <input
          type="text"
          className="border border-gray-500 p-4 rounded bg-slate-200 flex flex-grow my-1"
          required
          name="author"
          placeholder="Blog Author" />

        <textarea
          type="text"
          className="border border-gray-500 p-4 rounded bg-slate-200 flex flex-grow my-1"
          required
          name="body"
          placeholder="Blog Description" />

        <input 
        type="submit" 
        className="bg-gray-800 rounded m-2 font-semibold p-3 px-8 text-white" 
        value={"Add Blog"} />
      </form>
    )
    
}
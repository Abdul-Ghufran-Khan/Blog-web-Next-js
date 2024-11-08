"use server"

import { revalidatePath } from "next/cache";

export async function addblog(obj) {
    try {
       await fetch("http://localhost:3000/api/blogs" ,{
            method : "POST",
            body : JSON.stringify(obj)
        });
        revalidatePath("/blogs");
    } catch (error) {
        console.log(error);
    }
};

export async function updatetodo(obj) {
      try {
       await fetch("http://localhost:3000/api/todos" ,{
            method : "PUT",
            body : JSON.stringify(obj)
        });

        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }
};

export async function Deletetodo(obj) {
      try {
       await fetch("http://localhost:3000/api/todos" ,{
            method : "DELETE",
            body : JSON.stringify(obj)
        });

        revalidatePath("/");
    } catch (error) {
        console.log(error);
    }
};


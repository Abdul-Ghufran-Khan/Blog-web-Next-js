"use server"

import { revalidatePath } from "next/cache";

export async function addtodo(formdata) {
    const title = formdata.get('todo')
    try {
       await fetch("http://localhost:3000/api/todos" ,{
            method : "POST",
            body : JSON.stringify({ title })
        });

        revalidatePath("/");
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


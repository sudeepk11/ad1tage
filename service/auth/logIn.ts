"use server";

import axios from "axios"
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";
import { cookies } from "next/headers";

export default async function logIn(data: FormData): Promise<APIResponse<User>> {
    const email = data.get("email").toString()
    const password = data.get("password").toString()
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`,JSON.stringify({ email, password}), {
            headers: {
                "Content-Type": "application/json"
            }
        })
        cookies().set("auth-token", (data as APIResponse<User>).data.token)
        return data;
    } catch(err) {
        return err.response.data
    }
}
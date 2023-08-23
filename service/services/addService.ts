"use server";

import axios from "axios"
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";

export default async function addService(data: FormData): Promise<APIResponse<User>> {
    const property = data.get("name").toString()
    const category = data.get("category").toString()
    const description = data.get("desc").toString()

    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/services`,JSON.stringify({ property, category, description }), {
            headers: {
                "Content-Type": "application/json"
            }
        })
        return data;
    } catch(err) {
        return err.response.data
    }
}
"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { cookies } from "next/headers";

export default async function logOut(): Promise<APIResponse<any>> {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
        cookies().delete("access_token")
        return data
    } catch(err) {
        return err.response.data
    }
}
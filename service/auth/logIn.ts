"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";
import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export default async function logIn(
  data: FormData
): Promise<APIResponse<User>> {
  const email = data.get("email").toString();
  const password = data.get("password").toString();
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      JSON.stringify({ email, password }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    cookies().set("access_token", (data as APIResponse<User>).data.token);
    cookies().set("role", (data as APIResponse<User>).data.role);
    cookies().set("_id", (data as APIResponse<User>).data._id);
    revalidatePath("/admin");
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

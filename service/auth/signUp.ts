"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";

export default async function signUp(data: FormData): Promise<APIResponse<Omit<User, '_id' | 'token'>>> {
  const username = data.get("username").toString()
  const email = data.get("email").toString()
  const password = data.get("password").toString()
  const phoneNumber = data.get("phoneNumber").toString()
  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register`,
      JSON.stringify({ username, email, password, phoneNumber, is_owner: false }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data
  } catch (err) {
    return err.response.data;
  }
}

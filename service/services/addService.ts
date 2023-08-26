"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function addService(
  data: FormData
): Promise<APIResponse<User>> {
  const authToken = cookies().get('access_token')?.value
  if(!authToken) return redirect("/login")
  const name = data.get("name").toString();
  const category = data.get("category").toString();
  const desc = data.get("desc").toString();
  const userId = data.get("user_id").toString()

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/services`,
      JSON.stringify({ name, category, desc, Owner: userId }),
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${authToken}`,
          Authorization: `Bearer ${authToken}`
        },
      }
    );
    revalidatePath("/admin/listings");
    return data;
  } catch (err) {
    return err.response.data;
  }
}

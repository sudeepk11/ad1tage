"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function addReview(
  data: FormData
): Promise<APIResponse<User>> {
  const authToken = cookies().get("access_token")
  if(!authToken) return redirect("/login")
  const comment = data.get("comment").toString()
  const placeId = data.get("place_id").toString()

  const formData = { comment, rating: 4, place: placeId }

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
      JSON.stringify(formData),
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${authToken.value}`,
          Authorization: `Bearer ${authToken.value}`
        },
      }
    );
    revalidatePath("/service-details/[id]")
    return data;
  } catch (err) {
    return err.response.data;
  }
}

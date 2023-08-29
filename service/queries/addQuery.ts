"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function addQuery(
  data: FormData
): Promise<APIResponse<any>> {
  const name = data.get("name").toString();
  const subject = data.get("subject").toString();
  const body = data.get("body").toString();
  const phone_number = data.get("phone_number").toString();
  const email = data.get("email").toString();

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/query`,
      JSON.stringify({
        name,subject,body,phone_number,email
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

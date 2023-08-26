"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function addCategory(
  data: FormData
): Promise<APIResponse<any>> {
  const authToken = cookies().get("access_token")?.value;
  if (!authToken) return redirect("/login");
  const category = data.get("name").toString();
  const desc = data.get("desc").toString();
  const imageUrl = data.get("imageUrl").toString();

  try {
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`,
      JSON.stringify({
        category,
        desc,
        imageUrl,
        // imageUrl:"https://media.istockphoto.com/id/157677909/photo/nurse-or-doctor-pushing-a-wheelchair-outdoors.jpg?s=612x612&w=0&k=20&c=t2H7lO8cuQ1pCeFJYk-on-G2J6AVujKnhF72yK_t0zM=",
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${authToken}`,
        },
      }
    );
    revalidatePath("/admin/categories");
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

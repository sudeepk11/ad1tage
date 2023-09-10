"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { APIResponse } from "../../types/general";
import axios from "axios";
import exp from "constants";

export default async function deleteService(
  data: FormData
): Promise<APIResponse<any>> {
  "use server";
  const authToken = cookies().get("access_token")?.value;
  if (!authToken) return redirect("/login");
  const id = data.get("id").toString();

  try {
    const { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${authToken}`,
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    revalidatePath("/admin/services");
    return data;
  } catch (err) {
    console.log(err.response.data);
    return err.response.data;
  }
}

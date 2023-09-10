"use server";

import axios from "axios";
import { APIResponse } from "../../types/general";
import { User } from "../../types/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export default async function editService(
  data: FormData
): Promise<APIResponse<User>> {
  const authToken = cookies().get("access_token")?.value;
  if (!authToken) return redirect("/login");
  const name = data.get("name").toString();
  const city = data.get("city").toString();
  const address = data.get("address").toString();
  const lattitude = data.get("lattitude").toString();
  const longitude = data.get("longitude").toString();
  const phoneNumber = data.get("phone").toString();
  const category = data.get("category").toString();
  const desc = data.get("desc").toString();
  const photos = data.get("photos").toString();
  const userId = data.get("user_id").toString();
  const serviceId = data.get("service_id").toString();
  const pincode = data.get("pincode").toString();

  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${serviceId}`,
      JSON.stringify({
        name,
        city,
        address,
        // pincode,
        lattitude,
        longitude,
        phoneNumber,
        category,
        desc,
        Owner: userId,
        photos: [photos],
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Cookie: `access_token=${authToken}`,
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    revalidatePath("/admin/listings");
    return data;
  } catch (err) {
    return err.response.data;
  }

  // return { status: "success", message: "Service updated successfully" };
}

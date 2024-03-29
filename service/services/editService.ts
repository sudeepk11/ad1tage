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
  const displayName = data.get("displayName").toString();
  const city = data.get("city").toString();
  const address = data.get("address").toString();
  const lattitude = data.get("lattitude").toString();
  const longitude = data.get("longitude").toString();
  const phoneNumber = data.get("phoneNumber").toString();
  const category = data.get("category").toString();
  const desc = data
    .get("desc")
    .toString()
    .replace(/\r/g, "")
    .replace(/\t/g, "    ")
    .split("\n");
  const photos = data.get("photos").toString().split(",");
  const serviceId = data.get("serviceId").toString();
  const pincode = data.get("pincode").toString();
  const websiteLink = data.get("websiteLink").toString();
  const plotnumber = data.get("plotnumber").toString();

  try {
    const { data } = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${serviceId}`,
      JSON.stringify({
        name,
        displayName,
        city,
        address,
        pincode,
        websiteLink,
        plotnumber,
        lattitude,
        longitude,
        phoneNumber,
        category,
        desc,
        photos: [...photos],
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

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
  const authToken = cookies().get("access_token")?.value;
  if (!authToken) return redirect("/login");
  const name = data.get("name").toString();
  const city = data.get("city").toString();
  const address = data.get("address").toString();
  const lattitude = data.get("lattitude").toString();
  const longitude = data.get("longitude").toString();
  const phoneNumber = data.get("phone").toString();
  const category = data.get("category").toString();
  const desc = data
    .get("desc")
    .toString()
    .replace(/\r/g, "")
    .replace(/\t/g, "    ")
    .split("\n");
  const photos = data.get("photos").toString().split(",");
  const userId = data.get("user_id").toString();
  const pincode = data.get("pincode").toString();
  const plotnumber = data.get("plotnumber").toString();

  // console.log({
  //   name,
  //   desc: data
  //     .get("desc")
  //     .toString()
  //     .replace(/\r/g, "")
  //     .replace(/\t/g, "    ")
  //     .split("\n"),
  // });
  try {
    // return { status: "success", message: "success" };
    const { data } = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/services`,
      JSON.stringify({
        name,
        city,
        address,
        pincode,
        plotnumber,
        lattitude,
        longitude,
        phoneNumber,
        category,
        desc,
        Owner: userId,
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
}

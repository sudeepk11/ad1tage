"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { APIResponse } from "../../types/general";
import { revalidatePath } from "next/cache";

export default async function updateService(data: FormData): Promise<APIResponse<any>> {
    const authToken = cookies().get("access_token")?.value
    const serviceId = data.get("service_id")?.toString();
    const featured = data.get("featured")?.toString()
    const isApproved = data.get("approved")?.toString()
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/services/${serviceId}`,
        JSON.stringify({
          ...(featured && { featured: Boolean(featured)}),
          ...(isApproved && { isApproved: Boolean(isApproved) })
        }),
        {
          headers: {
            "Content-Type": "application/json",
            Cookie: `access_token=${authToken}`,
          },
        }
      );
      revalidatePath("/admin/listings")
      return data;
    } catch (err) {
      return err.response.data
    }
  };
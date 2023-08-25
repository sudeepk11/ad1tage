import Image from "next/image";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import deleteIcon from "../../Assets/Icons/delete.png";
import { Category } from "../../types/categories";
import axios from "axios";
import { APIResponse } from "../../types/general";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function CategoryRow({ _id, category, count, desc }: Category) {
  async function deleteCategory(data: FormData): Promise<APIResponse<any>> {
    "use server";
    const authToken = cookies().get("access_token")?.value;
    if (!authToken) return redirect("/login");
    const id = data.get("id").toString();

    try {
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Cookie: `access_token=${authToken}`,
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      revalidatePath("/admin/categories");
      return data;
    } catch (err) {
      return err.response.data;
    }
  }

  return (
    <tr className="my-3 border-b border-solid text-center" key={_id}>
      <td className="flex py-5 px-3">
        <input type="checkbox" name="" id="" />
        <Image
          src={BookingHistoryImage1}
          alt=""
          className="w-14 h-auto rounded-lg m-3"
        />
        <p className="mx-3">{category}</p>
      </td>

      <td className="py-5 px-3">
        <p className="mx-3">{desc}</p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{count}</p>
      </td>
      <td className="py-5 px-3">
        <form action={deleteCategory}>
          <input type="hidden" value={_id} name="id" />
          <button>
            <Image src={deleteIcon} alt="" className="w-5 h-auto" />
          </button>
        </form>
      </td>
    </tr>
  );
}

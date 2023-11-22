import { josefin } from "../../../utils/utilsFonts";
import axios from "axios";
import { Category } from "../../../types/categories";
import { cookies } from "next/headers";
import AddServicesForm from "../../../components/Admin/add-services/AddServicesForm";

export default async function Page() {
  let categories: Category[] = [];
  const userId = cookies().get("_id")?.value;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`
    );
    categories = data.data;
  } catch (err) {
    console.log(err.response.data);
  }

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Add Service
        </p>
      </div>
      <div className="flex justify-between gap-4 max-md:flex-col md:flex-wrap">
        <AddServicesForm categories={categories} userId={userId} />
      </div>
    </div>
  );
}

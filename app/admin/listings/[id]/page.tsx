import { josefin } from "../../../../utils/utilsFonts";
import AddServicesForm from "../../../../components/Admin/add-services/AddServicesForm";
import editService from "../../../../service/services/editService";
import axios from "axios";
import { Category } from "../../../../types/categories";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { Service } from "../../../../types/services";

export default async function Page({ params }: { params: { id: string } }) {
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

  let details: Service;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${params.id}?all=true`
    );
    details = data.data;
  } catch (err) {
    console.log(err.response.data);
    return notFound();
  }

  return (
    <div className="flex flex-col min-h-[90vh] max-lg:px-4 lg:px-[50px] py-5">
      <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Edit Service
        </p>
      </div>
      <div className="flex flex-1 justify-between gap-4 max-md:flex-col md:flex-wrap">
        <AddServicesForm
          categories={categories}
          userId={userId}
          details={details}
          action={editService}
        />
      </div>
    </div>
  );
}

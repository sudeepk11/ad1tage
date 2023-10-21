import { josefin } from "../../../utils/utilsFonts";
import FormWrapper from "../../../components/Admin/add-services/FormWrapper";
import addService from "../../../service/services/addService";
import axios from "axios";
import { Category } from "../../../types/categories";
import { cookies } from "next/headers";
import LocationForm from "../../../components/Admin/add-services/LocationPicker";
import MultiImageUploader from "../../../components/Upload/MultiImageUploader";

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
        <FormWrapper
          formClassName="grid grid-cols-8 w-full place-items-end gap-3 relative"
          buttonClassName="text-white w-full py-3 flex justify-center items-center"
          buttonWrapperClassName="w-full col-start-8 col-span-1 max-md:col-span-4 max-md:col-start-5"
          buttonText="Add Service"
          callback={addService}
        >
          <div className="w-full col-span-8">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Name
            </label>
            <input
              className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
              type="text"
              placeholder="Enter Name"
              name="name"
            />
          </div>
          <div className="w-full col-span-8">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Description
            </label>
            <textarea
              className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
              placeholder="Enter Category Description"
              name="desc"
            />
          </div>

          <div className="w-full col-span-2 max-md:col-span-4">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Category
            </label>
            <select
              className="w-full h-[52px] border border-solid bg-white border-greyishBrown rounded-lg p-3"
              placeholder="Enter Category"
              name="category"
            >
              {categories.map((opt) => (
                <option value={opt._id} key={opt._id}>
                  {opt.category}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full col-span-2 max-md:col-span-4">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Phone Number
            </label>
            <input
              className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
            />
          </div>

          <div className="w-full col-span-2 max-md:col-span-4">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Website URL ( Optional )
            </label>
            <input
              className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
              type="text"
              placeholder="www.myservice.com"
              name="website"
            />
          </div>
          <MultiImageUploader />
          <LocationForm />
          <input type="hidden" name="user_id" value={userId} />
        </FormWrapper>
      </div>
    </div>
  );
}

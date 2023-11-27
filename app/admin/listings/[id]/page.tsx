import { josefin } from "../../../../utils/utilsFonts";
import Image from "next/image";
import FormWrapper from "../../../../components/Admin/add-services/FormWrapper";
import editService from "../../../../service/services/editService";
import MultiImageUploader from "../../../../components/Upload/MultiImageUploader";
import axios from "axios";
import { Category } from "../../../../types/categories";
import { cookies } from "next/headers";
import LocationForm from "../../../../components/Admin/add-services/LocationPicker";
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
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Edit Service
        </p>
      </div>
      <div className="flex justify-between gap-4 max-md:flex-col md:flex-wrap">
        <FormWrapper
          formClassName="grid grid-cols-8 w-full place-items-end gap-3 relative"
          buttonClassName="text-white w-full py-3 flex justify-center items-center"
          buttonWrapperClassName="w-full col-start-8 col-span-1 max-md:col-span-4 max-md:col-start-5"
          buttonText="Update Service"
          callback={editService}
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
              defaultValue={details.name}
              required
            />
          </div>
          <div className="w-full col-span-8">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Description
            </label>
            <textarea
              className="w-full h-fit border border-solid border-greyishBrown rounded-lg p-3"
              placeholder="Enter Category Description"
              name="desc"
              defaultValue={details.desc.join("\n")}
              required
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
              required
            >
              {categories.map((opt) => (
                <option
                  value={opt._id}
                  key={opt._id}
                  selected={opt._id == details.category._id}
                >
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
              defaultValue={details.phoneNumber}
              required
            />
          </div>

          <div className="w-full col-span-2 max-md:col-span-4">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Website Link ( Optional )
            </label>
            <input
              className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
              type="text"
              placeholder="https://www.myservice.com"
              name="website"
              defaultValue={details?.websiteLink}
            />
          </div>
          <MultiImageUploader initImages={details.photos} />
          {/* <div className="w-full col-span-4 max-md:col-span-8">
            <label
              className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
            >
              Image URL
            </label>
            <div className="w-full flex gap-x-2 items-center">
              <Image
                src={details.photos[0]}
                alt=""
                width={52}
                height={100}
                className="h-full w-auto rounded-lg object-cover"
              />
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                name="photos"
                placeholder="Enter Category Image URL"
                defaultValue={details.photos[0]}
                required
              />
            </div>
          </div> */}
          <LocationForm
            initAddress={details.address}
            initCity={details.city}
            initPincode={details.pincode}
            initPlotnumber={details.plotnumber}
            initCoords={{
              latitude: Number(details.lattitude),
              longitude: Number(details.longitude),
            }}
          />
          <input type="hidden" name="user_id" value={userId} />
          <input type="hidden" name="service_id" value={params.id} />
        </FormWrapper>
      </div>
    </div>
  );
}

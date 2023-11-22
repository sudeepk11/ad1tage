"use client";
import { useState } from "react";
import addService from "../../../service/services/addService";
import { josefin } from "../../../utils/utilsFonts";
import MultiImageUploader from "../../Upload/MultiImageUploader";
import FormWrapper from "./FormWrapper";
import LocationForm from "./LocationPicker";

const AddServicesForm = ({ categories, userId }) => {
  const [key, setKey] = useState(0);

  const resetForm = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <FormWrapper
      formClassName="grid grid-cols-8 w-full place-items-end gap-3 relative"
      buttonClassName="text-white w-full py-3 flex justify-center items-center"
      buttonWrapperClassName="w-full col-start-8 col-span-1 max-md:col-span-4 max-md:col-start-5"
      buttonText="Add Service"
      callback={addService}
      resetForm={resetForm}
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
          placeholder="https://www.myservice.com"
          name="website"
        />
      </div>
      <MultiImageUploader key={key} />
      <LocationForm key={key + 1} />
      <input type="hidden" name="user_id" value={userId} />
    </FormWrapper>
  );
};

export default AddServicesForm;

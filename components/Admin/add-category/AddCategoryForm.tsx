"use client";
import { useState } from "react";
import { josefin } from "../../../utils/utilsFonts";
import FormWrapper from "../add-services/FormWrapper";
import SingleImageUploader from "../../Upload/SingleImageUploader";
import addCategory from "../../../service/categories/addCategory";

const AddCategoryForm = () => {
  const [key, setKey] = useState(0);

  const resetForm = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <FormWrapper
      formClassName="grid grid-cols-7 w-full place-items-end gap-3"
      buttonClassName="w-full h-[52px] bg-primary rounded-lg text-white text-base flex items-center justify-center"
      buttonWrapperClassName="w-full col-span-1 max-md:col-span-3 max-md:col-start-5"
      callback={addCategory}
      resetForm={resetForm}
    >
      <div className="w-full col-span-2">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Name
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          type="text"
          name="name"
          placeholder="Enter Category Name"
        />
      </div>
      <div className="w-full col-span-5">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Description
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          type="text"
          name="desc"
          placeholder="Enter Category Description"
        />
      </div>
      <SingleImageUploader key={key} />
    </FormWrapper>
  );
};

export default AddCategoryForm;

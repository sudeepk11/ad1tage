"use client";
import { useRef, useState, useEffect, useTransition, useContext } from "react";
import { useMultistepForm } from "../../../hooks/useMultipleForm";
import AdditionalDetailsForm from "./AddDetailsForm";
import BasicDetailsForm from "./BasicDetailsForm";
import LocationForm from "./LocationPicker";
import Button from "../../Common/Button";
import toast from "react-hot-toast";
import { AuthContext } from "../../../providers/AuthProvider";

type FormData = {
  name: string;
  city: string;
  address: string;
  pincode: string;
  plotnumber: string;
  lattitude: string;
  longitude: string;
  phoneNumber: string;
  category: string;
  desc: string;
  websiteLink: string;
  photos: string[];
  userId: string;
  displayName: string;
};

const INIT_DATA: FormData = {
  name: "",
  city: "",
  address: "",
  pincode: "",
  plotnumber: "",
  lattitude: "12.9716",
  longitude: "77.5946",
  phoneNumber: "",
  category: "",
  desc: "",
  websiteLink: "",
  photos: [],
  userId: "",
  displayName: "",
};

const AddServicesForm = ({ categories, userId, details = null, action }) => {
  const formRef = useRef(null);
  const [data, setData] = useState({ ...INIT_DATA });
  const [isPending, startTransition] = useTransition();
  const { user } = useContext(AuthContext);

  const formatDescription = (desc) => {
    const result = desc.map((line, index) => {
      // Check if it's the last line
      const isLastLine = index === desc.length - 1;

      // Add a newline character if it's not the last line
      return isLastLine ? line : line + "\n";
    });

    // Join the lines into a single string
    return result.join("");
  };

  useEffect(() => {
    if (details) {
      setData((prev) => ({
        ...prev,
        ...details,
        desc: formatDescription(details.desc),
        category: details.category._id,
        displayName: details.displayName,
        serviceId: details._id,
      }));
    } else {
      setData((prev) => ({ ...prev, userId, displayName: user?.username }));
    }
  }, [details, userId, user]);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  const { currentStepIndex, step, isFirstStep, isLastStep, back, next, reset } =
    useMultistepForm([
      <BasicDetailsForm key={1} {...data} updateFields={updateFields} />,
      <AdditionalDetailsForm
        key={2}
        categories={categories}
        {...data}
        updateFields={updateFields}
      />,
      <LocationForm key={3} {...data} updateFields={updateFields} />,
    ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (currentStepIndex === 1 && data.photos.length === 0)
      return toast.error("Please upload atleast one image");
    if (!isLastStep) return next();
    // Convert data into form data:
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    startTransition(async () => {
      const resp = await action(formData);

      if (resp.status === "success") {
        toast.success("Success!");
        setData(INIT_DATA);
        reset();
      } else {
        toast.error(resp.message || "An error occured");
      }
    });
  };

  return (
    <form
      ref={formRef}
      className="w-full flex flex-col justify-between"
      onSubmit={onSubmit}
    >
      <div className="grid grid-cols-8  place-items-end gap-3  relative">
        {step}
      </div>
      <div className="flex-grow"></div>
      <div className="col-span-full flex justify-between w-full my-4">
        {!isFirstStep && (
          <Button
            ButtonClasses="text-white py-3 flex justify-center items-center"
            ButtonText="Previous"
            type="button"
            ButtonClicked={back}
          />
        )}
        <div className="flex-grow"></div>
        {!details ? (
          <Button
            ButtonClasses="text-white py-3 flex justify-center align-self-end "
            ButtonText={
              isLastStep
                ? isPending
                  ? "Adding Service"
                  : "Add Service"
                : "Next"
            }
            disabled={isPending}
          />
        ) : (
          <Button
            ButtonClasses="text-white py-3 flex justify-center align-self-end "
            ButtonText={
              isLastStep
                ? isPending
                  ? "Updating Service"
                  : "Update Service"
                : "Next"
            }
            disabled={isPending}
          />
        )}
      </div>
    </form>
  );
};

export default AddServicesForm;

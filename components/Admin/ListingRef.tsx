"use client";

import Image from "next/image";
import { Service } from "../../types/services";
import { useContext, useRef, useState, useTransition } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import updateService from "../../service/services/updateService";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ListingRef({
  _id,
  name,
  photos,
  category,
  featured,
  city,
  isApproved,
  rating,
  views,
  role,
}: Service & { role: string }) {
  const [isLoading, setIsLoading] = useState({
    featured: false,
    isApproved: false,
  });
  console.log(rating.toPrecision(2));
  const { refresh } = useRouter();
  const { token } = useContext(AuthContext);

  const submit = async (key: keyof Service, value: any) => {
    setIsLoading((prev) => ({ ...prev, [key]: true }));
    try {
      let toggleEndpoint = "";

      if (key === "isApproved") {
        toggleEndpoint = "toggle-service-approval";
      } else if (key === "featured") {
        toggleEndpoint = "toggle-service-featured";
      }

      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/services/${toggleEndpoint}/${_id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Cookie: `access_token=${token}`,
          },
          withCredentials: true,
        }
      );
      refresh();
    } catch (err) {
      toast.error(err.response.data.message || "");
    } finally {
      setIsLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    <tr className="table-row my-3 border-b border-solid text-center">
      <td className="flex py-5 px-3 w-60">
        <input type="checkbox" name="" id="" />
        <Image
          src={photos[0]}
          alt={name}
          width={64}
          height={64}
          className="object-cover rounded-lg m-3"
        />
        <p className="flex items-center justify-center ml-3 font-semibold">
          {name}
        </p>
      </td>
      {role == "admin" && (
        <td
          className={`py-5 px-3 relative ${
            isLoading.featured ? "opacity-60" : "opacity-100"
          }`}
        >
          <input
            className={`mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
            type="checkbox"
            defaultChecked={isApproved}
            onChange={(e) => submit("isApproved", e.target.checked)}
            role="switch"
            name="featured"
            disabled={isLoading.isApproved}
            id={`flexSwitchCheckDefault${_id}`}
          />
          <label htmlFor={`flexSwitchCheckDefault${_id}`}>
            {featured ? "On" : "Off"}
          </label>
        </td>
      )}
      <td className="py-5 px-3">
        <p className="mx-3 p-3 h-fit rounded-lg bg-blue-100 text-primary">
          {category.category}
        </p>
      </td>
      {role == "admin" && (
        <td
          className={`py-5 px-3 relative  ${
            isLoading.featured ? "opacity-60" : "opacity-100"
          }`}
        >
          <input
            className={`mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]`}
            type="checkbox"
            defaultChecked={featured}
            onChange={(e) => submit("featured", e.target.checked)}
            role="switch"
            name="featured"
            disabled={isLoading.featured}
            id={`flexSwitchCheckDefault${_id}`}
          />
          <label htmlFor={`flexSwitchCheckDefault${_id}`}>
            {featured ? "On" : "Off"}
          </label>
        </td>
      )}
      <td className="py-5 px-3">
        <p className="mx-3">
          {typeof views === "number" ? views : views.length}
        </p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{rating.toPrecision(2)}</p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{city}</p>
      </td>
    </tr>
  );
}

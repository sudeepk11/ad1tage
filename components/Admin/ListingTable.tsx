import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";

const ListingData = [
  {
    id: 1,
    listing: "Listing 1",
    image: BookingHistoryImage1,
    status: "Approved",
    category: "Category 1",
    ssRecommendations: true,
    totalViews: "48",
    averageRating: "4.8",
    location: "Location 1",
  },
  {
    id: 2,
    listing: "Listing 2",
    image: BookingHistoryImage1,
    status: "Approved",
    category: "Category 2",
    ssRecommendations: true,
    totalViews: "24",
    averageRating: "3.1",
    location: "Location 2",
  },
  {
    id: 3,
    listing: "Listing 3",
    image: BookingHistoryImage1,
    status: "Rejected",
    category: "Category 3",
    ssRecommendations: false,
    totalViews: "45",
    averageRating: "4.2",
    location: "Location 3",
  },
  {
    id: 4,
    listing: "Listing 4",
    image: BookingHistoryImage1,
    status: "Approved",
    category: "Category 4",
    ssRecommendations: true,
    totalViews: "33",
    averageRating: "4.0",
    location: "Location 4",
  },
];

const ListingTable = (props: any) => {
  return (
    <table className="text-sm min-w-full max-w-fit">
      <thead>
        <tr className="my-5 border border-solid rounded-lg text-center">
          <th className="flex py-5 px-3">
            <input type="checkbox" name="" id="" />
            <p className="mx-3">Listing</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Status</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Category</p>
          </th>
          <th className="px-3">
            <p className="mx-3">SS Recommendations</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Total Views</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Average Rating</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Location</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {ListingData.map((data) => (
          <tr className="my-3 border-b border-solid text-center" key={data.id}>
            <td className="flex py-5 px-3 w-60">
              <input type="checkbox" name="" id="" />
              <Image
                src={data.image}
                alt=""
                className="w-14 h-auto rounded-lg m-3"
              />
              <p className="flex items-center justify-center ml-3 font-semibold">
                {data.listing}
              </p>
            </td>
            <td className="py-5 px-3">
              <p
                className={`mx-3 ${
                  data.status === "Approved" ? "text-green-500" : "text-red-500"
                }`}
              >
                {data.status}
              </p>
            </td>
            <td className="py-5 px-3">
              <p className="mx-3 p-3 h-fit rounded-lg bg-blue-100 text-primary">
                {data.category}
              </p>
            </td>
            <td className="py-5 px-3 relative">
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                checked={data.ssRecommendations}
                role="switch"
                id={`flexSwitchCheckDefault${data.id}`}
              />
              <label htmlFor={`flexSwitchCheckDefault${data.id}`}>
                {data.ssRecommendations ? "On" : "Off"}
              </label>
            </td>
            <td className="py-5 px-3">
              <p className="mx-3">{data.totalViews}</p>
            </td>
            <td className="py-5 px-3">
              <p className="mx-3">{data.averageRating}</p>
            </td>
            <td className="py-5 px-3">
              <p className="mx-3">{data.location}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ListingTable;

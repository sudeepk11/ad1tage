import React from "react";
import searchIcon from "../../../images/search-icon.png";
import Image from "next/image";
import Button from "../../../components/Common/Button";
import { josefin } from "../../../utils/utilsFonts";
import axios from "axios";
import { notFound } from "next/navigation";
import { Service } from "../../../types/services";
import ListingRef from "../../../components/Admin/ListingRef";
import { cookies } from "next/headers";

export default async function Page() {
  const authToken = cookies().get("access_token")?.value;
  const role = cookies().get("role")?.value;
  let listings: Service[] = [];
  let URLextention =
    role === "admin" ? "/services" : "/services/owner-services";
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}${URLextention}`,
      {
        headers: {
          Cookie: `access_token=${authToken}`,
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    listings = data.data;
    console.log(listings);
  } catch (err) {
    console.log("✅ Error: " + err);
    return notFound();
  }

  // try {
  //   const { data } = await axios.get(
  //     `${process.env.NEXT_PUBLIC_API_URL}/services/owner-services`,
  //     {
  //       headers: {
  //         Cookie: `access_token=${authToken}`,
  //         Authorization: `Bearer ${authToken}`,
  //       },
  //     }
  //   );
  //   // console.log(data.data);
  //   console.log("✅ response: " + JSON.parse(data.data));
  //   // listings = data.data;
  // } catch (err) {
  //   console.log("✅ Error: " + err);
  //   return notFound();
  // }
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start w-full">
        <div className="flex justify-between w-full">
          <p
            className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
          >
            Listings
          </p>
          <Button
            ButtonText={"+ Create Listing"}
            ButtonClasses={"text-white justify-center max-h-[58px] max-md:py-3"}
          ></Button>
        </div>
      </div>
      <div className="flex content-center justify-between gap-4 mt-4 mb-6 max-md:flex-col md:flex-wrap">
        <div className="flex justify-center items-start md:w-[507px] gap-4 max-md:w-full max-md:justify-between max-md:flex-col">
          <div className="relative top-0 left-0 search-bar max-md:w-[100%]">
            <input
              className="pl-12 md:w-[375px] max-md:w-full h-[52px] border border-solid border-greyishBrown rounded-lg"
              type="text"
              placeholder="Search"
            />
            <Image
              className="absolute top-[50%] -translate-y-[50%] left-4"
              src={searchIcon}
              alt={""}
            />
          </div>
          <div className="w-full search-button">
            <button className="w-[116px] max-md:w-full h-[52px] !bg-blue-100 rounded-lg text-primary text-base">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Listing Table */}
      <div className="w-full overflow-x-scroll">
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
            {listings.map((item) => (
              <ListingRef {...item} key={item._id} role={role} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

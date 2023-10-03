import React from "react";
import axios from "axios";
import { Service } from "../../../types/services";
import Image from "next/image";
import VisualHeader from "../../../components/Hotel/VisualHeader";
import { josefin } from "../../../utils/utilsFonts";
import Link from "next/link";
import Button from "../../../components/Common/Button";
import callIcon from "../../../Assets/Icons/call.png";
import verifiedIcon from "../../../Assets/Icons/verified.png";
import locationIcon from "../../../Assets/Icons/location.png";
import Rating from "../../../components/Common/Rating";
import RatingInput from "../../../components/Common/RatingInput";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { APIResponse } from "../../../types/general";
import ReviewRef from "../../../components/Hotel/ReviewRef";
import FormWrapper from "../../../components/Admin/add-services/FormWrapper";
import addReview from "../../../service/services/addReview";
import { RouteDetails } from "../../../components/ServiceDetails/routeDetails";

export default async function ServiceDetails({
  params,
}: {
  params: { id: number };
}) {
  let details: Service;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${params.id}?all=true`
    );
    details = data.data;
  } catch (err) {
    return notFound();
  }

  async function addOneToCall(): Promise<APIResponse<any>> {
    "use server";
    const authToken = cookies().get("access_token")?.value;
    if (!authToken) return redirect("/login");
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/services/update-service-call/${params.id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
            Cookie: `access_token=${authToken}`,
          },
        }
      );
      return data;
    } catch (err) {
      return err.response.data;
    }
  }

  const {
    _id,
    name,
    desc,
    lattitude,
    longitude,
    photos,
    address,
    rating,
    reviews,
    featured,
    isApproved,
    phoneNumber,
    Owner,
  } = details;

  return (
    <div>
      <VisualHeader
        photos={photos}
        latitude={parseFloat(lattitude)}
        longitude={parseFloat(longitude)}
      />
      <div className="grid grid-cols-12 px-4 lg:px-4 max-lg:flex-col gap-4">
        {/* Service details */}
        <div className="lg:col-span-7 col-span-12 max-lg:w-full px-4 max-lg:order-last">
          {/* Title */}
          <div className="flex justify-between py-5 mt-4">
            <h1
              className={` text-3xl flex items-center leading-10 w-full ${josefin.className} font-semibold flex-wrap`}
            >
              <span>{name}</span>
              {isApproved && (
                <Image
                  src={verifiedIcon}
                  alt=""
                  className="object-contain mx-2"
                />
              )}
              <div className="flex">
                {featured && (
                  <span className=" flex items-center justify-center text-[15px] text-primary bg-blue-100 md:mx-4 px-4 border-primary border-solid border-2 rounded-full">
                    # ad1tage recommended
                  </span>
                )}
              </div>
            </h1>
          </div>
          {/* Address and owner bar */}
          <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap mb-6">
            <div className="pb-[54px] w-full">
              <div className="flex w-full justify-between my-5">
                <a href="#service-reviews">
                  <span className="text-primary">
                    View Reviews {`(${reviews.length})`}
                  </span>
                </a>
                <div className="text-base bg-primary rounded-[20px] px-5 flex items-center text-white py-[2px] w-max">
                  ID: {_id.slice(0, 4)}
                </div>
              </div>
              <div className="flex max-md:flex-col max-md:gap-2 w-full justify-between my-5">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Image
                      src={locationIcon}
                      alt=""
                      className="object-contain"
                    />
                    <p>{address}</p>
                  </div>
                  <RouteDetails />
                </div>
                <div className="flex items-center justify-center gap-2 bg-blue-100 rounded-md px-2 py-3">
                  <p>
                    <span className="text-base text-primary">Owner:</span>{" "}
                    {Owner.username}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-medium">Description</h3>
              <p className="mb-5 text-base text-justify">
                {desc.map((item) => (
                  <span>
                    {item}
                    <br />
                  </span>
                ))}
              </p>
            </div>

            {/* <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent arrow-up"
            /> */}
          </div>
          {/* add reviews  */}
          <div id="service-reviews">
            <FormWrapper
              formClassName="flex flex-col items-left my-3"
              buttonClassName="text-white !bg-primary w-fit"
              buttonWrapperClassName="self-end"
              callback={addReview}
            >
              <h3 className="mb-5 text-xl font-medium">Reviews</h3>
              {/* Add reviews */}
              <p className="font-semibold">Add Reviews</p>
              <RatingInput />

              {/* Text area */}
              <textarea
                name="comment"
                id=""
                rows={5}
                className="w-full border border-solid border-primary rounded-lg my-3 py-3 px-6"
              ></textarea>
              <input type="hidden" value={_id} name="place_id" />
            </FormWrapper>
            {/* Reviews from users */}
            {reviews.map((item) => (
              <ReviewRef {...item} key={item._id} />
            ))}
          </div>
        </div>
        {/* Contact details */}
        <div className="lg:col-span-5 col-span-12 bg-[#FAFAFA] rounded-[16px] mt-10 px-[30px] py-[20px] h-max max-lg:w-full md:sticky top-[80px] right-0">
          <div className="flex justify-between">
            <Rating rating={rating} />

            <div className="text-base text-darkGrey">
              ({reviews.length} Reviews){" "}
            </div>
          </div>
          <div className="flex my-5 max-md:flex-col">
            {isApproved && (
              <div className="flex md:justify-center items-center">
                <Image src={verifiedIcon} alt="" className="object-contain" />
                <p className="text-sm font-semibold ml-1 mr-2">
                  ad1tage verified
                </p>
              </div>
            )}
            {featured && (
              <div className="max-md:mx-auto max-md:mt-4">
                <span
                  className={`${josefin.className} px-2 py-1  flex items-center justify-center text-[15px] text-blue-100 bg-primary  border-primary border-solid border-1.5 rounded-full w-fit`}
                >
                  #ad1tage recommended
                </span>
              </div>
            )}
          </div>
          <form action={addOneToCall} className="w-full">
            {/* <Link href={`tel:${phoneNumber}`}> */}
            <Button
              ButtonText="Call"
              icon={callIcon}
              ButtonClasses="!bg-primary mt-6 text-white font-medium w-full flex items-center justify-center my-6 !py-3"
            />
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}

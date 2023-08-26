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
import arrowIcon from "../../../Assets/Icons/arrow.png";
import Rating from "../../../components/Common/Rating";
import RatingInput from "../../../components/Common/RatingInput";
import { notFound, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { APIResponse } from "../../../types/general";
import ReviewRef from "../../../components/Hotel/ReviewRef";
import FormWrapper from "../../../components/Admin/add-services/FormWrapper";
import addReview from "../../../service/services/addReview";

export default async function ServiceDetails({
  params,
}: {
  params: { id: number };
}) {
  let details: Service;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services/${params.id}`
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
    Owner,
  } = details;
  return (
    <div>
      <VisualHeader
        photos={photos}
        latitude={parseFloat(lattitude)}
        longitude={parseFloat(longitude)}
      />
      <div className="grid grid-cols-12 max-lg:px-4 lg:px-[50px]  max-lg:flex-col gap-4">
        <div className="col-span-7 max-lg:w-full md:order-1 order-2">
          <div className="flex justify-between py-5 mt-4">
            <h1
              className={`text-3xl flex md:flex-row flex-col w-full ${josefin.className}`}
            >
              {name}
              <div className="flex md:mx-5 ">
                <Image src={verifiedIcon} alt="" className="object-contain" />
                <span className=" flex items-center justify-center text-[15px] text-primary bg-blue-100 mx-4 px-4 border-primary border-solid border-2 rounded-full">
                  # ad1tage recommended
                </span>
              </div>
            </h1>
          </div>
          <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap mb-6">
            <div className="pb-[54px] w-full">
              <div className="flex w-full justify-between my-5">
                <Link href="#service-reviews">
                  <span className="text-primary">
                    View Reviews {`(${reviews.length})`}
                  </span>
                </Link>
                <div className="text-base bg-primary rounded-[20px] px-5 flex items-center text-white py-[2px] w-max">
                  ID: {_id.slice(0, 4)}
                </div>
              </div>
              <div className="flex w-full justify-between my-5">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <Image
                      src={locationIcon}
                      alt=""
                      className="object-contain"
                    />
                    <p>{address}</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={arrowIcon} alt="" className="object-contain" />
                    <p>4 km</p>
                  </div>
                </div>
                <div className="flex gap-2 bg-blue-100 rounded-lg p-3">
                  <p>
                    <span className="text-base text-primary">Owner:</span>{" "}
                    {Owner.username}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-medium">Description</h3>
              <p className="mb-5 text-base text-justify">{desc}</p>
              {/* <p className="mb-5 text-base text-justify">
                Discover the best of Austin, with this studio East Austin
                apartment with balcony views over the city. It’ll be easy to
                simply show up and start living in this lavishly Blueground
                furnished apartment with its fully-equipped kitchen, spacious
                living room, and our dedicated, on-the-ground support. (ID
                #ATX6)
              </p>

              <p className="mb-5 text-base font-medium">
                Designed with you in mind
              </p> */}

              {/* <p className="mb-5 text-base  text-justify">
                Thoughtfully designed with bespoke finishes, modern furnishings,
                and a fully-equipped kitchen, you’ll enjoy that “I’m home”
                feeling with this Blueground apartment. Whether you’re lounging
                in your sophisticated living room streaming the latest and
                greatest entertainment on the smart TV or premium wireless
                speaker, or getting some well-earned rest on the superior
                quality mattress with luxury linens, you’ll fall in love with
                everything this East Austin apartment has to offer. This
                apartment also offers in-apartment laundry.
              </p> */}

              {/* <p className="mb-5 text-base font-medium">
                Sleeping arrangements
              </p> */}

              {/* <p className="mb-5 text-base">1 Queen Bed, 63 in / 160 cm</p>
              <p className="mb-5 text-base font-medium">
                Arrival and ongoing support
              </p>
              <p className="mb-5 text-base  text-justify">
                The entire apartment is yours to enjoy! You’ll either be
                personally greeted by a Blueground team member or given self
                check-in instructions. Throughout your stay, you’ll have access
                to our Client Experience team through the Blueground App. You
                can schedule additional cleanings, submit maintenance requests,
                and view our neighborhood recommendations with just a few taps.
                We’ll share all details upon confirmation of your stay.
              </p> */}
            </div>

            <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent arrow-up"
            />
          </div>

          {/* <div>
            <p className="mb-5 text-base font-medium">About the Location</p>
            <p className="mb-5 text-base text-justify">
              This furnished apartment is located in East Austin, one of the
              city’s hippest and most diverse neighborhoods. The area is home to
              a thriving nightlife scene that includes breweries, cocktail bars,
              and live-music venues like the Native Hostel and Parish. Anyone
              who likes to shop will delight in the selection at East Austin
              boutiques like Take Heart and Raven + Lily. The dining scene is
              also eclectic, featuring everything from Asian fusion to
              gastropubs to the world famous Franklin Barbeque, regarded by many
              to be the best BBQ in the US.
            </p>
            <Button
              ButtonText="See More"
              ButtonClasses="text-primary border-primary border bg-transparent arrow-down w-fit"
            />
          </div> */}

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
        <div className="col-span-5 bg-[#FAFAFA] rounded-[16px] mt-10 px-[30px] py-[20px] h-max max-lg:w-full md:sticky top-[80px] right-0 md:order-2 order-1">
          <div className="flex justify-between">
            <Rating rating={rating} />

            <div className="text-base text-darkGrey">
              ({reviews.length} Reviews){" "}
            </div>
          </div>
          <div className="flex my-5">
            <Image src={verifiedIcon} alt="" className="object-contain" />
            <span
              className={`${josefin.className} p-1 text-[15px] text-primary bg-blue-100 md:mx-4 ml-2 px-4 border-primary border-solid border-2 rounded-full w-fit`}
            >
              #ad1tage recommended
            </span>
          </div>
          <form action={addOneToCall} className="w-full">
            <Button
              ButtonText="Call"
              icon={callIcon}
              ButtonClasses="!bg-primary text-white font-semibold w-full flex items-center justify-center max-h-[58px] my-5"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

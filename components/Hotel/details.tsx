"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import sliderImg from "../../images/fujairah.png"
import sliderImg1 from "../../images/fujairah.png"

import Link from "next/link";
import map from "../../images/map.png";
import starImg from "../../images/star-icon.png";
import starOutlineImg from "../../images/Star-outline.png";
import userImg from "../../images/user-img.png";
import callIcon from "../../Assets/Icons/call.png";
import verifiedIcon from "../../Assets/Icons/verified.png";
import locationIcon from "../../Assets/Icons/location.png";
import arrowIcon from "../../Assets/Icons/arrow.png";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import CustomModal from "../Common/CustomModal";
import DatePicker from "../Common/DatePicker";
import Rating from "../Common/Rating";

var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,

  variableWidth: true,
  // centerMode: true,
};
const PropertyDetails = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [showCalenderModal, setShowCalenderModal] =
    React.useState<boolean>(false);

  return (
    <div>
      <div className="grid grid-cols-12 gap-6 relative overflow-hidden property-detail hotel-suggestion w-[98%] mx-auto my-5">
        <Slider {...settings} className="h-fit md:col-span-7 col-span-12">
          <Image
            className="w-full object-cover h-[450px] md:!w-[60vw] rounded-lg"
            src={sliderImg}
            alt=""
          />
          <Image
            className="w-full object-cover h-[450px] md:!w-[40vw] rounded-lg"
            src={sliderImg1}
            alt=""
          />
        </Slider>
    {/* MAPBOX CODE */}
      </div>

      <div className="grid grid-cols-12 max-lg:px-4 lg:px-[50px] flex max-lg:flex-col gap-4">
        <div className="col-span-7 max-lg:w-full md:order-1 order-2">
          <div className="flex justify-between py-5 mt-4">
            <h1
              className={`text-3xl flex md:flex-row flex-col w-full ${josefin.className}`}
            >
              KLE Medical Hospital , JNMC
              <div className="flex md:mx-5 ">
                <Image src={verifiedIcon} alt="" className="object-contain" />
                <span className=" flex items-center justify-center text-[15px] text-primary bg-blue-100 mx-4 px-4 border-primary border-solid border-2 rounded-full">
                  SeniorSpot Recommended
                </span>
              </div>
            </h1>
          </div>
          <div className="room-details flex gap-2 mt-[12px] justify-between flex-wrap mb-6">
            <div className="pb-[54px] w-full">
              <div className="flex w-full justify-between my-5">
                <Link href="#">
                  <span className="text-primary">View Reviews(21)</span>
                </Link>
                <div className="text-base bg-primary rounded-[20px] px-5 flex items-center text-white py-[2px] w-max">
                  ID: 1F2315
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
                    <p>Mysore</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={arrowIcon} alt="" className="object-contain" />
                    <p>4 km</p>
                  </div>
                </div>
                <div className="flex gap-2 bg-blue-100 rounded-lg p-3">
                  <Image src={userImg} alt="" className="object-contain" />
                  <div>
                    <p>Meena K.</p>
                    <span className="text-base text-primary">Owner</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-xl font-medium">Description</h3>
              <p className="mb-5 text-base text-justify">
                Discover the best of Austin, with this studio East Austin
                apartment with balcony views over the city. It’ll be easy to
                simply show up and start living in this lavishly Blueground
                furnished apartment with its fully-equipped kitchen, spacious
                living room, and our dedicated, on-the-ground support. (ID
                #ATX6)
              </p>

              <p className="mb-5 text-base font-medium">
                Designed with you in mind
              </p>

              <p className="mb-5 text-base  text-justify">
                Thoughtfully designed with bespoke finishes, modern furnishings,
                and a fully-equipped kitchen, you’ll enjoy that “I’m home”
                feeling with this Blueground apartment. Whether you’re lounging
                in your sophisticated living room streaming the latest and
                greatest entertainment on the smart TV or premium wireless
                speaker, or getting some well-earned rest on the superior
                quality mattress with luxury linens, you’ll fall in love with
                everything this East Austin apartment has to offer. This
                apartment also offers in-apartment laundry.
              </p>

              <p className="mb-5 text-base font-medium">
                Sleeping arrangements
              </p>

              <p className="mb-5 text-base">1 Queen Bed, 63 in / 160 cm</p>
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
              </p>
            </div>

            <Button
              ButtonText="See Less"
              ButtonClasses="text-primary border-primary border bg-transparent arrow-up"
            />
          </div>

          <div>
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
          </div>

          {/* add reviews  */}
          <div className="flex flex-col items-left my-3">
            <h3 className="mb-5 text-xl font-medium">Reviews</h3>
            {/* Add reviews */}
            <p className="font-semibold">Add Reviews</p>

            {/* Rating inputs with stars */}
            <div className="flex gap-2 my-2">
              <Image
                src={starOutlineImg}
                alt=""
                className="object-contain mx-[2px]"
              />
              <Image
                src={starOutlineImg}
                alt=""
                className="object-contain mx-[2px]"
              />
              <Image
                src={starOutlineImg}
                alt=""
                className="object-contain mx-[2px]"
              />
              <Image
                src={starOutlineImg}
                alt=""
                className="object-contain mx-[2px]"
              />
              <Image
                src={starOutlineImg}
                alt=""
                className="object-contain mx-[2px]"
              />
              <span> 0.0 </span>
            </div>

            {/* Text area */}
            <textarea
              name=""
              id=""
              rows={5}
              className="w-full border border-solid border-primary rounded-lg my-3"
            ></textarea>

            {/* Submit button */}
            <Button
              ButtonText="Publish"
              ButtonClasses="text-white !bg-primary w-fit self-end"
            />
          </div>
          {/* Reviews from users */}
          {Array.from(Array(3), (e, i) => {
            return (
              <div key = {i} className="border border-gray-300 shadow-sm rounded-lg p-4 flex flex-col items-left my-3">
                <div>
               
                  <div className="flex items-center gap-2">
                    <Image src={userImg} alt="" className="object-contain" />
                    <p>John Doe</p>
                  </div>

                  <div className="flex my-2">
                    <Rating rating={3.2} />
                  </div>
                  <p className="my-2 text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Unde temporibus reprehenderit consectetur, animi enim
                    explicabo repudiandae officiis ipsum amet veniam incidunt
                    excepturi beatae facilis voluptas dolores odio laudantium
                    iusto! Laboriosam!
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-span-5 bg-[#FAFAFA] rounded-[16px] mt-10 px-[30px] py-[20px] h-max max-lg:w-full md:sticky top-[80px] right-0 md:order-2 order-1">
          <div className="flex justify-between">
            <Rating rating={2.5} />

            <div className="text-base text-darkGrey">(21 Reviews) </div>
          </div>
          <div className="flex my-5">
            <Image src={verifiedIcon} alt="" className="object-contain" />
            <span
              className={`${josefin.className} text-[15px] text-primary bg-blue-100 md:mx-4 ml-2 px-4 border-primary border-solid border-2 rounded-full w-fit`}
            >
              SeniorSpot Recommended
            </span>
          </div>
          <Button
            ButtonClicked={() => setShowCalenderModal(true)}
            ButtonText="Call"
            icon={callIcon}
            ButtonClasses="!bg-primary text-white font-semibold w-full flex items-center justify-center max-h-[58px] my-5"
          />
        </div>
      </div>


     
    </div>
  );
};

export default PropertyDetails;

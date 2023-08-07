import Image from "next/image";
import React from "react";
import multiPerson from "../../images/multi-person.png";
import bedRoomIcon from "../../images/bedroom-icon.png";
import bathTubIcon from "../../images/bathtub-icon.png";
import starImg from "../../images/star-icon.png";

const AdminBookingHistoryCard = (props) => {
  return (
    <div className="px-4 py-4 bg-offWhite lg:px-6 rounded-xl w-full max-lg:basis-[48%] max-md:basis-[100%]">
      <div className="flex items-center justify-center">
        <div className="pr-2 max-lg:hidden">
          <Image src={props.image} alt="" width={100} height={100} />
        </div>
        <div className="grid w-full gap-4 lg:grid-cols-listing-5 lg:place-items-center">
          <div className="flex">
            <div className="pr-2 lg:hidden">
              <Image src={props.image} alt="" width={100} height={100} />
            </div>
            <div className="flex flex-col col-span-1 px-2 font-medium">
              <span className="pb-2 text-base">
                1 Bed Apartment with Stunning View
              </span>
              <span className="text-sm">
                $12,000.00<span className="text-secondary">/Month</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col col-span-1 px-2">
            <div className="flex flex-wrap justify-between pb-2 mt-3 text-base lg:pb-4">
              <div className="flex pr-3 text-sm">
                <Image
                  className="object-contain mr-2"
                  src={multiPerson}
                  alt=""
                />
                <span className="text-primary">2 Sleeps</span>
              </div>
              <div className="flex pr-3 text-sm">
                <Image
                  className="object-contain mr-2"
                  src={bedRoomIcon}
                  alt=""
                />
                <span className="text-primary">1 Bedroom</span>
              </div>
              <div className="flex pr-3 text-sm">
                <Image
                  className="object-contain mr-2"
                  src={bathTubIcon}
                  alt=""
                />
                <span className="text-primary">1 Bath</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Image className="object-contain mr-1" src={starImg} alt="" />
              <Image className="object-contain mr-1" src={starImg} alt="" />
              <Image className="object-contain mr-1" src={starImg} alt="" />
              <Image className="object-contain mr-1" src={starImg} alt="" />
              <Image className="object-contain mr-1" src={starImg} alt="" />
              <span className="pt-2 text-base font-medium">5.0</span>
            </div>
          </div>
          <div className="flex flex-col col-span-1 ">
            <div className="mb-2 text-base font-medium lg:mb-8">Location</div>
            <div className="font-normal text-">Sharjah, Dubai</div>
          </div>
          <div className="flex flex-col col-span-1 ">
            <div className="mb-2 text-base font-medium lg:mb-8">Status</div>
            <div className="text- font-normal text-[#00AC26]">In Progress</div>
          </div>
          <div className="flex flex-col col-span-1 ">
            <div className="mb-2 text-base font-medium lg:mb-8">Action</div>
            <div className="flex gap-3 font-normal">
              <button className="w-[100px] h-[30px] bg-[#e6e6e6] rounded-lg text-blackLight">
                Check-out
              </button>
              <button className="w-[69px] h-[30px] bg-[#fceaea] rounded-lg text-[#EB5757]">
                Delete
              </button>
              <button className="h-[30px] bg-[#fbf0e9] rounded-lg text-[#F2994A] w-max px-2">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBookingHistoryCard;

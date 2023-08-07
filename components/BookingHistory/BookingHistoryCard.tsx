import Image from "next/image";
import React from "react";
import multiPerson from "../../images/multi-person.png";
import bedRoomIcon from "../../images/bedroom-icon.png";
import bathTubIcon from "../../images/bathtub-icon.png";
import starImg from "../../images/star-icon.png";

const BookingHistoryCard = (props) => {
  return (
    <div className="bg-[#FAFAFA] px-4 lg:px-6 py-4 my-4 rounded-xl">
      <div className="flex">
        <div className="pr-2 max-lg:hidden">
          <Image src={props.image} alt="" width={100} height={100} />
        </div>
        <div className="grid w-full gap-4 lg:grid-cols-4 lg:place-items-center">
          <div className="flex">
            <div className="pr-2 lg:hidden">
              <Image src={props.image} alt="" width={100} height={100} />
            </div>
            <div className="flex flex-col col-span-1 px-2 font-medium">
              <span className="pb-2 text-base">
                1 Bed Apartment with Stunning View
              </span>
              <span className="text-sm">
                $12,000.00<span className="text-[#CAB08F]">/Month</span>
              </span>
            </div>
          </div>

          <div className="flex flex-col col-span-1 px-2">
            <div className="flex mt-[12px] justify-between text-base flex-wrap pb-2 lg:pb-4">
              <div className="flex pr-3 text-sm">
                <Image
                  className="object-contain mr-2"
                  src={multiPerson}
                  alt=""
                />
                <span className="text-[#886750]">2 Sleeps</span>
              </div>
              <div className="flex pr-3 text-sm">
                <Image
                  className="object-contain mr-2"
                  src={bedRoomIcon}
                  alt=""
                />
                <span className="text-[#886750]">1 Bedroom</span>
              </div>
              <div className="flex pr-3 text-sm">
                <Image
                  className="object-contain mr-2"
                  src={bathTubIcon}
                  alt=""
                />
                <span className="text-[#886750]">1 Bath</span>
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
          <div className="col-span-1 px-2 w-max">
            <div className="flex flex-col  px-6 py-3 bg-white border border-[#E1D9CE] rounded-lg text-sm">
              <span className="font-medium text-[#939393] pb-1">
                Booking Dates
              </span>
              <span className="font-normal text-black">
                {props.bookingDate}
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center col-span-1 px-2 lg:justify-self-end">
            <span className="text-[#939393] text-sm lg:self-end">
              Remaining Days & Time
            </span>
            <span className="text-[28px] font-normal">
              {props.remainingTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistoryCard;

import React from "react";
import BackButton from "../Common/BackButton";
import arrowDownSolid from "../../images/arrow-down-solid.png";
import searchIcon from "../../images/search-icon.png";
import Image from "next/image";
import Button from "../Common/Button";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import BookingHistoryImage2 from "../../images/bookinghistory2.png";
import BookingHistoryImage3 from "../../images/bookinghistory3.png";
import AdminBookingHistoryCard from "./AdminBookingHistoryCard";
import Dropdown from "../Common/Dropdown";

const listingTopArr = [
  { name: "Checking Out (0)", active: false },
  { name: "Currently Hosting (0)", active: true },
  { name: "Arriving Soon (0)", active: false },
  { name: "Upcoming (0)", active: false },
  { name: "Pending Review (0)", active: false },
];
const AdminListing = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
          <BackButton buttonText="Listing" btnProperty={"pb-0"} />
          <div className="flex justify-between max-md:gap-4 md:gap-2 md:max-w-fit max-md:grid max-md:grid-cols-2 max-md:w-full max-md:justify-between md:flex-wrap">
            {listingTopArr &&
              listingTopArr.length > 0 &&
              listingTopArr.map((data, index) => {
                return (
                  <>
                    {!data.active ? (
                      <p className="p-2 px-3 mr-4 text-sm rounded-full w-max bg-offWhite text-darkGrey h-max">
                        {data.name}
                      </p>
                    ) : (
                      <p className="p-2 px-3 mr-4 text-sm text-white rounded-full w-max bg-blackLight h-max">
                        {data.name}
                      </p>
                    )}
                  </>
                );
              })}
          </div>
          <div className="opacity-1 invisible w-[84px] max-xl:hidden"></div>
        </div>
        <div className="flex content-center justify-between gap-4 mt-4 mb-6 max-md:flex-col md:flex-wrap">
          {/* <div className="filter border border-solid border-greyishBrown rounded-lg p-2 w-[185px] h-[52px] text-darkGrey text-base">
            <Image
              className="relative top-[12px] left-[145px]"
              src={arrowDownSolid}
              alt={""}
            />
            <div>Filter</div>
          </div> */}
          <Dropdown dropdownBeforeImg="hidden" />
          <div className="flex justify-center items-start md:w-[507px] gap-4 max-md:w-full max-md:justify-between max-md:flex-col">
            <div className="relative top-0 left-0 search-bar max-md:w-[100%]">
              <input
                className="pl-12 md:w-[375px] max-md:w-full h-[52px] border border-solid border-greyishBrown rounded-lg"
                type="text"
                placeholder="Search by keyword"
              />
              <Image
                className="absolute top-[50%] -translate-y-[50%] left-4"
                src={searchIcon}
                alt={""}
              />
            </div>
            <div className="w-full search-button">
              <button className="w-[116px] max-md:w-full h-[52px] bg-blackLight rounded-lg text-white text-base">
                Search
              </button>
            </div>
          </div>

          <button className="py-3 px-6 border border-solid border-blackLight rounded-lg md:w-max h-[52px] text-base max-md:w-full">
            Contact Support
          </button>
        </div>
        <div className="flex flex-wrap justify-between gap-4">
          <AdminBookingHistoryCard
            image={BookingHistoryImage1}
            bookingDate="15 Jun 2022 → 20 Jun 2022"
            remainingTime="2 Days, 12:00:00"
          />
          <AdminBookingHistoryCard
            image={BookingHistoryImage2}
            bookingDate="15 Jun 2022 → 20 Jun 2022"
            remainingTime="2 Days, 12:00:00"
          />
          <AdminBookingHistoryCard
            image={BookingHistoryImage3}
            bookingDate="15 Jun 2022 → 20 Jun 2022"
            remainingTime="2 Days, 12:00:00"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminListing;

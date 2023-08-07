import React from "react";
import BackButton from "../Common/BackButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormikForm from "./FormikForm";
import checkboxIcon from "../../images/checkbox.png";
import bookingBedroom from "../../images/booking-bedroom.png";
import arrow from "../../images/arrow-left.png";
import lineIcon from "../../images/line_icon.png";
import Image from "next/image";
import FormikFormPayment from "./FormikFormPayment";

const BookingProperty = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <BackButton buttonText="Back" />
      <div className="flex gap-16">
        <div className="w-2/3 left-section">
          <div className="bg-offWhite rounded-2xl">
            <div className="p-4">
              <FormikForm />
            </div>
          </div>
          <div className="mt-5 bg-offWhite rounded-2xl">
            <div className="p-4">
              <FormikFormPayment />
            </div>
          </div>
          <div className="mt-5 bg-offWhite rounded-2xl">
            <div className="p-4">
              <div className="text-base font-medium text-black">
                Pay now to reserve this property
              </div>
              <div className="p-3 mt-1 bg-white rounded-xl">
                <div className="flex gap-[35.9rem]">
                  <div className="text-sm font-medium text-black">Subtotal</div>
                  <div className="text-sm font-normal text-black">
                    AED 71,736.26
                  </div>
                </div>
                <div className="flex mt-2 gap-[27.9rem]">
                  <div className="text-sm font-medium text-black">
                    Card processing fee (3.2%)
                  </div>
                  <div className="text-sm font-normal text-black">
                    AED 3,422.29
                  </div>
                </div>
                <div>
                  <Image className="w-full my-3" src={lineIcon} alt={""} />
                </div>
                <div className="flex gap-[34.7rem]">
                  <div className="text-sm font-medium text-black">
                    Total cost
                  </div>
                  <div className="text-sm font-semibold text-black">
                    AED 110,368.87
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex mt-8">
              <Image src={checkboxIcon} alt={""} />
              <div className="ml-2 text-base font-normal text-black ">
                I agree to recieve exclusive deals, guest perks, the latest
                Trophy news, and more!
              </div>
            </div>
            <div className="mt-3 text-sm font-normal text-black">
              By booking, I agree to the Terms and Conditions, and understand
              that the booking is not finalized until the background check is
              complete.
            </div>
            <div className="mt-5">
              <button className="text-white bg-primary w-[140px] h-[52px] rounded-lg">
                Book
              </button>
            </div>
          </div>
        </div>
        <div className="w-3/5 right-section min-h-max">
          <div className="p-4 rounded-2xl bg-offWhite">
            <div>
              <Image src={bookingBedroom} alt={""} />
            </div>
            <div className="mt-3 text-lg font-medium text-black">
              1 Bed Apartment with Stunning View
            </div>
            <div className="flex mt-2 text-base font-normal text-darkGrey">
              15 Jun 2022
              <Image
                className="rotate-180 w-5 h-2.5 my-2 mr-2 ml-2"
                src={arrow}
                alt={""}
              />
              20 Jun 2022
            </div>
            <div className="p-4 mt-2 bg-white rounded-lg">
              <div className="flex gap-[9.8rem]">
                <p className="text-sm font-normal text-black">Rent per month</p>
                <p className="text-sm font-normal text-black">AED 61,450.00</p>
              </div>
              <div className="flex mt-3 gap-[9.1rem]">
                <p className="text-sm font-normal text-black">
                  Utilities per month
                </p>
                <p className="text-sm font-normal text-black">AED 2,370.00</p>
              </div>
              <div className="flex mt-3 gap-[8.9rem]">
                <p className="text-sm font-medium text-black">
                  Monthly subtotal
                </p>
                <p className="text-sm font-normal text-black">AED 59,080.00</p>
              </div>
              <div>
                <Image className="mt-5 w-[361px]" src={lineIcon} alt={""} />
              </div>
              <div className="flex mt-3 gap-[14.4rem]">
                <p className="text-sm font-semibold text-black">Pets</p>
                <p className="text-sm font-normal text-black">AED 59,080.00</p>
              </div>
              <div>
                <Image className="mt-5 w-[361px]" src={lineIcon} alt={""} />
              </div>
              <div className="flex gap-[9.4rem] mt-3">
                <p className="text-sm font-normal text-black">
                  Fees & insurance
                </p>
                <p className="text-sm font-normal text-black">AED 8,304.00</p>
              </div>
              <div className="flex gap-[2.8rem] mt-3">
                <div className="flex">
                  <p className="text-sm font-medium text-black">
                    Total charges
                  </p>
                  <p className="ml-1 text-sm font-normal text-darkGrey">
                    (Single payment)
                  </p>
                </div>
                <p className="text-sm font-normal text-black">AED 71,736.26</p>
              </div>
              <div className="flex gap-[4.1rem] mt-3">
                <p className="text-sm font-normal text-black">
                  Refundable security deposit
                </p>
                <p className="text-sm font-normal text-black">AED 29,540.00</p>
              </div>
              <div>
                <Image className="mt-5 w-[361px]" src={lineIcon} alt={""} />
              </div>
              <div className="flex gap-[6.5rem] mt-3">
                <div className="flex">
                  <p className="text-sm font-medium text-black">Total</p>
                  <p className="ml-1 text-sm font-normal text-darkGrey">
                    (1 month & 1 day)
                  </p>
                </div>
                <p className="text-sm font-normal text-black">AED 101,276.26</p>
              </div>
            </div>
          </div>

          <div className="p-4 mt-4 rounded-2xl bg-offWhite">
            <div className="text-lg font-medium text-black">
              Reserve this apartment
            </div>
            <div className="p-4 mt-2 bg-white rounded-lg">
              <div className="flex gap-[7.9rem]">
                <p className="text-base font-normal text-black">Due now</p>
                <p className="text-base font-normal text-black">
                  AED 106,946.058
                </p>
              </div>
              <div>
                <Image className="mt-4 mb-1" src={lineIcon} alt={""} />
              </div>
              <div className="flex mt-3 gap-[12.7rem]">
                <p className="text-sm font-normal text-black">Rent</p>
                <p className="text-sm font-normal text-black">AED 60,985.11</p>
              </div>
              <div className="flex mt-3 gap-[11.5rem]">
                <p className="text-sm font-normal text-black">Utilities</p>
                <p className="text-sm font-normal text-black">AED 51,985.51</p>
              </div>
              <div className="flex mt-3 gap-[12.3rem]">
                <p className="text-sm font-normal text-black">Pets</p>
                <p className="text-sm font-normal text-black">AED 24,985.56</p>
              </div>
              <div className="flex mt-3 gap-[6.2rem]">
                <p className="text-sm font-normal text-black">
                  Renter insurance
                </p>
                <p className="text-sm font-normal text-black">AED 67,985.34</p>
              </div>
              <div className="flex mt-3 gap-[9.6rem]">
                <p className="text-sm font-normal text-black">Booking fee</p>
                <p className="text-sm font-normal text-black">AED 18,985.12</p>
              </div>
              <div className="flex mt-3 gap-[4.5rem]">
                <p className="text-sm font-normal text-black">
                  One-time cleaning fee
                </p>
                <p className="text-sm font-normal text-black">AED 60,985.61</p>
              </div>
              <div className="flex mt-3 gap-[7.1rem]">
                <p className="text-sm font-normal text-black">
                  Security deposit
                </p>
                <p className="text-sm font-normal text-black">AED 60,985.46</p>
              </div>
            </div>
            <div className="mt-6 text-lg font-medium text-black">
              After move-out
            </div>
            <div className="mt-2 text-base font-normal text-black">
              Recieve your AED 34,240.00 deposit back within 30 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProperty;

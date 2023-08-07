import Image from "next/image";
import React from "react";
import kitchen from "../../images/feKitchenCooker2.png";
import towelsIcon from "../../images/towels.png";
import headphone from "../../images/headphone.png";
import wifi from "../../images/wifi.png";
import airConditioning from "../../images/air-conditioning.png";
import heater from "../../images/heater.png";
import laundary from "../../images/laundary.png";
import dishwasher from "../../images/dishwasher.png";
import gymIcon from "../../images/gym.png";
import elevatorIcon from "../../images/elevator.png";
import rooftopIcon from "../../images/rooftop.png";
import freeParking from "../../images/free-parking.png";
import moveInIcon from "../../images/move-in.png";
import noSmokeIcon from "../../images/no-smoke.png";
import noPetsIcon from "../../images/no-pets.png";
import cancelIcon from "../../images/cancel.png";
import bookingConfirmation from "../../images/booking-cofirmation.png";

const Amenities = () => {
  return (
    <div>
      <h3 className="mb-5 text-xl">Amenities</h3>
      <div>
        <p className="text-base">Speciality</p>
        <div className="grid grid-cols-4 max-w-[650px] w-full my-[30px]">
          <div className="flex items-start ">
            <Image src={kitchen} alt="" className="object-contain mr-[10px]" />
            <p className="text-sm">Fully equipped kitchen</p>
          </div>

          <div className="flex items-start ">
            <Image
              src={towelsIcon}
              alt=""
              className="object-contain mr-[10px]"
            />
            <p className="text-sm">Linen & towels</p>
          </div>

          <div className="flex items-start ">
            <Image
              src={headphone}
              alt=""
              className="object-contain mr-[10px]"
            />
            <p className="text-sm ">Ongoing support</p>
          </div>

          <div className="flex items-start ">
            <Image src={wifi} alt="" className="object-contain mr-[10px]" />
            <p className="text-sm">Wifi</p>
          </div>
        </div>

        <div>
          <p className="text-base">Apartment</p>
          <div className="grid grid-cols-4 max-w-[650px] w-full my-[30px]">
            <div className="flex items-start ">
              <Image
                src={airConditioning}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Air Conditioning</p>
            </div>

            <div className="flex items-start ">
              <Image src={heater} alt="" className="object-contain mr-[10px]" />
              <p className="text-sm">Heating</p>
            </div>

            <div className="flex items-start ">
              <Image
                src={laundary}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Laundry in unit</p>
            </div>

            <div className="flex items-start ">
              <Image
                src={dishwasher}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Dishwasher</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base">Building</p>
          <div className="grid grid-cols-4 max-w-[650px] w-full my-[30px]">
            <div className="flex items-start ">
              <Image
                src={gymIcon}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Gym</p>
            </div>

            <div className="flex items-start ">
              <Image
                src={elevatorIcon}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Elevator</p>
            </div>

            <div className="flex items-start ">
              <Image
                src={rooftopIcon}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Rooftop</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-base">Add-ons</p>
          <div className="grid grid-cols-4 max-w-[650px] w-full my-[30px]">
            <div className="flex items-start ">
              <Image
                src={freeParking}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">Free Parking</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-xl">Things to Know</h3>
          <div>
            <p className="text-base">Add-ons</p>
            <div className="grid grid-cols-3 max-w-[650px] w-full my-[30px]">
              <div className="flex items-start ">
                <Image
                  src={moveInIcon}
                  alt=""
                  className="object-contain mr-[10px]"
                />
                <p className="text-sm">
                  Move in after 4 pm • Move out by 11 am
                </p>
              </div>

              <div className="flex items-start ">
                <Image
                  src={noSmokeIcon}
                  alt=""
                  className="object-contain mr-[10px]"
                />
                <p className="text-sm">No Smoking</p>
              </div>

              <div className="flex items-start ">
                <Image
                  src={noPetsIcon}
                  alt=""
                  className="object-contain mr-[10px]gi"
                />
                <p className="text-sm">No Pets</p>
              </div>
            </div>

            <p className="mb-5 text-base">Booking cancellation and refunds</p>
            <div className="flex items-start mb-[31px]">
              <Image
                src={cancelIcon}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">
                100% refund when cancelling 30+ days prior to move in
              </p>
            </div>

            <div className="flex items-start mb-[31px]">
              <Image
                src={bookingConfirmation}
                alt=""
                className="object-contain mr-[10px]"
              />
              <p className="text-sm">
                Booking confirmation is contingent upon secure ID and background
                checks. We will offer a full refund if the reservation is
                cancelled as a result of these checks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;

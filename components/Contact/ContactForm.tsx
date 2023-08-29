"use client";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import React from "react";
import arrowDropdown from "../../images/arrow-down-solid.png";

const ContactForm = () => {
  return (
    <div className="flex flex-col xl:grid grid-cols-2 gap-8">
      <input
        type="text"
        className="p-4 border rounded-lg placeholder:font-medium border-greyishBrown max-md:w-full md:basis-[48%]"
        id="name"
        name="name"
        placeholder="Name"
      />

      <div className="relative max-md:w-full md:basis-[48%] ">
        <select
          className="w-full p-4 bg-transparent border rounded-lg appearance-none placeholder:font-medium border-greyishBrown "
          name="subject"
        >
          <option value="ChooseSubject" className="text-darkGrey">
            Choose Subject
          </option>
          <option value="sub1">Enquiry about services</option>
          <option value="sub2">Regarding Joining ad1tage</option>
          <option value="sub3">Others</option>
        </select>
        <Image
          src={arrowDropdown}
          alt=""
          className="absolute object-contain top-[50%] -translate-y-[50%] right-5"
        />
      </div>

      <input
        className="p-4 border rounded-lg placeholder:font-medium border-greyishBrown max-md:w-full md:basis-[48%] placeholder:text-darkGrey"
        id="email"
        name="email"
        placeholder="Email"
        type="email"
      />

      <input
        className="p-4 border rounded-lg placeholder:font-medium border-greyishBrown max-md:w-full md:basis-[48%]"
        id="phone_number"
        name="phone_number"
        placeholder="Phone"
        type="text"
      />
      <textarea
        className="w-full p-4 border rounded-lg placeholder:font-medium border-greyishBrown col-span-2"
        name="body"
        rows={2}
        placeholder="Message"
      />
    </div>
  );
};

export default ContactForm;

"use client";
import { Formik, Field, Form } from "formik";
import Image from "next/image";
import React from "react";
import arrowDropdown from "../../images/arrow-down-solid.png";

const ContactForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          phoneNumber: "",
          email: "",
          subject: "",
          messageText: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="flex flex-wrap justify-between gap-6 mb-[100px]">
          <Field
            className="p-4 border rounded-lg placeholder:font-medium border-greyishBrown max-md:w-full md:basis-[48%]"
            id="firstName"
            name="firstName"
            placeholder="Name"
          />

          <div className="relative max-md:w-full md:basis-[48%] ">
            <Field
              className="w-full p-4 bg-transparent border rounded-lg appearance-none placeholder:font-medium border-greyishBrown "
              as="select"
              name="subject"
            >
              <option value="ChooseSubject" className="text-darkGrey">
                Choose Subject
              </option>
              <option value="sub1">Subject</option>
              <option value="sub2">Subject</option>
              <option value="sub3">Subject</option>
            </Field>
            <Image
              src={arrowDropdown}
              alt=""
              className="absolute object-contain top-[50%] -translate-y-[50%] right-5"
            />
          </div>

          <Field
            className="p-4 border rounded-lg placeholder:font-medium border-greyishBrown max-md:w-full md:basis-[48%] placeholder:text-darkGrey"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
          />

          <Field
            className="p-4 border rounded-lg placeholder:font-medium border-greyishBrown max-md:w-full md:basis-[48%]"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone"
          />
          <Field
            className="w-full p-4 border rounded-lg placeholder:font-medium border-greyishBrown"
            name="messageText"
            component="textarea"
            rows="2"
            placeholder="Message"
          />

          <button
            className="ml-[auto] py-3 text-white rounded-lg px-9 bg-primary"
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;

"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import visaIcon from "../../images/visa.png";
import mastercardIcon from "../../images/mastercard.png";
import americanExpressIcon from "../../images/americanExpress.png";
import lineIcon from "../../images/line_icon.png";
import checkboxIcon from "../../images/checkbox.png";
import cardIcon from "../../images/card-icon.png";
import arrowDown from "../../images/arrow-down.png";

const initialValues = {
  card: "",
  cardnumber: "",
  expiration: "",
  cvv: "",
  address: "",
  aptnumber: "",
  city: "",
  state: "",
  zipcode: "",
  country: "",
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  cardnumber: Yup.string().required("Required"),
  expiration: Yup.string().required("Required"),
  cvv: Yup.string().required("Please Enter your Email"),
  address: Yup.string().required("Required"),
  aptnumber: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  state: Yup.string().required("Required"),
  zipcode: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

const FormikFormPayment = ({ isSubmitting }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex gap-[25.7rem]">
          <div className="text-[20px] text-black font-medium">
            Payment Method
          </div>
          <div className="flex">
            <div>
              <Image src={visaIcon} alt={""} />
            </div>
            <div>
              <Image src={mastercardIcon} alt={""} />
            </div>
            <div>
              <Image src={americanExpressIcon} alt={""} />
            </div>
          </div>
        </div>
        <div className="relative form-control">
          <Image
            className="absolute -translate-y-2/4 left-4 top-10"
            src={cardIcon}
            alt={""}
          />
          <Field
            className="w-full p-4 pl-16 mt-3 text-base font-normal text-black bg-white border border-solid rounded-lg appearance-none border-greyishBrown"
            value="Credit or Debit Card"
            as="select"
            name="card"
          >
            <option value="card">Credit or Debit Card</option>
          </Field>
          <ErrorMessage className="error" name="card" component="div" />
          <Image
            className="absolute -translate-y-2/4 top-10 left-[95%]"
            src={arrowDown}
            alt={""}
          />
        </div>

        <div>
          <Image className="w-full my-6" src={lineIcon} alt={""} />
        </div>

        <div className="form-control">
          <Field
            className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
            type="text"
            id="cardnumber"
            name="cardnumber"
            placeholder="Card number"
          />
          <ErrorMessage className="error" name="cardnumber" component="div" />
        </div>

        <div className="flex gap-8 mt-4">
          <div className="w-1/2 form-control">
            <Field
              className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
              type="text"
              id="expiration"
              name="expiration"
              placeholder="Expiration"
            />
            <ErrorMessage className="error" name="expiration" component="div" />
          </div>

          <div className="w-1/2 form-control">
            <Field
              className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
              type="text"
              id="cvv"
              name="cvv"
              placeholder="CVV"
            />
            <ErrorMessage className="error" name="cvv" component="div" />
          </div>
        </div>

        <div className="my-4 text-base font-medium text-black">
          Billing Address
        </div>

        <div className="form-control">
          <Field
            className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
            type="text"
            id="address"
            name="address"
            placeholder="Street address"
          />
          <ErrorMessage className="error" name="address" component="div" />
        </div>

        <div className="flex gap-8 mt-4">
          <div className="w-1/2 form-control">
            <Field
              className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
              type="text"
              id="aptnumber"
              name="aptnumber"
              placeholder="Apt or suite number"
            />
            <ErrorMessage className="error" name="aptnumber" component="div" />
          </div>

          <div className="relative w-1/2 form-control">
            <Field
              className="flex w-full p-4 pr-2 text-base font-normal bg-white border border-solid rounded-lg appearance-none border-greyishBrown text-darkGrey"
              value="city"
              as="select"
              name="city"
            >
              <option value="city">City</option>
            </Field>
            <ErrorMessage className="error" name="city" component="div" />
            <Image
              className="absolute -translate-y-2/4 left-80 top-7"
              src={arrowDown}
              alt={""}
            />
          </div>
        </div>

        <div className="flex gap-8 mt-4">
          <div className="w-1/2 form-control">
            <Field
              className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
              type="text"
              id="state"
              name="state"
              placeholder="State"
            />
            <ErrorMessage className="error" name="state" component="div" />
          </div>

          <div className="w-1/2 form-control">
            <Field
              className="w-full p-4 border border-solid rounded-lg border-greyishBrown"
              type="text"
              id="zipcode"
              name="zipcode"
              placeholder="zipcode"
            />
            <ErrorMessage className="error" name="zipcode" component="div" />
          </div>
        </div>

        <div className="relative form-control">
          <Field
            className="flex w-full p-4 pr-2 mt-3 text-base font-normal text-black bg-white border border-solid rounded-lg appearance-none border-greyishBrown text-darkGrey"
            value="country"
            as="select"
            name="country"
          >
            <option value="country">Country</option>
          </Field>
          <ErrorMessage className="error" name="country" component="div" />
          <Image
            className="absolute -translate-y-2/4 left-[95%] top-7"
            src={arrowDown}
            alt={""}
          />
        </div>

        <div className="flex mt-4">
          <Image src={checkboxIcon} alt={""} />
          <div className="ml-2 text-base font-normal text-black">
            Save Card for future payments
          </div>
        </div>

        {/* <button type="reset">Reset data</button>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button> */}
      </Form>
    </Formik>
  );
};

export default FormikFormPayment;

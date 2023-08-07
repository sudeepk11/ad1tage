"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  companyname: "",
  address: "",
  country: "",
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Form data", values);
  onSubmitProps.setSubmitting(false);
  onSubmitProps.resetForm();
};

const validationSchema = Yup.object({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Please Enter your Email"),
  phone: Yup.string().required("Required"),
  companyname: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
});

const FormikForm = ({ isSubmitting }: any) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div className="flex gap-8">
          <div className="w-1/2">
            <div className="mb-5 text-xl font-medium text-black">
              Guest Details
            </div>
            <div className="flex flex-col gap-4">
              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First name"
                />
                <ErrorMessage
                  className="error"
                  name="firstname"
                  component="div"
                />
              </div>

              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Lastname"
                />
                <ErrorMessage
                  className="error"
                  name="lastname"
                  component="div"
                />
              </div>
              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage className="error" name="email" component="div" />
              </div>
              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone no."
                />
                <ErrorMessage className="error" name="phone" component="div" />
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="mb-5 text-xl font-medium text-black">
              Guest Details
            </div>
            <div className="flex flex-col gap-4">
              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="text"
                  id="companyname"
                  name="companyname"
                  placeholder="Company name"
                />
                <ErrorMessage
                  className="error"
                  name="companyname"
                  component="div"
                />
              </div>
              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                />
                <ErrorMessage
                  className="error"
                  name="address"
                  component="div"
                />
              </div>
              <div className="form-control">
                <Field
                  className="p-4 border border-solid rounded-lg border-greyishBrown"
                  type="text"
                  id="country"
                  name="country"
                  placeholder="country"
                />
                <ErrorMessage
                  className="error"
                  name="country"
                  component="div"
                />
              </div>
            </div>
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

export default FormikForm;

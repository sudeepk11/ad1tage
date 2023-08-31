"use client";
import Image from "next/image";
import React, { useState, useMemo, useTransition } from "react";
import login_signup from "../../Assets/Images/login_signup.png";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import signUp from "../../service/auth/signUp";
import { useRouter } from "next/navigation";
import { josefin } from "../../utils/utilsFonts";

const BusinessOwnerSignUp = () => {
  const [isPending, startTransition] = useTransition();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    return /^[6-9]\d{9}$/.test(phoneNumber);
  };

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const validateConfirmPassword = (confirmPassword: string) => {
    return confirmPassword === password;
  };

  const isValid = useMemo<boolean>(
    () =>
      validateEmail(email) &&
      validatePhoneNumber(phoneNumber) &&
      validatePassword(password) &&
      validateConfirmPassword(confirmPassword),
    [email, phoneNumber, password, confirmPassword]
  );

  const onSubmit = (props: FormData) =>
    startTransition(async () => {
      const resp = await signUp(props);
      resp.status === "success" ? push("/login") : setError(resp.message);
    });

  return (
    <div className="lg:flex lg:items-center lg:justify-center md:m-[50px] m-[20px] bg-white rounded-2xl overflow-hidden">
      {/* <Image
        src={login_signup}
        alt="loginImage"
        className="basis-3/6 md:w-1/2 sm:w-1/2 mx-auto hidden sm:block lg:w-1/2 xl:w-1/2"
      /> */}
      <div className="flex flex-col items-center justify-center pb-10 max-md:pb-5">
        <h1 className="text-[42px] max-md:text-3xl max-md:text-center font-bold">
          Are you a business owner ?
        </h1>
        <p
          className={`flex items-center justify-center pt-2 text-xl max-md:text-lg ${josefin.className}`}
        >
          Register your business with us
        </p>
      </div>
      <RightFormSection
        titleText="Create a business owner account"
        googleText={"Continue with Google"}
        authText={"Already have an account?"}
        isAuthText={false}
        authLinkText={"Login"}
        authLink={"/login"}
      >
        <form
          action={onSubmit}
          className="flex flex-col justify-center items-center pt-6 max-w-[384px] mx-auto w-full"
        >
          <div className="w-full">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter your Email"
              className="py-[18px] mb-[15px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
            {email && !validateEmail(email) && (
              <p className="text-red-600 text-sm mb-2 flex justify-end">
                Invalid email format.
              </p>
            )}
            <input type="hidden" name="role" value="owner" />
            <input
              type="text"
              value={name}
              name="username"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter your full name"
              className="py-[18px] mb-[15px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />

            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              placeholder="Enter your phone number"
              className="py-[18px] mb-[15px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
            {phoneNumber && !validatePhoneNumber(phoneNumber) && (
              <p className="text-red-600 text-sm mb-2 flex justify-end">
                Invalid Indian phone number format.
              </p>
            )}

            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              className="py-[18px] mb-[15px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
            {password && !validatePassword(password) && (
              <p className="text-red-600 text-sm mb-2 flex justify-end">
                Password must be at least 6 characters long.
              </p>
            )}

            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
              placeholder="Confirm Password"
              className="py-[18px] mb-[15px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
            {confirmPassword && !validateConfirmPassword(confirmPassword) && (
              <p className="text-red-600 text-sm mb-1 flex justify-end">
                Passwords do not match.
              </p>
            )}
            <input type="hidden" name="role" value="user" />
          </div>

          <div>
            {error && (
              <div
                className="mt-3 bg-red-100 border border-red-400 text-red-600 px-4 py-3 mb-2 rounded relative"
                role="alert"
              >
                <strong className="font-semibold">
                  Error, Could not Login:
                </strong>{" "}
                {error}
              </div>
            )}
          </div>

          <Button
            disabled={!isValid || isPending}
            ButtonText={isPending ? "Loading..." : "Register"}
            ButtonClasses={"w-full bg-primary text-center text-white py-[15px]"}
          ></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default BusinessOwnerSignUp;

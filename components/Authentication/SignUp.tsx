import Image from "next/image";
import React from "react";
import login_signup from "../../Assets/Images/login_signup.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";

const Login = () => {
  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image
        src={login_signup}
        alt="loginImage"
        className="basis-3/6 md:w-1/2 sm:w-1/2 mx-auto"
      />
      <RightFormSection
        titleText={"Register Your Account"}
        googleText={"Continue with Google"}
        authText={" Already have an account?"}
        isAuthText={true}
        authLinkText={"Login"}
        authLink={"/login"}
      >
        <form className="flex flex-col justify-center items-center pt-6 max-w-[384px] mx-auto w-full">
          <div className="w-full">
            <input
              type="text"
              placeholder="Email"
              className="py-[18px] mb-[30px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
          </div>
          <p className="text-darkGrey text-sm mt-[18px] mb-[24px] self-end">
            We’ll send you an email to confirm your email address. Standard
            message and data rates may apply
          </p>
          <Button
            ButtonText={"Register"}
            ButtonClasses={"w-full bg-primary text-center text-white py-[15px]"}
          ></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default Login;

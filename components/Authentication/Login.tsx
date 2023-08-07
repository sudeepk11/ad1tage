import Image from "next/image";
import React from "react";
import loginImage from "../../images/login-form-img-1.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";

const Login = () => {
  return (
    <div className="lg:flex md:m-[50px] m-[20px]  bg-white rounded-2xl overflow-hidden">
      <Image src={loginImage} alt="loginImage" className="basis-3/6"/>
      <RightFormSection
        titleText={"Log In to Your Account"}
        googleText={"Login with Google"}
        linkedinText={"Login with Linkedin"}
        authText={" Don’t have an account yet?"}
        isAuthText={true}
        authLinkText={"Register"}
        authLink={'/signup'}
      >
        <form className="flex flex-col justify-center items-center pt-6 max-w-[384px] w-full mx-auto w-full">
          <div className="w-full">
            <input type="text" placeholder="Email" className="py-[18px] mb-[30px] px-6 border border-greyishBrown rounded-[8px] w-full"/>
          </div>
          <div className="w-full">
            <input type="text" placeholder="Password" className="py-[18px] px-6 border border-greyishBrown rounded-[8px] w-full"/>
          </div>
          <Link className="text-darkGrey text-sm underline mt-[18px] mb-[24px] self-end" href="/forgot-password">Forgot Password?</Link>
          <Button ButtonText={"Login"} ButtonClasses={"w-full bg-primary text-center text-white py-[15px]"}></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default Login;

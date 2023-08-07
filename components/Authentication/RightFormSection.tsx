import React from "react";
import Image from "next/image";
import Link from "next/link";
import logoLionImage from "../../images/logo.png";
import logoText from "../../images/logo-text.png";
import google from "../../images/google-logo.png";
import linkedin from "../../images/linkedinLogin.png";
import { josefin } from "../../utils/utilsFonts";

const RightFormSection = ({
  titleText,
  children,
  googleText,
  linkedinText,
  authText,
  isAuthText,
  authLinkText,
  authLink,
}: any) => {
  return (
    <div className="p-4 basis-3/6 bg-[#fafafa]">
      <Link className="flex items-center justify-center" href="/">
        <Image className="w-[45px]" src={logoLionImage} alt="" />
        <Image className="w-auto h-full pl-2 max-h-3" src={logoText} alt="" />
        {/* {logoText} */}
      </Link>
      <h3
        className={`flex items-center justify-center pt-6 text-2xl ${josefin.className}`}
      >
        {titleText}
      </h3>
      {children}
      {isAuthText ? (
        <>
          <p className="text-center text-2xl mt-4 text-darkGrey">or</p>
          <div className="m-2 max-w-[384px] w-full mx-auto">
            <div className="flex justify-center items-center mb-6 px-4 py-[11px] border border-lightBrown rounded-[8px]">
              <Image className="w-7 h-[30px]  mr-2" src={google} alt="" />
              <p className="text-base text-black font-medium">{googleText}</p>
            </div>
            <div className="flex justify-center items-center mb-6 px-4 py-[11px] border border-lightBrown rounded-[8px]">
              <Image className="w-7 h-[30px] mr-2" src={linkedin} alt="" />
              <p className="text-base text-black font-medium">{linkedinText}</p>
            </div>
          </div>
        </>
      ) : null}
      {isAuthText ? (
        <p className="text-center mt-3 text-darkGrey text-sm">
          {authText}{" "}
          <span>
            <Link
              className="text-[#886750] underline capitalize"
              href={`${authLink}`}
            >
              {authLinkText}
            </Link>
          </span>
        </p>
      ) : null}
    </div>
  );
};

export default RightFormSection;

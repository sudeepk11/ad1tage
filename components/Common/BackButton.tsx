"use client";
import Image from "next/image";
import React from "react";
import arrowLeft from "../../images/arrow-left.png";
import { useRouter } from "next/navigation";
const BackButton = (props) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className={`flex justify-start cursor-pointer lg:ml-2 ${
        props.btnProperty ? props.btnProperty : "pb-4 "
      } `}
    >
      <Image src={arrowLeft} alt="" className="object-contain" />
      <span className="pl-2 text-[#292021] text-base text-[16px]">
        {props.buttonText}
      </span>
    </div>
  );
};

export default BackButton;

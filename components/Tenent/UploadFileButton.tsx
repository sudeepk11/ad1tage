import Image from "next/image";
import React from "react";
import fileUploadIcon from "../../images/file-upload.png";

const UploadFileButton = (props) => {
  return (
    <div className="border-2 my-2 border-dotted rounded-md">
      <div className="flex flex-col py-3 px-6 ">
        <div className="relative font-medium text-base text-black">
          {props.labelText}
        </div>
        <div className="flex justify-center relative p-8">
          <input
            type="file"
            id="myFileInput"
            className="relative h-[60px] w-[60px] z-50 rounded-full bg-[#F2994A] opacity-0"
          />
          <Image className="absolute top-[40px]" src={fileUploadIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UploadFileButton;

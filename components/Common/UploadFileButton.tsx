import Image from "next/image";
import React from "react";
import fileUploadIcon from "../../images/file-upload.png";

const UploadFileButton = (props) => {
  return (
    <div className="my-2 border-2 border-dashed rounded-md">
      <div className="flex flex-col px-6 py-3 ">
        <div className="relative text-base font-medium text-black">
          {props.labelText}
        </div>
        <div className="relative flex justify-center p-8">
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

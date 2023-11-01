"use client";
import React, { useState, useRef } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import axios from "axios";
import Image from "next/image";
import close from "../../Assets/Icons/close.png";

const SingleImageUploader = ({ initImage = "" }) => {
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState(initImage);
  const fileInputRef = useRef(null);

  const uploadImages = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleInputFileChange = async (e) => {
    setUploading(true);
    const files = e.target.files;
    setUploading(true);
    const formData = new FormData();
    formData.append("images", files[0]);

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload/images`,
        formData
      );
      setImage(data.data.images[0]);
      fileInputRef.current.value = "";
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
    setUploading(false);
  };

  const handelDelete = async () => {

    const id = image.split("/").pop();

    try {
      // const { data } = await axios.delete(
      //   `${process.env.NEXT_PUBLIC_API_URL}/images/${id}`
      // );

      setImage("");

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full col-span-6 max-md:col-span-7">
      <label
        className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
      >
        Image
      </label>
      <div className=" w-full flex gap-2 ">
        <input
          className="hidden"
          id="imageInput"
          type="text"
          name="imageUrl"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        {image && (
          <div className="relative shadow-lg">
            <Image
              className="rounded-lg object-cover w-auto h-[52px]"
              src={image}
              alt="image"
              width={200}
              height={200}
            />
            <Image
              className="cursor-pointer absolute -top-1 -right-1 bg-white rounded-full p-1"
              src={close}
              alt="close"
              width={28}
              height={28}
              onClick={() => handelDelete()}
            />
          </div>
        )}
        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          accept=".png, .jpg"
          name="images"
          onChange={handleInputFileChange}
          disabled={uploading}
        />
        <Button
          ButtonClasses="text-white w-1/3 py-3 flex justify-center items-center"
          ButtonText={uploading ? "Uploading..." : "Upload"}
          disabled={uploading || image}
          ButtonClicked={uploadImages}
        ></Button>
      </div>
    </div>
  );
};

export default SingleImageUploader;

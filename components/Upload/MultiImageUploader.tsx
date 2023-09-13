"use client";
import React, { useState } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import Image from "next/image";
import close from "../../Assets/Icons/close.png";

// Multiple image uploader input form component and has a modal to preview the images and delete them
const MultiImageUploader = () => {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?q=10&h=200",
    "https://img.freepik.com/free-photo/flowing-purple-mountain-spiral-bright-imagination-generated-by-ai_188544-9853.jpg?q=10&h=200",
  ]); // array of images url
  return (
    <div className="w-full col-span-4 max-md:col-span-8">
      <label
        className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
      >
        Images
      </label>
      <Button
        ButtonClasses="text-white w-full py-3 flex justify-center items-center"
        ButtonText="Upload Images"
        ButtonClicked={(e) => {
          e.preventDefault();
          setModal(true);
        }}
      />
      {modal && (
        <ImagePreviewModal
          images={images}
          setModal={setModal}
          setImages={setImages}
        />
      )}
      {/* <input
        className="hidden w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
        type="text"
        placeholder="Enter Image URL"
        name="photos"
      /> */}
    </div>
  );
};

const ImagePreviewModal = ({ images, setModal, setImages }) => {
  const handelDelete = (index) => {
    const newImages = images.filter((image, i) => i !== index);
    setImages([...newImages]);
  };

  return (
    <div className="w-full h-full flex items-start justify-center absolute z-20 top-0 left-0 ">
      <div className="fixed flex flex-col justify-between w-5/6 h-[50vh] bg-white rounded-lg shadow-lg p-5">
        <Image
          className="cursor-pointer absolute top-5 right-5"
          onClick={() => setModal(false)}
          src={close}
          alt="close"
          width={30}
          height={30}
        />
        <div>
          <p
            className={`pt-5 px-5 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
          >
            Upload Images
          </p>
        </div>
        <div className="grid grid-cols-6 gap-3">
          {images.length === 0 && (
            <div className="col-span-6 flex justify-center items-center">
              <p className="text-center text-black">No Images Uploaded</p>
            </div>
          )}
          {images.map((image, index) => (
            <div key={index} className="col-span-1 relative shadow-lg">
              <Image
                className="rounded-lg object-cover w-full h-full"
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
                onClick={() => handelDelete(index)}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          {/* Multiple images input */}
          <input
            className="file:border-none file:text-white w-full justify-center items-center flex gap-1 file:bg-primary file:rounded-[8px] file:px-[31px] file:py-2 file:laptopScreen:text-base file:cursor-pointer file:max-lg:px-4  file:max-lg:text-sm file:transition-opacity"
            type="file"
            accept=".png, .jpg"
            name="images"
            multiple
          />
          <Button
            ButtonClasses="text-white w-fit py-3 flex justify-center items-center"
            ButtonText="Upload"
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MultiImageUploader;

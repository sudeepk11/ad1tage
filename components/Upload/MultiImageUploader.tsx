"use client";
import React, { useState, useRef } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import Image from "next/image";
import close from "../../Assets/Icons/close.png";
import axios from "axios";

// Multiple image uploader input form component and has a modal to preview the images and delete them
const MultiImageUploader = ({ initImages = [] }) => {
  const [modal, setModal] = useState(false);
  const [images, setImages] = useState([...initImages]); // array of images url

  // serialize images array to string
  const imagesString = images.join(",");
  console.log(imagesString);

  return (
    <div className="w-full col-span-4 max-md:col-span-8">
      <label
        className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
      >
        Images
      </label>
      <Button
        ButtonClasses="text-white w-full py-3 flex justify-center items-center"
        ButtonText={`${images.length} Images Uploaded`}
        ButtonClicked={(e) => {
          e.preventDefault();
          setModal(true);
        }}
      />
      <input
        type="text"
        name="photos"
        className="hidden"
        value={imagesString}
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
  // Upload Images API call:
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  const uploadImages = async (e) => {
    e.preventDefault();
    if (selectedFiles.length === 0) return;

    setUploading(true);
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/upload/images`,
        formData
      );
      console.log(data);
      setImages([...images, ...data.data.images]);
      setSelectedFiles([]);
      fileInputRef.current.value = "";
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false);
    }
  };

  const handleInputFileChange = (e) => {
    const files = e.target.files;
    setSelectedFiles([...files]);
  };

  const handelDelete = async (index) => {
    // Delete image using api call
    const id = images[index].split("/").pop();

    try {
      const { data } = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_URL}/images/${id}`
      );
      console.log(data);
      if (data.status === "success") {
        const newImages = images.filter((image, i) => i !== index);
        setImages([...newImages]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-full flex items-start justify-center absolute z-20 top-0 left-0 ">
      <div className="fixed flex flex-col justify-between w-5/6 h-[60vh] bg-white rounded-lg shadow-lg p-5">
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
        <div className="grid grid-cols-6 gap-3 overflow-scroll scrollbar-hide my-3">
          {images.length === 0 && (
            <div className="col-span-6 flex justify-center items-center">
              <p className="text-center text-black">No Images Uploaded</p>
            </div>
          )}
          {images.map((image, index) => (
            <div key={index} className="col-span-1 relative shadow-lg">
              <Image
                className="rounded-lg object-cover w-52 h-24"
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
            ref={fileInputRef}
            className="file:border-none file:text-white w-full justify-center items-center flex gap-1 file:bg-primary file:rounded-[8px] file:px-[31px] file:py-2 file:laptopScreen:text-base file:cursor-pointer file:max-lg:px-4  file:max-lg:text-sm file:transition-opacity"
            type="file"
            accept=".png, .jpg"
            name="images"
            multiple
            onChange={handleInputFileChange}
            disabled={uploading}
          />
          <Button
            ButtonClasses="text-white w-fit py-3 flex justify-center items-center"
            ButtonText={uploading ? "Uploading..." : "Upload"}
            disabled={uploading}
            ButtonClicked={uploadImages}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default MultiImageUploader;

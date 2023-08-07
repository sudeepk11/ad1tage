import Image from "next/image";
import Link from "next/link";
import React from "react";
import { josefin } from "../../utils/utilsFonts";

const BlogCardTils = ({
  blogCardImg,
  heading,
  subHeading,
  paraText,
  dateText,
  id,
}: any) => {
  return (
    <div className="bg-white w-full text-black max-lg:pb-6 mb-7 h-full">
      <div>
        <Image
          src={blogCardImg}
          alt=""
          className="object-cover w-full rounded-lg max-h-[340px] h-full"
        />
      </div>

      <div className="mt-5">
        <h6 className="text-base text-darkGrey mb-2 max-md:text-sm">
          {heading}
        </h6>
        <h4
          className={`text-[40px] max-md:text-2xl max-md:leading-6 leading-[45px] ${josefin.className}`}
        >
          {subHeading}
        </h4>
        <h6 className="text-sm text-primary my-2">{dateText}</h6>
        <p className="text-base mb-3">{paraText}</p>

        <Link
          href={`blog-details/1Aserdwaaxxde${id}`}
          className="text-base underline text-primary my-3 max-md:text-sm"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCardTils;

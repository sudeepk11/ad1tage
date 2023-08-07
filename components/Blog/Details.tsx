import Image from "next/image";
import React from "react";
import blogDtailImg from "../../images/blog-detail-img.png";
import blogDtailImgsec from "../../images/blog-detail-img-1.png";
import instaImg from "../../images/insta-primary.png";
import linkedinImg from "../../images/linkedin-primary.png";
import { josefin } from "../../utils/utilsFonts";
import BlogCardTils from "./BlogCardTils";

import WFHIcon from "../../images/work-from-home.png";
import festiveSeasonImg from "../../images/festive-season.png";
import kitchenImg from "../../images/kitchen-img-2.png";
import {
  blogDeailPara2,
  blogDeailPara3,
  blogDeailPara4,
  blogDeailPara5,
  blogDetailPara1,
} from "../../utils/utilsItems";

const BlogDetails = () => {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] max-md:mb-[50px]">
      <Image
        src={blogDtailImg}
        alt=""
        className="object-cover rounded-lg max-h-[420px] h-full w-full"
      />
      <div className="lg:px-[124px]">
        <div className="my-10">
          <h6 className="text-darkGrey my-3 max-md:text-sm">News</h6>
          <h2
            className={`font-semibold text-[56px] leading-[56px] mb-4 max-md:text-2xl ${josefin.className}`}
          >
            New Trophy spaces in the heart of Dubai
          </h2>
          <h6 className="text-primary md:text-lg max-md:text-sm">
            May 02, 2023
          </h6>
          <p className="md:text-base max-md:text-sm my-5">{blogDetailPara1}</p>
          <p className="md:text-base max-md:text-sm my-5">{blogDeailPara2}</p>
          <Image
            src={blogDtailImgsec}
            alt=""
            className="object-cover mb-10 w-full"
          />
          <p className="md:text-base max-md:text-sm my-5">{blogDeailPara3}</p>
          <p className="md:text-base max-md:text-sm mt-5">{blogDeailPara4}</p>
          <p className="md:text-base max-md:text-sm">{blogDeailPara5}</p>
          <p className="md:text-base max-md:text-sm mb-5">
            To explore Sonder real estate partnership opportunities, please
            contact: partners@trophy.com
          </p>
        </div>

        <div className="mb-[100px]">
          <h6 className="text-base font-semibold">Share it</h6>
          <div className="flex gap-4 mt-4">
            <Image src={instaImg} alt="" className="object-cover" />
            <Image src={linkedinImg} alt="" className="object-cover" />
          </div>
        </div>
      </div>

      <div>
        <h3
          className={`md:text-[40px] ${josefin.className} mb-[50px] max-md:text-[32px]`}
        >
          More Related Blogs
        </h3>
        <div className="lg:px-[124px] lg:grid lg:grid-cols-3 lg:px-[124px] gap-[30px]">
          <BlogCardTils
            blogCardImg={WFHIcon}
            paraText="Tips from our interior designers on optimizing your WFH space"
          />
          <BlogCardTils
            blogCardImg={festiveSeasonImg}
            paraText="Kick Off Festival Season with Sonder at Coachella and Stagecoach 2023"
          />
          <BlogCardTils
            blogCardImg={festiveSeasonImg}
            paraText="The rise of hybrid and remote working, as well as travellers combining business.."
          />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;

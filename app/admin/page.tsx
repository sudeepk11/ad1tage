import { josefin } from "../../utils/utilsFonts";
import primaryArrowDown from "../../images/primary-arrow-down.png";
import Image from "next/image";
import LineChartCommon from "../../components/Admin/LineChartCommon";
import Rating from "../../components/Common/Rating";
import Listing from "../../components/Admin/Listing";
import Reviews from "../../components/Admin/Reviews";
import ListingImg1 from "../../images/admin-listing1.png";
import ListingImg2 from "../../images/admin-listing2.png";
import { cookies } from "next/headers";
import axios from "axios";
import { notFound } from "next/navigation";
import { Service } from "../../types/services";

const reviewArr = [
  {
    headingName: "By Sriharan",
    headingDetails: "ABC Caterers , Udupi",
    review: "I give 4 star highly recommended",
  },
  {
    headingName: "By Sanjeev H",
    headingDetails: "KLE Hospital, Belgaum",
    review:
      "The hospital was very clean and the whole service was was very smooth and organized and it was really easy to reach out to mohan",
  },
];

export default async function Page() {
  let dashboardData;
  try {
    const authToken = cookies().get("access_token").value;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/dashboard-data`,
      {
        headers: {
          Cookie: `access_token=${authToken}`,
        },
      }
    );
    dashboardData = data.data;
  } catch (err) {
    console.log(err);
    return notFound();
  }

  const {
    servicesCount,
    categoriesCount,
    callCount,
    usersCount,
    websiteVisits,
    reviewsCount,
    averageReviews,
    topServices,
  } = dashboardData;

  console.log(topServices);

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <p
        className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
      >
        Admin Dashboard
      </p>
      <div className="justify-between grid-cols-3 lg:grid lg:gap-6">
        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {servicesCount}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Total Services
          </p>
          <LineChartCommon color="#8FA3CA" dataKey="pv" />
        </div>
        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {websiteVisits}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            30-Day Website Views
          </p>
          <LineChartCommon color="#CA8FB2" dataKey="uv" />
        </div>
        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {callCount.length}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            30-Day Calls
          </p>
          <LineChartCommon color="#8FCAB5" dataKey="amt" />
        </div>

        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {averageReviews}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Average Reviews
          </p>
          <LineChartCommon color="#F9C270" dataKey="amt" />
        </div>

        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {categoriesCount}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Total Categories
          </p>
          <LineChartCommon color="#6DB3C9" dataKey="amt" />
        </div>

        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {usersCount}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Total Users
          </p>
          <LineChartCommon color="#E99A9A" dataKey="amt" />
        </div>

        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {usersCount}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Total Business Owners
          </p>
          <LineChartCommon color="#B5D4B4" dataKey="amt" />
        </div>

        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">
            {reviewsCount}
          </p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Total Reviews
          </p>
          <LineChartCommon color="#F2A5A0" dataKey="amt" />
        </div>

        <div className="bg-offWhite w-full max-lg:mb-4 h-[185px] rounded-2xl overflow-hidden">
          <p className="text-3xl font-semibold mt-5 text-center">94</p>
          <p className="text-[14px] font-semibold mt-3 text-center">
            Total Queries
          </p>
          <LineChartCommon color="#B39DDB" dataKey="amt" />
        </div>
      </div>
      <div className="grid justify-between gap-4 mt-6 mb-2 lg:grid-cols-3 max-lg:grid-cols-1">
        <div className="col-span-2 p-5 bg-offWhite rounded-xl max-md:p-3">
          <div className="flex justify-between mb-5">
            <p className="mr-10 font-semibold leading-9 text-black md:text-2xl max-md:text-lg">
              ad1tage Reviews
            </p>
            <div className="flex flex-wrap content-center max-md:justify-end">
              <Rating rating={3.2} hideRating />
              <p className="text-2xl font-medium leading-9 text-black">
                {averageReviews}
              </p>
              <p className="ml-1 text-base font-normal leading-9 text-darkGrey">
                ({reviewsCount} Reviews)
              </p>
            </div>
          </div>
          {reviewArr &&
            reviewArr.length &&
            reviewArr.map((data, idx) => {
              return (
                <div key={idx} className="my-4">
                  <Rating rating={2.7} />
                  <Reviews data={data} />
                </div>
              );
            })}
          <button className="flex px-3 py-2 text-xs font-medium border rounded md:hidden text-primary border-primary">
            See More
            <Image
              className="object-contain ml-2"
              src={primaryArrowDown}
              alt=""
            />
          </button>
        </div>

        <div className="p-5 bg-offWhite rounded-xl max-md:p-3">
          <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
            Top Services
          </p>
          {(topServices as Service[]).map((item, idx) => (
            <div key={idx} className="mb-5">
              <Listing {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

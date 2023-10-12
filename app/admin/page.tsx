import { josefin } from "../../utils/utilsFonts";
import primaryArrowDown from "../../images/primary-arrow-down.png";
import Image from "next/image";
import LineChartCommon from "../../components/Admin/LineChartCommon";
import DashBoardStats from "../../components/Admin/dashBoardStats";
import Rating from "../../components/Common/Rating";
import Listing from "../../components/Admin/Listing";
import Reviews from "../../components/Admin/Reviews";
import { cookies } from "next/headers";
import axios from "axios";
import { notFound } from "next/navigation";
import { Review, Service } from "../../types/services";

export default async function Page() {
  let dashboardData;
  const role = cookies().get("role")?.value;
  try {
    const authToken = cookies().get("access_token")?.value;
    const userId = cookies().get("_id")?.value;
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/dashboard-data${
        role === "owner" ? `/business-dashboard/${userId}` : ""
      }`,
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

  let services: Service[] = [];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services`
    );
    // console.log(data.data);
    services = data.data.slice(0, 4);
  } catch (err) {
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
    totalQueries,
    totalBuisnessOwner,
    reviews,
  } = dashboardData;

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <p
        className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
      >
        Admin Dashboard
      </p>
      <div className="justify-between grid-cols-3 lg:grid lg:gap-6">
        <DashBoardStats title="Total Services" value={servicesCount} />
        {/* {role === "admin" && (
          <DashBoardStats title="30-Day Website Views" value={websiteVisits} />
        )} */}
        <DashBoardStats
          title="30-Day Calls"
          value={typeof callCount === "number" ? callCount : callCount.length}
        />

        {role === "admin" && (
          <>
            <DashBoardStats
              title="Average Reviews"
              value={averageReviews.toPrecision(2)}
            />
            <DashBoardStats title="Total Categories" value={categoriesCount} />
            <DashBoardStats title="Total Users" value={usersCount} />
            <DashBoardStats
              title="Total Business Owners"
              value={totalBuisnessOwner}
            />
          </>
        )}

        <DashBoardStats title="Total Reviews" value={reviewsCount} />

        {role === "admin" && (
          <DashBoardStats title="Total Queries" value={totalQueries} />
        )}
      </div>
      <div className="grid justify-between gap-4 mt-6 mb-2 lg:grid-cols-3 max-lg:grid-cols-1">
        <div className="col-span-2 p-5 bg-offWhite rounded-xl max-md:p-3 max-md:order-2">
          <div className="flex justify-between mb-5">
            <p className="mr-10 font-semibold leading-9 text-black md:text-2xl max-md:text-lg">
              {role === "owner" ? "" : "ad1tage "}Reviews
            </p>
          </div>
          {reviews.length > 0 ? (
            (reviews as (Omit<Review, "place"> & { place: Service })[]).map(
              (data, idx) => {
                return (
                  <div key={idx} className="my-4">
                    <Rating rating={data.rating} />
                    <Reviews {...data} />
                  </div>
                );
              }
            )
          ) : (
            <span>No reviews</span>
          )}
          <button className="flex px-3 py-2 text-xs font-medium border rounded md:hidden text-primary border-primary">
            See More
            <Image
              className="object-contain ml-2"
              src={primaryArrowDown}
              alt=""
            />
          </button>
        </div>

        <div className="p-5 bg-offWhite rounded-xl max-md:p-3 h-fit">
          <p className="mb-5 font-semibold leading-9 text-black max-md:text-lg md:text-2xl lg:flex-wrap">
            Top Services
          </p>
          {services.map((item, idx) => (
            <div key={idx} className="mb-5">
              <Listing {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

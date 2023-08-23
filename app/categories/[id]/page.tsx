import { Service } from "../../../types/services";
import axios from "axios";
import { notFound } from "next/navigation";
import CardWithSlider from "../../../components/Common/CardWithSlider";

import { josefin } from "../../../utils/utilsFonts";
import Button from "../../../components/Common/Button";
import GridProvider from "../../../components/Layout/GridProvider";

export default async function CategoryId({
  params,
}: {
  params: { id: number };
}) {
  let services: Service[];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services/services-by-category/${params.id}`
    );
    services = data.data;
  } catch (err) {
    return notFound();
  }
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      <div className="hotel-suggestion py-16">
        <div className="flex justify-between">
          <h2
            className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-lg:leading-[35px] max-md:text-[22px] mb-[30px] font-semibold`}
          >
            Category: HealthCare
          </h2>
          <Button
            ButtonText={"Showing Near Bangalore"}
            ButtonClasses={
              "!bg-white text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
            }
          ></Button>
        </div>
        <GridProvider>
          {services.map((item, i) => (
            <CardWithSlider
              paraText={item.name}
              rating={item.rating}
              id={item._id}
              perRoomUserCount={"2 sleeps"}
              bedCount={"1 Bedroom"}
              bathCount={"1 Bath"}
              likeButton={"unfilled"}
              key={`slider-${i}`}
              photos={item.photos}
            />
          ))}
        </GridProvider>
      </div>
    </div>
  );
}
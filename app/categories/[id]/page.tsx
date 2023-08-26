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
  params: { id: string };
}) {
  let services: Service[];
  let name: String;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/services/services-by-category/${params.id}`
    );
    services = data.data;
    name = data.message;
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
            Category: {name}
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
              location={item.city}
              subParaText={item.category.category}
              rating={item.rating.toPrecision(2)}
              perRoomUserCount={"2 sleeps"}
              bedCount={"1 Bedroom"}
              photos={item.photos}
              bathCount={"1 Bath"}
              likeButton={"unfilled"}
              id={item._id}
              key={i}
            />
          ))}
        </GridProvider>
      </div>
    </div>
  );
}

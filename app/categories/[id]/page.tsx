import { Service } from "../../../types/services";
import axios from "axios";
import { notFound } from "next/navigation";
import CardWithSlider from "../../../components/Common/CardWithSlider";

import { josefin } from "../../../utils/utilsFonts";
import Button from "../../../components/Common/Button";
import GridProvider from "../../../components/Layout/GridProvider";
import SearchServicesBox from "../../../components/Services/searchServicesBox";

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
        <div className="flex justify-between max-sm:flex-col max-sm:justify-center">
          <h2
            className={` ${josefin.className} text-[32px] text-black max-lg:text-[32px] max-lg:leading-[35px] max-md:text-[22px] mb-[30px] font-semibold`}
          >
            Category: {name}
          </h2>
          {/* <Button
            ButtonText={"Showing Near Bangalore"}
            ButtonClasses={
              "!bg-white text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full self-center"
            }
          ></Button> */}
        </div>
        <SearchServicesBox services={services} />
      </div>
    </div>
  );
}

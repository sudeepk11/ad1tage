import { josefin } from "../../utils/utilsFonts";

export default function Loading() {
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px]">
      <div className="hotel-suggestion py-16">
        <div className="flex justify-between">
          <h2
            className={` {josefin.className} text-[32px] text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px] font-semibold`}
          >
            Categories
          </h2>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 gap-6 hotel-card-design max-lg:grid-cols-1">
          {Array.from(Array(4)).map((_, index) => (
            <CategorySkeleton key={index} />
          ))}
        </div>

        {/* Top Categories */}
        <h2
          className={`mb-4 ${josefin.className} text-[32px] text-primary  max-lg:text-[32px] max-lg:leading-[35px] mt-[50px] font-semibold`}
        >
          Top Services Across Categories
        </h2>
        <div className="hotel-suggestion py-5">
          <div className="flex justify-between my-3">
            <div className="bg-gray-100 w-[3in] h-12 rounded-full"></div>
          </div>
          <div className="grid grid-cols-4 gap-6 hotel-suggestion max-md:grid-cols-1 max-lg:grid-cols-2">
            {Array.from(Array(2), (_, i) => (
              <CategorySkeleton key={i + "top"} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CategorySkeleton() {
  return (
    <div className="bg-gray-100 rounded-[16px] w-full h-[1.5in] shadow-lg"></div>
  );
}

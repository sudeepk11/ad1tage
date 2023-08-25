import React, { useEffect, useState } from "react";
import Button from "../Common/Button";
import { josefin } from "../../utils/utilsFonts";
import CategoryCard from "../Common/CategoryCard";
import Link from "next/link";
import { Category } from "../../types/categories";
import axios from "axios";
import { CategorySkeleton } from "../../app/categories/loading";

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchCategories() {
      const { data } = await axios
        .get(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
        .finally(() => setIsLoading(false));
      setCategories(data.data);
    }
    fetchCategories();
  }, []);

  return (
    <div className=" py-[60px] px-[50px] max-lg:px-4 max-lg:py-10 hotel-suggestion">
      <div className="flex justify-between">
        <h2
          className={` ${josefin.className} text-[32px] font-semibold text-black max-lg:text-[32px] max-md:text-[22px] max-lg:leading-[35px] mb-[30px]`}
        >
          Top categories
        </h2>
        <Link href="/categories">
          <Button
            ButtonText={"Show All"}
            ButtonClasses={
              "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
            }
          ></Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6 hotel-card-design max-lg:grid-cols-1">
        {isLoading
          ? Array.from(Array(4)).map((_, idx) => (
              <CategorySkeleton key={idx + "category"} />
            ))
          : categories.map((category) => (
              <CategoryCard
                key={category._id}
                id={category._id}
                paraText={category.category}
              />
            ))}
      </div>
    </div>
  );
};

export default Categories;

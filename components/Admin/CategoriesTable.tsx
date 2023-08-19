import Image from "next/image";
import React from "react";
import { josefin } from "../../utils/utilsFonts";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import deleteIcon from "../../Assets/Icons/delete.png";

const CategoryData = [
  {
    id: 1,
    image: BookingHistoryImage1,
    categoryName: "Category 1",
    description: "Description 1",
    totalServices: "48",
  },
  {
    id: 2,
    image: BookingHistoryImage1,
    categoryName: "Category 2",
    description: "Description 2",
    totalServices: "24",
  },
  {
    id: 3,
    image: BookingHistoryImage1,
    categoryName: "Category 3",
    description: "Description 3",
    totalServices: "45",
  },
];

const CategoriesTable = (props: any) => {
  return (
    <table className="text-sm w-full">
      <thead>
        <tr className="my-5 border border-solid rounded-lg text-center">
          <th className="flex py-5 px-3 w-60">
            <input type="checkbox" name="" id="" />
            <p className="mx-3">Category Name</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Description</p>
          </th>
          <th className="px-3">
            <p className="mx-3">Total Services</p>
          </th>
          <th className="px-3">
            <p className="mx-3"></p>
          </th>
        </tr>
      </thead>
      <tbody>
        {CategoryData.map((data) => (
          <tr className="my-3 border-b border-solid text-center" key={data.id}>
            <td className="flex py-5 px-3">
              <input type="checkbox" name="" id="" />
              <Image
                src={data.image}
                alt=""
                className="w-14 h-auto rounded-lg m-3"
              />
              <p className="mx-3">{data.categoryName}</p>
            </td>

            <td className="py-5 px-3">
              <p className="mx-3">{data.description}</p>
            </td>
            <td className="py-5 px-3">
              <p className="mx-3">{data.totalServices}</p>
            </td>
            <td className="py-5 px-3">
              <Image src={deleteIcon} alt="" className="w-5 h-auto" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CategoriesTable;

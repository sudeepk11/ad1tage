import Image from "next/image";
import React, { useEffect, useState } from "react";
import BookingHistoryImage1 from "../../images/bookinghistory1.png";
import deleteIcon from "../../Assets/Icons/delete.png";
import axios from "axios";
import { Category } from "../../types/categories";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CategoriesTable = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data } = await axios.get(`${apiUrl}/categories/count`);
      setCategories(data);
    }
    fetchCategories();
  }, []);

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
        {categories.length === 0 ? (
          <span>Loading...</span>
        ) : (
          categories.map(({ category, count, desc, _id }) => (
            <tr className="my-3 border-b border-solid text-center" key={_id}>
              <td className="flex py-5 px-3">
                <input type="checkbox" name="" id="" />
                <Image
                  src={BookingHistoryImage1}
                  alt=""
                  className="w-14 h-auto rounded-lg m-3"
                />
                <p className="mx-3">{category}</p>
              </td>

              <td className="py-5 px-3">
                <p className="mx-3">{desc}</p>
              </td>
              <td className="py-5 px-3">
                <p className="mx-3">{count}</p>
              </td>
              <td className="py-5 px-3">
                <Image src={deleteIcon} alt="" className="w-5 h-auto" />
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default CategoriesTable;

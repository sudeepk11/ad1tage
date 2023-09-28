import React from "react";
import { josefin } from "../../../utils/utilsFonts";
import axios from "axios";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import { Query } from "../../../types/auth";
import QueryRef from "../../../components/Admin/QueryRef";

export default async function Page() {
  let queries: Query[] = [];
  const authToken = cookies().get("access_token")?.value;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/query`,
      {
        headers: {
          Cookie: `access_token=${authToken}`,
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    queries = data.data;
  } catch (err) {
    return notFound();
  }
  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5 min-h-screen">
      <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start w-full mb-8">
        <div className="flex justify-between w-full">
          <p
            className={`mt-4 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
          >
            Queries
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-scroll my-5">
        <p
          className={`mb-5 text-xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Unresolved Queries:
        </p>
        <table className="text-sm min-w-full max-w-fit">
          <thead>
            <tr className="my-5 border border-solid rounded-lg text-center">
              <th className="flex py-5 px-3">
                <input type="checkbox" name="" id="" />
                <p className="mx-3">Name</p>
              </th>
              <th className="px-3">
                <p className="mx-3">Email</p>
              </th>
              <th className="px-3">
                <p className="mx-3">Phone number</p>
              </th>
              <th className="px-3">
                <p className="mx-3">Subject</p>
              </th>
              <th className="px-3">
                <p className="mx-3">Body</p>
              </th>
              <th className="px-3">
                <p className="mx-3"></p>
              </th>
            </tr>
          </thead>
          <tbody>
            {queries.map((item: any) => {
              return item.resolved === false ? (
                <QueryRef {...item} key={item._id} />
              ) : null;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

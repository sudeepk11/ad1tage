import { josefin } from "../../../utils/utilsFonts";
import searchIcon from "../../../images/search-icon.png";
import Image from "next/image";
import { Category } from "../../../types/categories";
import axios from "axios";
import { notFound } from "next/navigation";
import CategoryRow from "../../../components/Admin/CategoryRow";
import FormWrapper from "../../../components/Admin/add-services/FormWrapper";
import addCategory from "../../../service/categories/addCategory";

export default async function Page() {
  let categories: Category[] = [];
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/count`
    );
    categories = data.data;
  } catch (err) {
    console.log(err.response.data);
    return notFound();
  }

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Manage Categories
        </p>
      </div>
      <div className="flex content-center justify-between gap-4 mt-4 mb-6 max-md:flex-col md:flex-wrap">
        <form className="flex max-md:flex-col justify-center items-start w-full">
          <div className="relative top-0 left-0 search-bar max-md:w-[100%] w-full ">
            <input
              className="pl-12 w-full h-[52px] border border-solid border-greyishBrown rounded-lg"
              type="text"
              placeholder="Search"
            />
            <Image
              className="absolute top-[50%] -translate-y-[50%] left-4"
              src={searchIcon}
              alt={""}
            />
          </div>
          <div className="search-button md:mx-2 max-md:mt-3 w-max">
            <button className="px-6 h-[52px] bg-primary rounded-lg text-white text-base">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="w-full overflow-x-scroll">
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
            {categories.map((item, i) => (
              <CategoryRow {...item} key={i} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-10">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Add Category
        </p>
        <div className="flex justify-between gap-4 max-md:flex-col md:flex-wrap">
          <FormWrapper
            formClassName="grid grid-cols-7 w-full place-items-end gap-3"
            buttonClassName="w-full h-[52px] bg-primary rounded-lg text-white text-base flex items-center justify-center"
            buttonWrapperClassName="w-full col-span-1 max-md:col-span-3 max-md:col-start-5"
            callback={addCategory}
          >
            <div className="w-full col-span-2">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Name
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                name="name"
                placeholder="Enter Category Name"
              />
            </div>
            <div className="w-full col-span-5">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Description
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                name="desc"
                placeholder="Enter Category Description"
              />
            </div>
            <div className="w-full col-span-6 max-md:col-span-7">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Image URL
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                name="imageUrl"
                placeholder="Enter Category Image URL"
              />
            </div>
          </FormWrapper>
        </div>
      </div>
    </div>
  );
}

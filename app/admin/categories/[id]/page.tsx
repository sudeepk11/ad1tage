import { josefin } from "../../../../utils/utilsFonts";
import Image from "next/image";
import { Category } from "../../../../types/categories";
import axios from "axios";
import { notFound } from "next/navigation";
import FormWrapper from "../../../../components/Admin/add-services/FormWrapper";
import editCategory from "../../../../service/categories/editCategory";

export default async function Page({ params }: { params: { id: string } }) {
  let category: Category;
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${params.id}`
    );
    category = data.data;
  } catch (err) {
    console.log(err.response.data);
    return notFound();
  }

  return (
    <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
      <div className="mt-10" id="editCategory">
        <p
          className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
        >
          Edit Category
        </p>
        <div className="flex justify-between gap-4 max-md:flex-col md:flex-wrap">
          <FormWrapper
            formClassName="grid grid-cols-7 w-full place-items-end gap-3"
            buttonClassName="w-full h-[52px] bg-primary rounded-lg text-white text-base flex items-center justify-center"
            buttonWrapperClassName="w-full col-span-1 max-md:col-span-3 max-md:col-start-5"
            callback={editCategory}
            buttonText="Update Category"
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
                defaultValue={category.category}
                required
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
                defaultValue={category.desc}
                required
              />
            </div>

            <div className="w-full col-span-6 max-md:col-span-7">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Image URL
              </label>
              <div className="w-full flex gap-x-2 items-center">
                <Image
                  src={category.imageUrl}
                  alt=""
                  width={52}
                  height={52}
                  className="h-full w-auto rounded-lg"
                />
                <input
                  className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                  type="text"
                  name="imageUrl"
                  placeholder="Enter Category Image URL"
                  defaultValue={category.imageUrl}
                  required
                />
              </div>
            </div>
            <input type="hidden" name="category_id" value={params.id} />
          </FormWrapper>
        </div>
      </div>
    </div>
  );
}

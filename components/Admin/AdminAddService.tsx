import React, { useRef, useTransition } from "react";
import { josefin } from "../../utils/utilsFonts";
import Button from "../Common/Button";
import addService from "../../service/services/addService";

const AdminAddService = () => {
  const formRef = useRef<HTMLFormElement>();
  const [isPending, startTransition] = useTransition();
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-5">
        <div className="flex items-center justify-between gap-4 max-xl:flex-col max-xl:justify-start max-xl:items-start">
          <p
            className={`mt-4 mb-3 text-2xl font-semibold leading-6 text-black ${josefin.className}`}
          >
            Add Service
          </p>
        </div>
        <div className="flex justify-between gap-4 max-md:flex-col md:flex-wrap">
          <form
            ref={(ref) => ref && (formRef.current = ref)}
            action={(props) =>
              startTransition(async () => {
                const resp = await addService(props);
                if (resp.status === "success") {
                  formRef.current.reset();
                }
              })
            }
            className="grid grid-cols-8 w-full place-items-end gap-3"
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
                placeholder="Enter Name"
                name="name"
              />
            </div>
            <div className="w-full col-span-6">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Description
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Category Description"
                name="desc"
              />
            </div>

            <div className="w-full col-span-2">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Label 1
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Label 1"
                name="label-1"
              />
            </div>
            <div className="w-full col-span-2">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Category
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Category"
                name="category"
              />
            </div>
            <div className="w-full col-span-2">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Label 2
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Label 2"
                name="label-2"
              />
            </div>
            <div className="w-full col-span-2">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Label 3
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Label 3"
                name="label-3"
              />
            </div>
            <div className="w-full col-span-2">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Label 4
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Label 4"
                name="label-4"
              />
            </div>
            <div className="w-full col-span-6">
              <label
                className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
              >
                Label 5
              </label>
              <input
                className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
                type="text"
                placeholder="Enter Label 5"
                name="label-5"
              />
            </div>

            <div className="w-full col-start-8 col-span-1 max-md:col-span-4 max-md:col-start-5">
              <Button
                ButtonClasses="text-white w-full py-3 flex justify-center items-center"
                ButtonText={isPending ? "Loading..." : "Add Service"}
                disabled={isPending}
              />
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminAddService;

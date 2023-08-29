"use client";
import { Query } from "../../types/auth";
import Button from "../Common/Button";
import { useContext, useRef, useState, useTransition } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function QueryRef({
  _id,
  name,
  email,
  phone_number,
  body,
  subject,
}: Query) {
  const [isLoading, setIsLoading] = useState({
    resolved: false,
  });
  const { refresh } = useRouter();
  const { token } = useContext(AuthContext);

  const submit = async (key: keyof Query) => {
    setIsLoading((prev) => ({ ...prev, [key]: true }));
    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/query/${_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      });
      refresh();
    } catch (err) {
      toast.error(err.response.data.message || "");
    } finally {
      setIsLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  return (
    // <tr className="my-3 border-b border-solid text-center">
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {name}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {email}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {phone_number}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {body}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {subject}
    //     </p>
    //   </td>
    // </tr>
    <tr className="table-row my-3 border-b border-solid text-center">
      <td className="flex py-5 px-3 w-60">
        <input type="checkbox" name="" id="" />
        <p className="flex items-center justify-center ml-3 font-semibold">
          {name}
        </p>
      </td>
      <td className="py-5 px-3">
        <p className={`mx-3`}>{email}</p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{phone_number}</p>
      </td>
      <td className={`py-5 px-3 relative`}>
        <p className="mx-3">{subject}</p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{body}</p>
      </td>
      <td
        className={`py-5 px-3   ${
          isLoading.resolved ? "opacity-60" : "opacity-100"
        }`}
      >
        <Button
          ButtonClicked={() => submit("resolved")}
          disabled={isLoading.resolved}
          ButtonText={"Resolve"}
          ButtonClasses={
            "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
          }
        ></Button>
      </td>
    </tr>
  );
}
function setIsLoading(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.");
}

function refresh() {
  throw new Error("Function not implemented.");
}

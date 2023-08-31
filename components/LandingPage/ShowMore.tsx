"use client";

import { useRouter } from "next/navigation";
import Button from "../Common/Button";

export default function ShowMore({ url, ButtonText }) {
  const { push } = useRouter();
  return (
    <Button
      ButtonText={ButtonText}
      ButtonClicked={() => push(url)}
      ButtonClasses={
        "!bg-blue-100 text-[#2A86DB] font-semibold w-fit flex items-center justify-center max-w-fit max-h-[38px] max-xl:w-full"
      }
    ></Button>
  );
}

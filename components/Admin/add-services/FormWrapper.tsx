"use client";

import { useRef, useTransition } from "react";
import Button from "../../Common/Button";
import { toast } from "react-hot-toast";
import { APIResponse } from "../../../types/general";
import { useRouter } from "next/navigation";

type Props = {
  children: JSX.Element[] | JSX.Element;
  buttonClassName?: string;
  buttonWrapperClassName?: string;
  formClassName?: string;
  buttonText?: string;
  callback: (props: FormData) => Promise<APIResponse<any>>;
  resetForm?: () => void;
};

export default function FormWrapper({
  children,
  formClassName,
  buttonClassName,
  buttonWrapperClassName,
  buttonText = "Submit",
  callback,
  resetForm,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>();
  const router = useRouter();
  return (
    <form
      ref={(ref) => ref && (formRef.current = ref)}
      action={(props) =>
        startTransition(async () => {
          const resp = await callback(props);

          if (resp.status === "success") {
            toast.success("Success!");
            formRef.current.reset();
            resetForm && resetForm();
          } else {
            toast.error(resp.message || "An error occured");
          }
        })
      }
      className={formClassName}
    >
      {children}
      <div className={buttonWrapperClassName}>
        <Button
          ButtonClasses={buttonClassName}
          ButtonText={isPending ? "Loading..." : buttonText}
          disabled={isPending}
        />
      </div>
    </form>
  );
}

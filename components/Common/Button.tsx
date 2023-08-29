import React from "react";
import Image from "next/image";

const Button = ({
  ButtonText,
  ButtonClasses,
  ButtonClicked,
  type,
  disabled = false,
  icon,
  children,
}: any) => {
  return (
    <button
      type={type || "submit"}
      disabled={disabled}
      onClick={ButtonClicked}
      className={`flex gap-1 bg-primary rounded-[8px] px-[31px] py-2 laptopScreen:text-base cursor-pointer max-lg:px-4  max-lg:text-sm transition-opacity ${
        disabled ? "opacity-60" : "opacity-100"
      } ${ButtonClasses}`}
    >
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}
      {/* P tag with text in a single line */}
      {children ? children : <p className="ml-2 whitespace-nowrap">{ButtonText}</p>}
    </button>
  );
};

export default Button;

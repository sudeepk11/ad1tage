import React from "react";

const Button = ({ ButtonText, ButtonClasses, ButtonClicked }: any) => {
  return (
    <div
      onClick={ButtonClicked}
      className={`bg-blackLight rounded-[8px] px-[31px] py-2 laptopScreen:text-base cursor-pointer max-lg:px-4 max-lg:py-[7px] max-lg:text-sm ${ButtonClasses}`}
    >
      {ButtonText}
    </div>
  );
};

export default Button;

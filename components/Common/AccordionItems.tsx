import React, { useRef } from "react";
import arrowDown from "../../images/arrow-down.png";
import Image from "next/image";

const AccordionItems = ({
  active,
  handleToggle,
  title,
  id,
  content,
  content2,
}: any) => {
  const contentEl = useRef();

  return (
    <div
      className={`py-5 border-b cursor-pointer accordion-card border-lightBrown max-md:mr-[20px] ${
        active === id ? "active" : ""
      }`}
      onClick={() => handleToggle(id)}
    >
      <div className="accordion-header">
        <div className="flex justify-between w-full px-2 accordion-toggle h-max">
          <h5 className="flex pl-3 pr-5 font-semibold accordion-title before:list-item">
            {title}
          </h5>

          <Image
            src={arrowDown}
            alt=""
            className={`object-contain w-3 ${
              active === id ? "rotate-0" : "-rotate-90"
            }`}
          />
        </div>
      </div>
      <div
        ref={contentEl}
        className={`mt-5 ${active === id ? "show" : "collapse"}`}
        style={active === id ? { height: "100%" } : { display: "none" }}
      >
        <div className="accordion-body">
          <p className="mb-4">{content}</p>
          <p className="mb-0">{content2}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItems;

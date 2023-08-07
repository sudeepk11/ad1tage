import React, { useRef, useState } from "react";
import { accordionContent } from "../../utils/utilsItems";
import AccordionItems from "./AccordionItems";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (item) => {
    if (active === item) {
      setActive(null);
    } else {
      setActive(item);
    }
  };
  return (
    <div>
      {accordionContent.map((item) => {
        return (
          <AccordionItems
            key={item.id}
            id={item.id}
            active={active}
            handleToggle={(e) => handleToggle(item.id)}
            title={item.title}
            content={item.contentPara1}
            content2={item.contentPara2}
          />
        );
      })}
    </div>
  );
};

export default Accordion;

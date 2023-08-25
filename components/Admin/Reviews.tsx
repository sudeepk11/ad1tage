import React from "react";
import { Review, Service } from "../../types/services";

const Reviews = ({
  user,
  place,
  comment,
}: Omit<Review, "place"> & { place: Service }) => {
  return (
    <div>
      <p className="leading-6 max-md:text-sm md:text-base font-semibold text-[#292021] my-2">
        By {user.username}{" "}
        <span className="max-md:text-sm font-normal text-[#939393]">
          – {place.name}, {place.city}
        </span>
      </p>
      <p className="max-md:text-sm leading-6 md:text-base font-normal text-[#292021]">
        {comment}
      </p>
    </div>
  );
};

export default Reviews;

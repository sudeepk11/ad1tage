import Image from "next/image";
import Rating from "../Common/Rating";
import userImg from "../../images/user-img.png";
import { Review } from "../../types/services";

export default function ReviewRef({ rating, comment }: Review) {
  return (
    <div className="border border-gray-300 shadow-sm rounded-lg p-4 flex flex-col items-left my-3">
      <div>
        <div className="flex items-center gap-2">
          <Image src={userImg} alt="" className="object-contain" />
          <p>John Doe</p>
        </div>

        <div className="flex my-2">
          <Rating rating={rating} />
        </div>
        <p className="my-2 text-justify">{comment}</p>
      </div>
    </div>
  );
}

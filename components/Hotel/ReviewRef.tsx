import Image from "next/image";
import Rating from "../Common/Rating";
import userImg from "../../images/user-img.png";
import { Review } from "../../types/services";

export default function ReviewRef({ rating, comment, user }: Review) {
  return (
    <div className="border-b  p-4 flex flex-col items-left my-3">
      <div>
        <div className="flex items-center gap-2">

          <p className="font-medium text-[16px]">{user.username}</p>
        </div>

        <div className="flex my-2">
          <Rating rating={rating} />
        </div>
        <p className="my-2 text-justify">{comment}</p>
      </div>
    </div>
  );
}

import Image from "next/image";
import Rating from "../Common/Rating";
import userImg from "../../images/user-img.png";

export default function ReviewRef() {
  return (
    <div className="border border-gray-300 shadow-sm rounded-lg p-4 flex flex-col items-left my-3">
      <div>
        <div className="flex items-center gap-2">
          <Image src={userImg} alt="" className="object-contain" />
          <p>John Doe</p>
        </div>

        <div className="flex my-2">
          <Rating rating={3.2} />
        </div>
        <p className="my-2 text-justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
          temporibus reprehenderit consectetur, animi enim explicabo repudiandae
          officiis ipsum amet veniam incidunt excepturi beatae facilis voluptas
          dolores odio laudantium iusto! Laboriosam!
        </p>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Result } from "../../types/general";
import Rating from "./Rating";
import { number } from "yup";

export default function ResultRef({ rating, name, type, id, count }: Result) {
  return (
    <Link
      href={
        type === "services" ? `/service-details/${id}` : `/categories/${id}`
      }
      className="py-3 px-6 bg-white flex items-center gap-4 justify-between"
    >
      <span className="text-black font-medium">{name}</span>
      {type === "services" ? (
        <Rating rating={rating} />
      ) : (
        <span className="text-sm text-black font-medium min-w-max">
          Number of services: {count}
        </span>
      )}
    </Link>
  );
}

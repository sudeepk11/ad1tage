import { Query } from "../../types/auth";

export default function QueryRef({
  name,
  email,
  phone_number,
  body,
  subject,
}: Query) {
  return (
    // <tr className="my-3 border-b border-solid text-center">
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {name}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {email}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {phone_number}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {body}
    //     </p>
    //   </td>
    //   <td className="flex py-5 px-3">
    //     <p className="flex items-center justify-center ml-3 font-semibold">
    //       {subject}
    //     </p>
    //   </td>
    // </tr>
    <tr className="table-row my-3 border-b border-solid text-center">
      <td className="flex py-5 px-3 w-60">
        <input type="checkbox" name="" id="" />
        <p className="flex items-center justify-center ml-3 font-semibold">
          {name}
        </p>
      </td>
      <td className="py-5 px-3">
        <p className={`mx-3`}>{email}</p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{phone_number}</p>
      </td>
      <td className={`py-5 px-3 relative`}>
        <p className="mx-3">{subject}</p>
      </td>
      <td className="py-5 px-3">
        <p className="mx-3">{body}</p>
      </td>
    </tr>
  );
}

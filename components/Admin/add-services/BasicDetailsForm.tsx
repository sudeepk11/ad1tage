import { josefin } from "../../../utils/utilsFonts";

const BasicDetailsForm = ({ name, displayName, desc, updateFields }) => {
  return (
    <>
      <div className="w-full col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Name
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          required
          onChange={(e) => updateFields({ name: e.target.value })}
        />
      </div>
      <div className="w-full col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Display Name (Point of Contact)
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          type="text"
          placeholder="Enter Owners name that should be displayed on the service"
          name="display_name"
          value={displayName}
          required
          onChange={(e) => updateFields({ displayName: e.target.value })}
        />
      </div>
      <div className="w-full col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Description
        </label>
        <textarea
          className="w-full border border-solid border-greyishBrown rounded-lg p-3"
          placeholder="Enter Service Description"
          rows={8}
          name="desc"
          value={desc}
          required
          onChange={(e) => updateFields({ desc: e.target.value })}
        />
      </div>
    </>
  );
};

export default BasicDetailsForm;

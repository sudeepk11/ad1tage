import { josefin } from "../../../utils/utilsFonts";
import MultiImageUploader from "../../Upload/MultiImageUploader";

const AdditionalDetailsForm = ({
  categories,
  category,
  phoneNumber,
  websiteLink,
  photos,
  updateFields,
}) => {
  return (
    <>
      <div className="w-full col-span-4 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Category
        </label>
        <select
          className="w-full h-[52px] border border-solid bg-white border-greyishBrown rounded-lg p-3"
          placeholder="Enter Category"
          name="category"
          value={category}
          onChange={(e) => updateFields({ category: e.target.value })}
          required
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((opt) => (
            <option value={opt._id} key={opt._id}>
              {opt.category}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full col-span-4 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Phone Number
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          type="text"
          placeholder="Enter Phone Number"
          name="phone"
          required
          value={phoneNumber}
          onChange={(e) => updateFields({ phoneNumber: e.target.value })}
        />
      </div>

      <div className="w-full col-span-4 max-md:col-span-8">
        <label
          className={`block mb-2 text-sm font-bold text-black ${josefin.className}`}
        >
          Website URL ( Optional )
        </label>
        <input
          className="w-full h-[52px] border border-solid border-greyishBrown rounded-lg p-3"
          type="text"
          placeholder="https://www.myservice.com"
          name="website"
          value={websiteLink}
          onChange={(e) => updateFields({ websiteLink: e.target.value })}
        />
      </div>
      <MultiImageUploader photos={photos} updateFields={updateFields} />
    </>
  );
};

export default AdditionalDetailsForm;

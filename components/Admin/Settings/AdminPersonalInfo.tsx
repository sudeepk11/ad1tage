import React from "react";
import Card from "../../Common/Card";
import BackButton from "../../Common/BackButton";
import editIcon from "../../../images/edit-pencil.png";

const AdminPersonalInfo = () => {
  const nameEditCode = (
    <>
      <div className="py-2">
        <input
          type="text"
          placeholder="First name"
          className="w-full border border-[#E1D9CE] pl-4 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
        />
      </div>
      <div className="py-2">
        <input
          type="text"
          placeholder="Last name"
          className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
        />
      </div>
    </>
  );

  const emailEditCode = (
    <div className="py-2">
      <input
        type="email"
        placeholder="Enter Email"
        className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
      />
    </div>
  );

  const phoneEditCode = (
    <div className="py-2">
      <input
        type="number"
        placeholder="Enter phone"
        className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
      />
    </div>
  );
  const addressEditCode = (
    <div className="py-2">
      <input
        type="text"
        placeholder="Enter address"
        className="w-full border border-[#E1D9CE] pl-6 py-3 focus:border-[#E1D9CE] focus:outline-none rounded-md bg-white placeholder:text-base placeholder:font-light text-base text-[#939393]"
      />
    </div>
  );
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="Personal Info" />
        {/* <h3 className="mb-5 text-sm font-medium">Account Settings</h3> */}
        <div className="grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3">
          <Card
            label1Text="Name"
            label2Text="Trophy"
            icon={editIcon}
            editCode={nameEditCode}
            cardProperty="h-max"
          />
          <Card
            label1Text="Email"
            label2Text="t****y@example.com"
            icon={editIcon}
            editCode={emailEditCode}
            cardProperty="h-max"
          />
          <Card
            label1Text="Phone Number"
            label2Text="+12*****7425"
            icon={editIcon}
            editCode={phoneEditCode}
            cardProperty="h-max"
          />
          <Card
            label1Text="Address"
            label2Text="Street, Building, Area, City"
            icon={editIcon}
            editCode={addressEditCode}
            cardProperty="h-max"
          />
          <Card
            label1Text="Government ID"
            label2Text="**********"
            button="verify"
            modalTitle="Government ID Verification"
            cardProperty="h-max"
          />
          <Card
            label1Text="Passport ID"
            label2Text="**********"
            button="verify"
            modalTitle="Passport ID Verification"
            cardProperty="h-max"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminPersonalInfo;

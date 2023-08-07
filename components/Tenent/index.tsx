"use client";
import React from "react";
import BackButton from "../Common/BackButton";
import Card from "../Common/Card";
import editIcon from "../../images/edit-pencil.png";

const Profile = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="Profile" />
        <div className="grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3">
          <Card label1Text="Name" label2Text="Trophy" icon={editIcon} />
          <Card
            label1Text="Email"
            label2Text="t****y@example.com"
            icon={editIcon}
          />
          <Card
            label1Text="Phone Number"
            label2Text="+12*****7425"
            icon={editIcon}
          />
          <Card
            label1Text="Address"
            label2Text="Street, Building, Area, City"
            icon={editIcon}
          />
          <Card
            label1Text="Government ID"
            label2Text="**********"
            button="verify"
            modalTitle="Government ID Verification"
          />
          <Card
            label1Text="Passport ID"
            label2Text="**********"
            button="verify"
            modalTitle="Passport ID Verification"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;

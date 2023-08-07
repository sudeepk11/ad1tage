import React from "react";
import BackButton from "../../Common/BackButton";
import Card from "../../Common/Card";
import personalInfoIcon from "../../../images/personal-info.png";
import securityIcon from "../../../images/security.png";
import cardIcon from "../../../images/cards.png";
import bellIcon from "../../../images/bell.png";
import Link from "next/link";
const AdminSetting = () => {
  return (
    <div>
      <React.Fragment>
        <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
          <div className="pb-4">
            <span className="pl-2 text-base text-black">Account Setting</span>
          </div>
          <div className="grid grid-cols-1 gap-3 lg:gap-6 lg:grid-cols-3">
            <Link href="/admin/setting/personal-info">
              <Card
                label1Text="Personal info"
                label2Text="Provide personal details and how we can reach you"
                iconPosition="left"
                icon={personalInfoIcon}
              />
            </Link>
            <Link href="/admin/setting/login-security">
              <Card
                label1Text="Login & security"
                label2Text="Update your password and secure your account"
                iconPosition="left"
                icon={securityIcon}
              />
            </Link>
            <Card
              label1Text="Payments & payouts"
              label2Text="Review payments, payouts, coupons, and gift cards"
              iconPosition="left"
              icon={cardIcon}
            />
            <Card
              label1Text="Notifications"
              label2Text="Choose notification preferences and how you want to be contacted"
              iconPosition="left"
              icon={bellIcon}
            />
          </div>
        </div>
      </React.Fragment>
    </div>
  );
};

export default AdminSetting;

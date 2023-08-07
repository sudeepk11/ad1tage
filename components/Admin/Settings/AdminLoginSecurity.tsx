import React from "react";
import Card from "../../Common/Card";
import BackButton from "../../Common/BackButton";
import editIcon from "../../../images/edit-pencil.png";
const AdminLoginSecurity = () => {
  return (
    <React.Fragment>
      <div className="container-2xl max-lg:px-4 lg:px-[50px] py-10">
        <BackButton buttonText="Login and Security" />

        <div className="grid grid-cols-1 gap-3 pt-4 lg:gap-6 lg:grid-cols-3">
          <div className="flex flex-col justify-end">
            <span className="pb-4 pl-2 text-lg font-medium">Login</span>
            <Card label1Text="Password" label2Text="********" icon={editIcon} />
          </div>
          <div className="flex flex-col justify-end">
            <span className="pb-4 pl-2 text-lg font-medium">
              Social Accounts
            </span>
            <Card
              label1Text="Facebook"
              label2Text="t****y@facebook.com"
              icon={editIcon}
            />
          </div>
          <div className="flex flex-col justify-end">
            <Card
              label1Text="Google"
              label2Text="t****y@google.cm"
              icon={editIcon}
            />
          </div>
          <div className="flex flex-col justify-end">
            <span className="pb-4 pl-2 text-lg font-medium">Account</span>
            <Card
              label1Text="Account Activation"
              label2Text="Street, Building, Area, City"
              icon={editIcon}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AdminLoginSecurity;

import Link from "next/link";
import React, { useContext, useState, useTransition } from "react";
import Image from "next/image";
import logoLionImage from "../../images/logo.png";
import profileImage from "../../images/profile.png";
import arrowDown from "../../images/arrow-down.png";
// import logoText from "../../images/trophy-logo.png";
import logoText from "../../images/logo-text.png";
import { navbarItems } from "../../utils/utilsItems";
import { usePathname } from "next/navigation";
import { AuthContext } from "../../providers/AuthProvider";
import logOut from "../../service/auth/logOut";
const withLogin = [
  "/tenent",
  "/booking-history",
  "/admin",
  "/admin/setting",
  "/admin/setting/personal-info",
  "/admin/setting/login-security",
];

const withAdmin = [
  "/admin",
  "/admin/setting",
  "/admin/setting/personal-info",
  "/admin/setting/login-security",
];
const Navbar = () => {
  const router = usePathname();
  const [isPending, startTransition] = useTransition();
  const { user, token, logOut: signOut } = useContext(AuthContext);
  const isAdmin = !!(token && user.role === "admin");
  const [userSettingDropdown, setUserSettingDropdown] = useState(false);
  return (
    <div
      className={`sticky top-0 left-0 z-20 w-full h-auto shadow-md s bg-white ${
        token ? "shadow-md" : ""
      } `}
    >
      <div className="flex items-center justify-between max-w-full py-[13px] mx-auto px-5 lg:px-[50px] ">
        <div className="flex gap-[50px]">
          <Link className="flex items-center text-gray-600" href="/">
            <Image className="w-[80px]" src={logoLionImage} alt="" />
          </Link>
          <input type="checkbox" className="hidden peer" id="nav-check" />
          {!isAdmin && (
            <div
              className="nav-links max-lg:hidden max-lg:peer-checked:block max-lg:fixed max-lg:top-[72px] max-lg:left-0 max-lg:w-full max-lg:h-full z-20 max-lg:bg-white
           max-lg:text-primary 
          "
            >
              <ul className="flex items-center h-full max-lg:pb-20 max-lg:flex-col max-lg:justify-center max-lg:items-center md:-mr-7">
                {navbarItems.map((items, index) => {
                  return (
                    <li
                      key={index}
                      className={`lg:mr-[20px] mb-5 lg:mb-0 max-lg:text-2xl lg:text-sm xl:mr-10 xl:text-base text-black max-lg:leading-[] ${
                        items.link === router
                          ? "text-primary font-semibold"
                          : ""
                      }`}
                    >
                      <Link className="" href={`${items.link}`}>
                        {items.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {isAdmin && (
            <div
              className="nav-links max-lg:hidden max-lg:peer-checked:block max-lg:fixed max-lg:top-[72px] max-lg:left-0 max-lg:w-full max-lg:h-full z-20 max-lg:bg-white
       max-lg:text-primary 
      "
            >
              <ul className="flex items-center h-full max-lg:pb-20 max-lg:flex-col max-lg:justify-center max-lg:items-center md:-mr-7">
                <li className="lg:mr-[20px] max-lg:text-2xl lg:text-sm xl:mr-[50px] xl:text-base text-black max-lg:leading-[] ">
                  Listing
                </li>
                <li className="lg:mr-[20px] max-lg:text-2xl lg:text-sm xl:mr-[50px] xl:text-base text-black max-lg:leading-[] ">
                  Insights
                </li>
              </ul>
            </div>
          )}
        </div>

        {token ? (
          <div className="relative cursor-pointer">
            <div
              className="flex items-center max-lg:hidden"
              onClick={() => setUserSettingDropdown(!userSettingDropdown)}
            >
              {/* <Image className="w-[44px] h-[44px]" src={} alt="" /> */}
              <span className="pl-2 text-base font-normal">Mohan Kamat</span>
              <Image className="w-[20px] pl-2" src={arrowDown} alt="" />
            </div>
            {userSettingDropdown && (
              <div className="p-4 rounded grid grid-cols-2 mt-4 absolute z-[1] bg-white w-full top-[100%]">
                <ul>
                  <li className="my-2 text-base">
                    <Link href="/admin/setting">Setting</Link>
                  </li>
                  <li className="my-2 text-base">
                    <form
                      action={() =>
                        startTransition(async () => {
                          const resp = await logOut();
                          if (resp.status === "success") {
                            signOut();
                          }
                        })
                      }
                    >
                      <button
                        disabled={isPending}
                        className={`${
                          isPending ? "opacity-60" : "opacity-100"
                        } transition-opacity w-max`}
                      >
                        {isPending ? "Loading..." : "Log Out"}
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-5 max-lg:hidden">
            <Link
              href={"/signup"}
              className="lg:text-sm laptopScreen:text-base"
            >
              Business Owner?{" "}
              <span className="text-primary cursor-pointer font-medium">
                Join Us
              </span>
            </Link>
            <Link
              className={`bg-primary rounded-[8px] px-[31px] py-2  laptopScreen:text-base text-white`}
              href={"/login"}
            >
              Sign Up
            </Link>
            {/* <Button /> */}
          </div>
        )}
        <div className="flex items-center gap-4 nav-button lg:hidden">
          {!token && (
            <Link
              href={"/login"}
              className={`bg-blackLight rounded-[8px] px-[31px] py-2  laptopScreen:text-base text-white`}
            >
              Sign In
            </Link>
          )}
          <div className="flex flex-col justify-center ">
            <label
              htmlFor="nav-check"
              className="flex flex-col items-end cursor-pointer"
            >
              <span className="block w-4 h-[3px] mb-[6px] rounded-md bg-darkGrey text-darkGrey"></span>
              <span className="block w-4 h-[3px] mb-[6px] rounded-md bg-darkGrey text-darkGrey"></span>
              <span className="block w-[21px] h-[3px] rounded-md bg-darkGrey text-darkGrey"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

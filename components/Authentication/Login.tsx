"use client"
import Image from "next/image";
import React, { useState } from "react";
import login_signup from "../../Assets/Images/login_signup.png";
import Link from "next/link";
import Button from "../Common/Button";
import RightFormSection from "./RightFormSection";
import { login } from "../../service/service";
import setAuthToken from "../../service/api/setAuthToken";
const Login = () => {

  

  const [email, setEmail] = useState('')
  const [error, setError] = useState([]);
  const [password, setPassword] = useState('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  }

  const onLogin = async () => {
    const username = 'sudeepk11'

    const newErrors = [];
    if (!validateEmail(email)) {
      newErrors.push('Invalid email format.');
    }
    if (!validatePassword(password)) {
      newErrors.push('Password must be at least 6 characters long.');
    }

    if (newErrors.length === 0) {
      const payload = {
        username,
        password,
      };
      const res = await login(payload)
      if(res.token) {
        setAuthToken(res.token)
        console.log(res.token)
        localStorage.setItem("auth_token", res.token)
      }
    } 
    setError(newErrors);
  }

  return (
    <div className="lg:flex m-[20px] md:m-0 items-center justify-center h-screen bg-white rounded-2xl overflow-hidden">
      <Image
        src={login_signup}
        alt="loginImage"
        className="basis-3/6 md:w-1/2 sm:w-1/2 mx-auto hidden sm:block lg:w-1/2 xl:w-1/2"
      />

      <RightFormSection
        titleText={"Log In to Your Account"}
        googleText={"Login with Google"}
        authText={" Don’t have an account yet?"}
        isAuthText={false}
        authLinkText={"Register"}
        authLink={"/signup"}
      >
        <form className="flex flex-col justify-center items-center pt-6 max-w-[384px] mx-auto w-full">
          <div className="w-full">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              className="py-[18px] mb-[10px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />

            {email && !validateEmail(email) && (
              <p className="text-red-600 text-sm mb-2 flex justify-end">Invalid email format.</p>
            )}

          </div>
          <div className="w-full">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              className="py-[18px] px-6 border border-greyishBrown rounded-[8px] w-full"
            />
          </div>

          <div>
            {error.length > 0 && (
              <div className="mt-3 bg-red-100 border border-red-400 text-red-600 px-4 py-3 mb-2 rounded relative" role="alert">
                <strong className="font-semibold">Error Couldnt Login:</strong>
                <ul className="list-disc ml-5 mt-1">
                  {error.map((errorMessage, index) => (
                    <li key={index}>{errorMessage}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link
            className="text-darkGrey text-sm underline mt-[18px] mb-[24px] self-end"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>
          <Button
            ButtonText={"Login"}
            ButtonClicked={onLogin}
            ButtonClasses={"w-full bg-primary text-center text-white py-4 "}
          ></Button>
        </form>
      </RightFormSection>
    </div>
  );
};

export default Login;

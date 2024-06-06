import React, { useContext } from "react";
import google from "../images/google.png";
import apple from "../images/appleG.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./Firebase/firebase";
import { Context } from "../context/contextApi";

export default function Form() {
  const { setUser } = useContext(Context);
  const provider = new GoogleAuthProvider();

  const continueWithGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const data = {
        name: user.displayName,
        img: user.photoURL,
        email: user.email,
      };
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg">
        <div className="flex flex-col-reverse sm:flex-row  items-center justify-center mx-auto lg:py-0">
          {/* Banner */}
          <div className="flex flex-col justify-between sm:w-[40%] w-full sm:h-full items-center">
            <div className="font-bold text-center sm:flex items-center font-[Montserrat] justify-center text-white hidden text-7xl ">
              DashGo.
            </div>
            <p className=" text-red-900">Currently registering is not available!</p>
          </div>
          {/* Form */}
          <div className="w-full sm:w-[60%]  sm:h-full flex items-center justify-center h-screen rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 w-[28rem] my-auto self-center space-y-4 md:space-y-6 sm:p-8">
              {/* Heading */}
              <div>
                <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">
                  Sign in
                </h1>
                <h4>Sign in to your account</h4>
              </div>

              <div className="buttons text-sm [_&]:cursor-pointer flex justify-between  items-center space-x-2">
                <div
                  onClick={continueWithGoogle}
                  className="btn w-1/2 bg-white text-gray-500 font-medium space-x-1 rounded-xl py-1  sm:py-2 flex flex-row justify-evenly items-center px-1  sm:px-3"
                >
                  <img src={google} className="w-6" />
                  <span className="">Sign in with Google</span>
                </div>
                <div className="btn w-1/2 bg-white text-gray-500 font-medium space-x-1 rounded-xl py-1  sm:py-2 flex flex-row justify-evenly items-center px-1  sm:px-3">
                  <img src={apple} className="w-6" />
                  <span className="">Sign in with Apple</span>
                </div>
              </div>
              <form
                className="space-y-4 rounded-xl px-5 py-6 bg-white md:space-y-6"
                action="#"
              >
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Email adress
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="sm:text-sm rounded-lg block w-full p-2.5 bg-gray-100"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                {/* Password */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="sm:text-sm rounded-lg  block w-full p-2.5 bg-gray-100"
                    required=""
                  />
                </div>
                {/* Forgot pass */}
                <div className="flex text-[rgb(52,107,212)] items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                {/* Buttton  */}
                <button
                  type="submit"
                  className="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5  text-center dark:bg-primary-600 dark:hover:bg-primary-700 "
                >
                  Sign in
                </button>
              </form>

              <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                Don’t have an account?{" "}
                <a
                  href="#"
                  className="font-medium text-[rgb(52,107,212)]  text-primary-600 hover:underline dark:text-primary-500"
                >
                  Register here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

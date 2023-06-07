import React, { useEffect, useState } from "react";
import AuthHeader from "../AuthHeader";
import { Link, useNavigate } from "react-router-dom";
import AuthFooter from "../AuthFooter";
import { ToastContainer, toast } from "react-toastify";
import { useLoginUserMutation } from "../../../services/auth/authApi";
const LoginPage = () => {
  const [
    loginUser,
    {
      data: loginData,
      isSuccess: isLoginSuccess,
      error: loginError,
      isError: isLoginError,
    },
  ] = useLoginUserMutation();
  const navigate = useNavigate();
  // const notify = () =>
  //   toast("Signin successfully", {
  //     type: "success",
  //   });
  const [user, setUser] = useState({
    email: "",
    password: "",
    userType: "Freelancer",
  });

  const handleSubmit = (user) => {
    if (user.email && user.password) {
      loginUser(user);
      // notify();
      console.log(loginData, +"   " + isLoginSuccess);
      setTimeout(() => {}, 1500);
    }
  };

  return (
    <>
      <AuthHeader />
      <section className="mb-[100px] sm:mt-[60px] md:mt-[100px] lg:mt-[100px] mt-[40px]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to Colabs
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(user);
                }}
              >
                <button
                  aria-label="Continue with google"
                  role="button"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                    alt="google"
                  />
                  <p className="text-base font-medium ml-4 text-gray-700">
                    Continue with Google
                  </p>
                </button>
                <button
                  aria-label="Continue with github"
                  role="button"
                  className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg"
                    alt="github"
                  />
                  <p className="text-base font-medium ml-4 text-gray-700">
                    Continue with Github
                  </p>
                </button>

                <div className="w-full flex items-center justify-between py-5">
                  <hr className="w-full bg-gray-400" />
                  <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
                    OR
                  </p>
                  <hr className="w-full bg-gray-400  " />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@gmail.com"
                    required
                    onChange={(e) =>
                      setUser({
                        ...user,
                        email: e.target.value,
                      })
                    }
                    value={user.email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-purple-600 focus:border-purple-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    onChange={(e) =>
                      setUser({
                        ...user,
                        password: e.target.value,
                      })
                    }
                    value={user.password}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="text-purple-600 w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-purple-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    to={"/forgotpassword"}
                    className="text-sm font-medium text-purple-600 hover:underline dark:text-purple-700"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                >
                  Log In
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/signup"}
                    s
                    className="font-medium text-purple-600 hover:underline dark:text-purple-700"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <AuthFooter />
      </div>
      <ToastContainer />
    </>
  );
};

export default LoginPage;

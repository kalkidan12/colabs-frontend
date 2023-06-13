import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const VerificationSuccess = () => {
  const [searchParams] = useSearchParams();
  const navigateTo = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const type = searchParams.get("type");
    localStorage.setItem("token", token);
    localStorage.setItem("type", type);

    setTimeout(() => {
      if (type === "Freelancer") {
        navigateTo("/freelancer");
      } else if (type === "Employer") {
        navigateTo("/client");
      }
    }, 1500);
  }, []);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Verified Successfuly!
          </h1>
          <p>Thank you for your interest! will redirect you in 5 sec.</p>
        </div>
      </div>
    </div>
  );
};

export default VerificationSuccess;

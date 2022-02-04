import React from "react";
import useTitle from "../customHooks/useTitle";
import errorImage from "../images/error-something-wrong.png";

const Error = () => {
  useTitle("Something went wrong | Diagonal Book Store");

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-[1rem]">
      <img src={errorImage} alt="not found" className="h-[12rem]" />
      <h1 className="text-center font-extrabold text-4xl text-slate-900">
        Ooops...
      </h1>
      <h1 className="text-center font-bold text-2xl text-slate-800">
        Something went wrong!
      </h1>
      <h2 className="font-semibold text-gray-700 text-center">
        Refresh the page or try again later.
      </h2>
    </div>
  );
};

export default Error;

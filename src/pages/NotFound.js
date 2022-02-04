import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import useTitle from "../customHooks/useTitle";
import notFoundImage from "../images/error-404.png";

const NotFound = () => {
  useTitle("Page Not Found | Diagonal Book Store");

  return (
    <div className="flex flex-col justify-center items-center h-[80vh] gap-[1rem]">
      <img src={notFoundImage} alt="not found" className="h-[12rem]" />
      <h1 className="text-center font-extrabold text-4xl text-slate-900">
        Page not found!
      </h1>
      <h2 className="font-semibold text-xl text-slate-800 text-center">
        It looks like you're lost.
      </h2>
      <Link
        to="/"
        className="text-white font-bold bg-sky-500 rounded-md px-[2rem] py-[.4rem] flex justify-center items-center gap-[.5rem] uppercase text-sm hover:bg-gray-700 transition-all"
      >
        <FaHome />
        <span>Go to Home</span>
      </Link>
    </div>
  );
};

export default NotFound;

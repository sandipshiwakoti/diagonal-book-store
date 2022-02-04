import React from "react";
import useTitle from "../../customHooks/useTitle";

const DetailBanner = ({ title, subtitle }) => {
  useTitle(`${title} | Diagonal Book Store`);

  return (
    <div className={`min-h-[25vh] bg-sky-200 mb-[1rem]`}>
      <div className="container-center grid items-center h-full p-[1.5rem]">
        <div>
          <h1 className="font-bold text-xl sm:text-3xl md:text-4xl text-black capitalize ">
            {title}
          </h1>
          <h2 className="text-gray-800 font-extrabold text-lg sm:text-xl md:text-2xl font-mono drop-shadow-xl mt-[.5rem]">
            {subtitle}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DetailBanner;

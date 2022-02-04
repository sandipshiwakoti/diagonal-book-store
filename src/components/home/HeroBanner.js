import React from "react";
import bgBanner from "../../images/book-store.jpg";

const HeroBanner = () => {
  return (
    <div
      className="h-[40vh] bg-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(22,22,22,0.6)), url('${bgBanner}')`,
      }}
    >
      <div className="container-center grid place-items-center h-full p-[1.5rem]">
        <div>
          <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white capitalize leading-snug mb-[.7rem] tracking-wide drop-shadow-xl text-center">
            Welcome to Diagonal Book Store
          </h1>
          <h2 className="text-sky-100 mx-auto font-extrabold text-lg sm:text-xl md:text-2xl text-center font-mono drop-shadow-2xl">
            IT, Programming and Computer Science Books
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

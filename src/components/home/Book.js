import React from "react";
import { Link } from "react-router-dom";

const Book = ({ title, subtitle, price, image, isbn13 }) => {
  return (
    <article className="bg-white rounded-md shadow-md hover:shadow-2xl transition-all">
      <Link to={`/detail/${isbn13}`} className="grid place-items-center">
        <img
          src={image}
          alt={title}
          className="h-[15rem] hover:scale-110 transition-all"
        />
      </Link>
      <div className="p-[.5rem]">
        <Link
          to={`/detail/${isbn13}`}
          className="text-gray-900 font-bold text-center hover:text-gray-600 block"
        >
          {title}
        </Link>
        <div className="flex gap-[.7rem] justify-between align-center">
          <h1 className="text-gray-800 font-semibold truncate max-w-[22ch] sm:max-w-[40ch]">
            {subtitle}
          </h1>
          <h2 className="text-gray-800 font-bold ">{price}</h2>
        </div>
      </div>
    </article>
  );
};

export default Book;

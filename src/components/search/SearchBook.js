import { Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../customHooks/useFetch";
import Error from "../../pages/Error";

const SearchBook = ({ isbn13 }) => {
  const { loading, error, data } = useFetch(
    `https://api.itbook.store/1.0/books/${isbn13}`
  );

  if (loading) {
    return <></>;
  }

  if (error) {
    return <Error />;
  }
  const { authors, desc, image, price, publisher, rating, title, year } = data;

  return (
    <div className="bg-white p-[1.5rem] flex gap-[2rem] mb-[2rem] flex-col md:flex-row">
      <div className="grid place-items-center bg-gray-300">
        <Link to={`/detail/${isbn13}`}>
          <img
            src={image}
            alt={title}
            className="h-[20rem] md:h-[15rem] md:w-[12rem] hover:scale-110 transition-all"
          />
        </Link>
      </div>
      <div className="grid gap-[.5rem]">
        <div className="flex gap-[.5rem] items-center">
          <Link
            to={`/detail/${isbn13}`}
            className="font-bold text-xl text-sky-700"
          >
            {title}
          </Link>
          <Rating
            name="half-rating-read"
            defaultValue={Number(rating)}
            precision={0.5}
            readOnly
          />
        </div>
        <h1>
          by <span className="font-bold text-gray-700">{authors}</span>
        </h1>
        <p className="max-w-[35rem] ">{desc}</p>
        <div>
          Price: <span className="font-bold text-gray-700">{price}</span> |
          Publisher:{" "}
          <span className="font-semibold text-gray-700">{publisher}</span> |
          Release: <span className="font-semibold text-gray-700">{year}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBook;

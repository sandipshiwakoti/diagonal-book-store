import { Rating } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import useFetch from "../../customHooks/useFetch";
import Error from "../../pages/Error";
import LoadingSpinner from "../LoadingSpinner";
import DetailBanner from "./DetailBanner";
import * as actionCreators from "../../cart/actionCreators";
import { useGlobalContext } from "../../contexts/AppContext";

const DetailBook = () => {
  const { API_ENDPOINT } = useGlobalContext();
  const dispatch = useDispatch();
  const { addBookToCart } = bindActionCreators(actionCreators, dispatch);
  const { isbn } = useParams();
  const { loading, error, data } = useFetch(`${API_ENDPOINT}/books/${isbn}`);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Error />;
  }

  const {
    title,
    subtitle,
    authors,
    publisher,
    language,
    pages,
    year,
    rating,
    desc,
    price,
    image,
    isbn10,
  } = data;

  return (
    <div>
      <DetailBanner title={title} subtitle={subtitle} />
      <div className="container-center grid md:grid-cols-[1fr_3fr] gap-[2rem] p-[1.5rem]">
        <div>
          <div className="sticky top-[7rem]">
            <div className="grid place-items-center bg-sky-200 rounded-md">
              <img
                src={image}
                alt={title}
                className="h-[20rem] md:h-[15rem] lg:h-[20rem]"
              />
            </div>
            <button
              className="w-full text-white font-bold bg-sky-500 rounded-md px-[.8rem] py-[.4rem] flex justify-center items-center gap-[.7rem] uppercase text-sm hover:bg-gray-700 transition-all"
              onClick={() =>
                addBookToCart({ title, price, isbn13: isbn, image })
              }
            >
              <BsCart4 />
              <span>Buy now</span>
            </button>
          </div>
        </div>
        <div className="bg-white p-[1rem] shadow-xl">
          <h1 className="font-bold text-gray-700 text-xl mb-[1.3rem]">
            Book Information
          </h1>
          <table className="w-full mb-[1.2rem]">
            <tbody>
              <tr>
                <td>Price</td>
                <td className="font-bold text-gray-700">{price}</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>
                  <Rating
                    name="half-rating-read"
                    defaultValue={Number(rating)}
                    precision={0.5}
                    readOnly
                  />
                </td>
              </tr>
              <tr>
                <td>Author</td>
                <td className="font-bold text-gray-700">{authors}</td>
              </tr>
              <tr>
                <td>Publisher</td>
                <td className="font-bold text-gray-700">{publisher}</td>
              </tr>
              <tr>
                <td>Pages</td>
                <td className="font-bold text-gray-700">{pages}</td>
              </tr>
              <tr>
                <td>Language</td>
                <td className="font-bold text-gray-700">{language}</td>
              </tr>
              <tr>
                <td>ISBN-10</td>
                <td className="font-bold text-gray-700">{isbn10}</td>
              </tr>
              <tr>
                <td>ISBN-13</td>
                <td className="font-bold text-gray-700">{isbn}</td>
              </tr>
              <tr>
                <td>Published Year</td>
                <td className="font-bold text-gray-700">{year}</td>
              </tr>
            </tbody>
          </table>
          <div>
            <h1 className="font-bold text-gray-700 text-xl mb-[.5rem]">
              Description
            </h1>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;

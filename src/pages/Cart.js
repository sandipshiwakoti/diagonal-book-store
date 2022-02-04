import React from "react";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../cart/actionCreators";
import emptyCartImage from "../images/empty-cart.png";
import useTitle from "../customHooks/useTitle";

const Cart = () => {
  useTitle("Cart | Diagonal Book Store");
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const { removeBookFromCart } = bindActionCreators(actionCreators, dispatch);
  return (
    <section className="container-center p-[1.5rem]">
      <h1 className="container-title">Book Cart</h1>
      <div className="bg-white p-[1rem] shadow-xl rounded-md overflow-auto">
        <table className="min-w-[30rem] max-w-[60rem] mx-auto">
          <thead>
            <tr>
              <td className="text-center bg-slate-900 text-white font-bold">
                Cover Image
              </td>
              <td className="text-center bg-slate-900 text-white font-bold">
                Title
              </td>
              <td className="text-center bg-slate-900 text-white font-bold">
                Price
              </td>
              <td className="text-center bg-slate-900 text-white font-bold">
                Actions
              </td>
            </tr>
          </thead>
          <tbody>
            {books &&
              books.map(({ title, isbn13, price, image }) => {
                return (
                  <tr key={isbn13}>
                    <td className="w-[15rem] h-[15rem]">
                      <Link to={`/detail/${isbn13}`} className="">
                        <img
                          src={image}
                          alt={title}
                          className="w-[15rem] h-[15rem]"
                          title="View detail"
                        />
                      </Link>
                    </td>
                    <td className="text-center font-semibold">
                      <Link
                        to={`/detail/${isbn13}`}
                        className="text-gray-900 text-center hover:text-gray-600 block font-semibold"
                        title="View detail"
                      >
                        {title}
                      </Link>
                    </td>
                    <td className="text-center font-semibold">{price}</td>
                    <td>
                      <div className="flex justify-center">
                        <div
                          title="Remove book from cart"
                          onClick={() => removeBookFromCart(isbn13)}
                        >
                          <button className="bg-red-800 p-[.7rem] font-bold text-white rounded-md  hover:bg-gray-600">
                            <FaTrashAlt className="text-xl text-white" />
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}
            {books.length === 0 && (
              <tr>
                <td className="py-[4rem]" colSpan="4">
                  <div className="flex flex-col gap-[1rem] justify-center">
                    <div>
                      <img
                        src={emptyCartImage}
                        alt="empty cart"
                        className="h-[5rem] sm:h-[8rem] mx-auto"
                      />
                    </div>
                    <span className="text-center font-bold text-slate-900 text-3xl mx-auto">
                      Your cart is empty!
                    </span>
                    <Link to="/">
                      <button className="text-white font-bold bg-sky-500 rounded-md px-[3rem] py-[.4rem] flex justify-center items-center gap-[.7rem] uppercase text-sm hover:bg-gray-700 transition-all mx-auto">
                        <BsCart4 />
                        <span>Buy now</span>
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Cart;

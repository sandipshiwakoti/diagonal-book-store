import { useState } from "react";
import logo from "../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { BsCart4 } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Nav = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const totalItems = useSelector((state) => state.books.length);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${query}`);
    setQuery("");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="w-full bg-slate-900 sticky top-0 z-50">
      <div className="container-center p-[1.5rem]">
        <nav className="flex flex-col justify-between md:flex-row items-center gap-[1rem]">
          <Link to="/">
            <img src={logo} alt="Company logo" className="h-[4rem]" />
          </Link>
          <div className="flex justify-content-center items-center gap-[.5rem] sm:gap-[1.5rem]">
            <form
              className="relative w-[15rem] sm:w-[30rem]"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                className="text-md bg-gray-800 text-gray-100 pl-[.7rem] pr-[2.7rem] py-[.8rem] rounded-md w-full font-semibold placeholder:font-mono
              placeholder:text-gray-400
              "
                placeholder="Search books by Title, Author or ISBN"
                value={query}
                onChange={handleChange}
              />
              <FaSearch
                className="text-gray-100 absolute top-[1rem] right-[1rem] text-lg md:text-xl hover:text-gray-300 cursor-pointer"
                onClick={handleSubmit}
              />
            </form>
            <Link
              to="/cart"
              className="relative cursor-pointer hover:opacity-70 transition-all"
            >
              <BsCart4 className="text-white text-4xl font-bold " />
              <div className="absolute -top-3 -left-[0.1rem] ">
                <div className="text-white text-center font-extrabold w-[2.5rem] text-sm ">
                  {totalItems > 999 ? "999+" : totalItems}
                </div>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;

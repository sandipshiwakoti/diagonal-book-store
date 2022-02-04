import React from "react";
import logo from "../images/logo.png";
import {
  FaPhoneAlt,
  FaMapMarkedAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-center  p-[1.5rem]">
        <div className="grid  gap-[1.5rem] mb-[2rem] sm:grid-cols-2 md:grid-cols-3">
          <div>
            <Link to="/">
              <img
                src={logo}
                alt="Company logo"
                className="h-[3.2rem] mb-[.5rem]"
              />
            </Link>
            <p className="text-sky-200 max-w-[20rem]">
              Diagonal Book Store is an online book store which helps you buy
              IT, Programming and Computer Science Books. We offer a wide range
              of popular books.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-[1rem]">Contact Info</h1>
            <div className="grid gap-[.5rem] text-sky-200">
              <div className="flex items-center gap-[.5rem]">
                <FaMapMarkedAlt />
                <span>Sankhamul, Lalitpur, Nepal</span>
              </div>
              <div className="flex items-center gap-[.5rem]">
                <FaPhoneAlt />
                <span>+977-9851184181</span>
              </div>
              <div className="flex items-center gap-[.5rem]">
                <FaEnvelope />
                <span>mail@diagonalbookstore.com</span>
              </div>
              <div className="flex items-center gap-[.5rem]">
                <FaClock />
                <span>Opening Hours: 9:00am - 6:00pm</span>
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold mb-[1rem]">
              Subscribe to Newsletter
            </h1>
            <form className="relative w-[15rem] grid gap-[.7rem]">
              <input
                type="text"
                className="text-gray-800 pl-[2.1rem] pr-[.7rem] py-[.3rem] rounded-md w-full font-semibold placeholder:font-mono"
                placeholder="Enter your email"
              />
              <FaEnvelope className="text-gray-800 absolute top-[.5rem] left-[.5rem] text-lg " />
              <button className="bg-sky-500 text-white px-[.7rem] py-[.3rem] font-semibold rounded-md hover:bg-gray-600 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <h1 className="text-sky-400 font-semibold text-center mb-[.5rem]">
          <span className="mr-[.2rem]">Made with ❤ by</span>
          <a href="https://www.github.com/sandipshiwakoti">Sandip Shiwakoti</a>
        </h1>
        <h1 className="text-gray-400 font-semibold text-center text-sm">
          Copyright © 2021. All rights reserved by Diagonal Book Store Pvt. Ltd.
        </h1>
      </div>
    </footer>
  );
};

export default Footer;

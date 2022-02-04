import { toast } from "react-toastify";
import { ADD_BOOK, REMOVE_BOOK } from "./actionTypes";

const initialState = localStorage.getItem("book-cart")
  ? JSON.parse(localStorage.getItem("book-cart"))
  : {
      books: [],
    };

const toastOption = {
  position: "top-right",
  autoClose: 1000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: true,
  theme: "dark",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const newBooks = state.books;
      const findBook = state.books.find(
        (book) => book.isbn13 === action.payload.isbn13
      );
      if (!findBook) {
        newBooks.push(action.payload);
        toast.success("Book added succesfully!", toastOption);
        localStorage.setItem(
          "book-cart",
          JSON.stringify({ ...state, books: newBooks })
        );
      } else {
        toast.warning("This book has already been added!", toastOption);
      }
      return { ...state, books: newBooks };
    case REMOVE_BOOK:
      const filteredBooks = state.books.filter(
        (book) => book.isbn13 !== action.payload
      );
      toast.success("Book removed succesfully!", toastOption);
      localStorage.setItem(
        "book-cart",
        JSON.stringify({
          ...state,
          books: filteredBooks,
        })
      );
      return {
        ...state,
        books: filteredBooks,
      };
    default:
      return state;
  }
};

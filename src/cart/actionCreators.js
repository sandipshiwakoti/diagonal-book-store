import { ADD_BOOK, REMOVE_BOOK } from "./actionTypes";

export const addBookToCart = (payload) => {
  return { type: ADD_BOOK, payload };
};

export const removeBookFromCart = (payload) => {
  return { type: REMOVE_BOOK, payload };
};

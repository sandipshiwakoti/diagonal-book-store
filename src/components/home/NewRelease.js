import React from "react";
import useFetch from "../../customHooks/useFetch";
import Book from "./Book";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../../pages/Error";
import { useGlobalContext } from "../../contexts/AppContext";

const NewRelease = () => {
  const { API_ENDPOINT } = useGlobalContext();
  const { loading, error, data } = useFetch(`${API_ENDPOINT}/new`);

  if (error) {
    return <Error />;
  }

  return (
    <section className="container-center p-[1.5rem]">
      <h1 className="container-title">New released books</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="grid gap-[1.5rem] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.books &&
            data.books
              .filter((book) => book.subtitle.length > 0)
              .map((book) => <Book key={book.isbn13} {...book} />)}
        </div>
      )}
    </section>
  );
};

export default NewRelease;

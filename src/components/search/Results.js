import { useParams } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import LoadingSpinner from "../LoadingSpinner";
import SearchBook from "./SearchBook";
import { Pagination } from "@mui/material";
import Error from "../../pages/Error";
import { useGlobalContext } from "../../contexts/AppContext";
import NoResultsImage from "../../images/no-results.png";
import useTitle from "../../customHooks/useTitle";

const Results = () => {
  const { API_ENDPOINT } = useGlobalContext();
  const { query } = useParams();
  useTitle(`Search Results for "${query}" | Diagonal Book Store`);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_ENDPOINT}/search/${query}?page=${page}`
      );
      if (response.status !== 404) {
        const data = await response.json();
        setData(data);
        setError(false);
      } else {
        setError(true);
      }
      setTimeout(() => {
        setLoading(false);
      }, 200);
    } catch (err) {
      if (process.env.NODE_ENV === "production") {
        console.clear();
      }
      setLoading(false);
      setError(true);
    }
  }, [API_ENDPOINT, page, query]);

  useEffect(() => {
    fetchData();
  }, [query, page, fetchData]);

  if (error) {
    return <Error />;
  }

  const handlePageChange = (e, value) => {
    setPage(value);
  };

  return (
    <section className="container-center p-[1.5rem]">
      <h1 className="container-title">"{query}" search results</h1>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {data.total > 0 ? (
            <>
              <h2 className="mb-[1rem]">
                Found{" "}
                <span className="font-bold text-gray-800 mr-[.3rem]">
                  {data.total}
                </span>
                Books
              </h2>
              <div>
                {data.books.map((book) => (
                  <SearchBook key={book.isbn13} {...book} />
                ))}
                <Pagination
                  count={Math.ceil(Number(data.total / 10))}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  shape="rounded"
                />
              </div>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center p-[2rem] gap-[1rem]">
              <img src={NoResultsImage} alt="not found" className="h-[12rem]" />
              <h1 className="text-center font-extrabold text-4xl text-slate-900">
                No results found!
              </h1>
              <h2 className="font-semibold text-xl text-slate-800 text-center">
                Please make sure your keywords are spelled correctly!
              </h2>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Results;

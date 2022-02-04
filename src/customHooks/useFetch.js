import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
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
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return { loading, error, data };
};

export default useFetch;

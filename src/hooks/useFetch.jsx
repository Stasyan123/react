import { useCallback, useEffect, useState } from "react";

const useFetch = (urlParam, options) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError("");

    const url = new URL(process.env.REACT_APP_API_URL + urlParam);

    for (let prop in options) {
      url.searchParams.append(prop, options[prop]);
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [urlParam, options]);

  useEffect(() => {
    fetchData();

    return () => {
      setIsLoading(false);
      setError(null);
    };
  }, [fetchData]);

  return {
    data: data,
    error: error,
    isLoading: isLoading,
    refetch: fetchData,
  };
};

export default useFetch;

import React, { useState } from "react";

const useApi = (intialState = "") => {
  const [data, setData] = useState(intialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = async (url) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(url);
      const data = await res.json();
      setData(data);
      console.log(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, get };
};

export default useApi;

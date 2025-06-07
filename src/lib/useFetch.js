
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url, token = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios(url, token);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Une erreur est survenue');
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token,url]);

  return { data, loading, error };
};

export default useFetch;

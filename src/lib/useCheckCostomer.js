// src/lib/useCheckCustomer.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCheckCustomer = (customerId) => {
  const [customer, setCustomer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [exists, setExists] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!customerId) return;

    const checkCustomer = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/customers/${customerId}`);
        if (response.data) {
          setCustomer(response.data);
          setExists(true);
        } else {
          setExists(false);
        }
      } catch (err) {
        setError(err);
        setExists(false);
      } finally {
        setLoading(false);
      }
    };

    checkCustomer();
  }, [customerId]);

  return { customer, exists, loading, error };
};

export default useCheckCustomer;

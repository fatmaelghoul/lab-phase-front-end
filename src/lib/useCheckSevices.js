// src/hooks/useCheckHomerepairService.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useCheckHomerepairService = (serviceId) => {
  const [service, setService] = useState(null);
  const [exists, setExists] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!serviceId) return;

    const fetchService = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`/api/services/${serviceId}`);
        if (response.data) {
          setService(response.data);
          setExists(true);
        } else {
          setService(null);
          setExists(false);
        }
      } catch (err) {
        setError(err.message || 'Erreur serveur');
        setService(null);
        setExists(false);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  return { service, exists, loading, error };
};

export default useCheckHomerepairService;

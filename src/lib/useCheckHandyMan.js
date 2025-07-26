// src/components/CheckHandyman.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckHandyman = ({ handymanId }) => {
  const [handyman, setHandyman] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (!handymanId) return;

    const fetchHandyman = async () => {
      try {
        const response = await axios.get(`/api/handymen/${handymanId}`);
        if (response.data) {
          setHandyman(response.data);
          setExists(true);
        } else {
          setExists(false);
        }
      } catch (err) {
        setError(err.message || 'Erreur serveur');
        setExists(false);
      } finally {
        setLoading(false);
      }
    };

    fetchHandyman();
  }, [handymanId]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!exists) return <p>Aucun prestataire trouvé.</p>;

  return (
    <div>
      <h2>{handyman.name}</h2>
      <p>Spécialité : {handyman.specialty}</p>
      <p>Note : {handyman.rating} ⭐</p>
      <p>Email : {handyman.email}</p>
    </div>
  );
};

export default CheckHandyman;

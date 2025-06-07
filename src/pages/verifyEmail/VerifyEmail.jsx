import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';


const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const role = searchParams.get('role');
  const [message, setMessage] = useState('Vérification en cours...');
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.post(
          `http://localhost:5000/api/${role}/verify-email`,
          { token }
        );
        setMessage(response.data.message || 'Email vérifié avec succès !');
        setSuccess(true);
      } catch (error) {
        setMessage(
          error.response?.data?.message || "Échec de la vérification de l'email."
        );
        setSuccess(false);
      }
    };

    if (token && role) {
      verifyEmail();
    } else {
      setMessage("Lien de vérification invalide.");
      setSuccess(false);
    }
  }, [token, role]);

  return (
    <div className="verify-container">
      <div className="verify-card">
        {success === null ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className={`icon ${success ? 'success' : 'error'}`}>
              {success ? '✓' : '✖'}
            </div>
            <h2>{success ? 'Email Vérifié !' : 'Échec de Vérification'}</h2>
            <p>{message}</p>
            <button onClick={() => navigate('/login')}>
              Retour à la connexion
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;


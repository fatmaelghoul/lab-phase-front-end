import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import "./VerifyEmail.css";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token"); // ✅ récupère le token depuis l'URL
  const [message, setMessage] = useState("Vérification en cours...");
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const baseUserUrl = "http://localhost:5000/api/userControllers";

  useEffect(() => {
    if (token) {
      axios
        .get(`${baseUserUrl}/verifyEmail/verifyEmail?token=${token}`) // ✅ URL corrigée
        .then((res) => {
          console.log(res);
          setSuccess(true);
          setMessage("Email vérifié avec succès !");
          setTimeout(() => {
            navigate("/login");
          }, 2500);
        })
        .catch((err) => {
          setSuccess(false);
          setMessage(
            err.response?.data?.message ||
              "Erreur réseau ou lien expiré. Veuillez demander un nouveau lien."
          );
        })
        .finally(() => setLoading(false));
    } else {
      setSuccess(false);
      setMessage("Lien de vérification invalide.");
      setLoading(false);
    }
  }, [token, navigate]);

  return (
    <div className="verify-container">
      <div className="verify-card">
        {loading ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className={`icon ${success ? "success" : "error"}`}>
              {success ? (
                <svg width="48" height="48" fill="#22c55e" viewBox="0 0 24 24">
                  <path d="M20.285 6.709l-11.285 11.292-5.285-5.292 1.414-1.414 3.871 3.878 9.871-9.878z" />
                </svg>
              ) : (
                <svg width="48" height="48" fill="#ef4444" viewBox="0 0 24 24">
                  <path d="M18.364 5.636l-1.414-1.414-4.95 4.95-4.95-4.95-1.414 1.414 4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95z" />
                </svg>
              )}
            </div>
            <h2>{success ? "Email Vérifié !" : "Échec de Vérification"}</h2>
            <p>{message}</p>
            <button onClick={() => navigate("/login")}>
              Retour à la connexion
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;

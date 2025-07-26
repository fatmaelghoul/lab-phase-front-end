import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Experts.css";

function HandyManList() {
  const [handyMen, setHandyMen] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHandyMen = async () => {
      try {
        const response = await axios.get("http://localhost:5173/api/experts");
        console.log("API Response:", response.data);
        setHandyMen(response.data.handyMan); // ← utilise la bonne clé ici
      } catch (error) {
        setError("Une erreur est survenue lors du chargement des experts.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchHandyMen();
  }, []);

  if (loading) return <div>Chargement des experts...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="experts-container">
      <h1>Nos Artisans</h1>
      <div className="experts-list">
        {Array.isArray(handyMen) && handyMen.length > 0 ? (
          handyMen.map((handy) => (
            <div key={handy.id} className="expert-card">
              <img
                src={handy.image || "/default-avatar.png"}
                alt={handy.name}
                className="expert-photo"
              />
              <h2 className="expert-name">{handy.name}</h2>
              <p className="expert-description">{handy.description}</p>
              {handy.email && (
                <a
                  href={`mailto:${handy.email}`}
                  className="contact-btn"
                  title={`Contacter ${handy.name}`}
                >
                  Contacter
                </a>
              )}
            </div>
          ))
        ) : (
          <p>Aucun expert disponible.</p>
        )}
      </div>
    </div>
  );
}

export default HandyManList;


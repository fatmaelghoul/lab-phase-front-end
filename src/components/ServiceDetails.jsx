import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import homeRepairServicesData from "../lib/homeRepairServicesData";
import "./serviceDetails.css";

export default function ServiceDetails() {
  const { key } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const found = homeRepairServicesData.find((s) => s.key === key);
    setTimeout(() => {
      setService(found);
      setLoading(false);
    }, 600); // Simule le chargement
  }, [key]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader" />
        <p>Chargement du service...</p>
      </div>
    );
  }

  if (!service) return <div className="error-message">Service introuvable.</div>;

  const { expert } = service;

  return (
    <div className="service-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ← Retour
      </button>

      <img src={service.image} alt={service.title} className="service-image" />
      <h2 className="service-title">{service.title}</h2>
      <p className="service-description">{service.description}</p>

      {expert && (
        <div className="expert-card">
          <h3>Expert assigné</h3>
          <p><strong>Nom :</strong> {expert.name}</p>
          <p><strong>Spécialité :</strong> {expert.specialty || "Non spécifiée"}</p>
          <p><strong>Email :</strong> <a href={`mailto:${expert.email}`}>{expert.email}</a></p>
          <p><strong>Téléphone :</strong> {expert.phone}</p>
          {expert.price && <p><strong>Prix moyen :</strong> {expert.price}</p>}

          <a href={`mailto:${expert.email}`} className="contact-button">
            Contacter l'expert
          </a>
        </div>
      )}

      <div className="global-contact">
        <p>Besoin d’aide supplémentaire ?</p>
        <Link to="/Contact" className="global-contact-link">
          Contactez notre équipe
        </Link>
      </div>
    </div>
  );
}

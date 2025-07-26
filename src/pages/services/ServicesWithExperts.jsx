import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import homeRepairServicesData from "../../lib/homeRepairServicesData";
import "./services.css";

export default function ServiceWithExpert() {
  const { key } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const found = homeRepairServicesData.find((s) => s.key === key);
    setTimeout(() => {
      if (found) {
        setService(found);
        setError("");
      } else {
        setError("Service introuvable.");
      }
      setLoading(false);
    }, 800);
  }, [key]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <p>Chargement du service...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="service-expert-container">
      <button onClick={() => navigate(-1)} className="back-button">← Retour</button>

      <img src={service.image} alt={service.title} className="service-img" />
      <h2 className="service-title">{service.title}</h2>
      <p className="service-description">{service.description}</p>

      <div className="expert-card">
        <h3>Expert assigné</h3>
        <p><strong>Nom :</strong> {service.expert?.name || "N/A"}</p>
        <p><strong>Email :</strong> {service.expert?.email || "N/A"}</p>
        <p><strong>Expérience :</strong> {service.expert?.experience || "Non spécifiée"}</p>
      </div>
    </div>
  );
}


import React from "react";
import { useAuthHandyman } from "../../context/AuthHandymanContext";
import ProfileLayout from "../../layouts/ProfileLayout"; 
import "./Dashboard.css"; // Assurez-vous d'avoir ce fichier CSS pour le style


const HandyManDashboard = () => {
  const { handyman } = useAuthHandyman();

  return (
    <ProfileLayout role="handyman" auth={{ token: handyman ? "ok" : null }}>
      <h1 style={{ fontSize: "24px", marginBottom: "1rem" }}>
        Bonjour, {handyman?.name || "Prestataire"}
      </h1>

      


    </ProfileLayout>
  );
};

export default HandyManDashboard;

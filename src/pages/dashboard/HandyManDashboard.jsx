import React from "react";
import { useAuthHandyman } from "../../context/AuthHandymanContext";
import ProfileLayout from "../../layouts/ProfileLayout"; 


const HandyManDashboard = () => {
  const { handyman } = useAuthHandyman();

  return (
    <ProfileLayout role="handyman" auth={{ token: handyman ? "ok" : null }}>
      <h1 style={{ fontSize: "24px", marginBottom: "1rem" }}>
        Bonjour, {handyman?.name || "Prestataire"}
      </h1>

      <section
        style={{
          backgroundColor: "#fff",
          padding: "1.5rem",
          borderRadius: "8px",
          boxShadow: "0 0 8px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ fontSize: "18px", marginBottom: "1rem" }}>
          Informations du profil
        </h2>
        <ul style={{ lineHeight: "1.8" }}>
          <li>
            <strong>Nom :</strong> {handyman?.name}
          </li>
          <li>
            <strong>Email :</strong> {handyman?.email}
          </li>
          <li>
            <strong>Téléphone :</strong> {handyman?.phone}
          </li>
          <li>
            <strong>Spécialité :</strong> {handyman?.specialty}
          </li>
        </ul>
      </section>

      {/* Ajoute plus de sections si besoin */}
      {/* <section>Mes services</section> */}
      {/* <section>Demandes reçues</section> */}
    </ProfileLayout>
  );
};

export default HandyManDashboard;

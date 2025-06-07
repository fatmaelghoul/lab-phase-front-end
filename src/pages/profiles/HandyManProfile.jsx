import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import { useAuthHandyman } from "../../context/AuthHandymanContext";

const HandyManProfile = () => {
  const { handyman } = useAuthHandyman();

  return (
    <ProfileLayout role="handyman" auth={{ token: handyman ? 'ok' : null }}>
      <h1 style={{ fontSize: '24px', marginBottom: '1rem' }}>
        Bonjour, {handyman?.name || 'Prestataire'}
      </h1>

      <section style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '1rem' }}>Mes informations</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Nom :</strong> {handyman?.name}</li>
          <li><strong>Email :</strong> {handyman?.email}</li>
          <li><strong>Téléphone :</strong> {handyman?.phone}</li>
          <li><strong>Spécialité :</strong> {handyman?.specialty}</li>
            <li><strong>Prix :</strong> {handyman?.price}</li>
          {/* Ajoute d'autres champs si disponibles */}
        </ul>
      </section>

      {/* Ajoute ici une section "Mes prestations" ou "Mes demandes" si besoin */}
    </ProfileLayout>
  );
};

export default HandyManProfile;

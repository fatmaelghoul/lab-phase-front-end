import React from 'react';
import ProfileLayout from "../../layouts/ProfileLayout"; 
import { useCustomerAuth } from '../../context/AuthCustomerContext';

const CustomerProfile = () => {
  const { customer } = useCustomerAuth();

  return (
    <ProfileLayout role="customer" auth={{ token: customer ? 'ok' : null }}>
      <h1 style={{ fontSize: '24px', marginBottom: '1rem' }}>
        Bonjour, {customer?.name || 'Client'}
      </h1>

      <section style={{
        backgroundColor: '#fff',
        padding: '1.5rem',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(0,0,0,0.1)',
      }}>
        <h2 style={{ fontSize: '18px', marginBottom: '1rem' }}>Mes informations</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li><strong>Nom :</strong> {customer?.name}</li>
          <li><strong>Email :</strong> {customer?.email}</li>
          <li><strong>Téléphone :</strong> {customer?.phone}</li>
          {/* Ajoute d'autres infos si disponibles */}
        </ul>
      </section>

      {/* Tu peux ajouter ici une section "Mes réservations" ou autre */}
    </ProfileLayout>
  );
};

export default CustomerProfile;

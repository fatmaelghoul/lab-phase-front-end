import React from 'react';
import ProfileLayout from "../../layouts/ProfileLayout"; 
import { useCustomerAuth } from '../../context/AuthCustomerContext';
 import"./Profile.css"  // Assurez-vous d'avoir ce fichier CSS pour le style

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
          <li><strong>Adresse :</strong> {customer?.address}</li>
          <li><strong>Ville :</strong> {customer?.city}</li>
          <li><strong>Code Postal :</strong> {customer?.postalCode}</li>
          <li><strong>Pays :</strong> {customer?.country}</li>
          <li><strong>Date de création :</strong> {customer?.createdAt ? new Date(customer.createdAt).toLocaleDateString() : 'Inconnu'}</li>
          <li><strong>Date de mise à jour :</strong> {customer?.updatedAt ? new Date(customer.updatedAt).toLocaleDateString() : 'Inconnu'}</li>
          <li><strong>Identifiant :</strong> {customer?._id}</li>
          <li><strong>Photo de profil :</strong> {customer?.profilePicture ? <img src={customer.profilePicture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> : 'Aucune photo'}</li>
          <li><strong>Évaluations :</strong> {customer?.reviews ? customer.reviews.join(', ') : 'Aucune évaluation'}</li>
          <li><strong>Statut :</strong> {customer?.status || 'Actif'}</li>
          <li><strong>Langues parlées :</strong> {customer?.languages ? customer.languages.join(', ') : 'Aucune langue spécifiée'}</li>
          <li><strong>Notes :</strong> {customer?.notes ? customer.notes : 'Aucune note'}</li>
          <li><strong>Références :</strong> {customer?.references ? customer.references.join(', ') : 'Aucune référence'}</li>
          <li><strong>Assurance :</strong> {customer?.insurance ? 'Assuré' : 'Non assuré'}</li>
          <li><strong>Vérification :</strong> {customer?.verification ? 'Vérifié' : 'Non vérifié'}</li>
        </ul>
      </section>
      {/* Tu peux ajouter ici une section "Mes réservations" ou autre */}
      
      <section>
        <h2 style={{ fontSize: '18px', marginTop: '1rem' }}>Mes réservations</h2>
        <p>Liste des réservations à venir ou passées.</p>
        {/* Tu peux ajouter une liste ou un tableau pour afficher les réservations */}
        <p>Pas de réservations à afficher pour le moment.</p>
      </section>
    </ProfileLayout>
  );
};

export default CustomerProfile;

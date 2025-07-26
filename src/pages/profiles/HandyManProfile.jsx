import React from 'react';
import ProfileLayout from '../../layouts/ProfileLayout';
import { useAuthHandyman } from "../../context/AuthHandymanContext";
import "./Profile.css"; // Assurez-vous d'avoir ce fichier CSS pour le style

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
          <li><strong>Téléphone :</strong> {handyman?.phonenumber}</li>
          <li><strong>Spécialité :</strong> {handyman?.specialty}</li>
           <li><strong>Skills :</strong> {handyman?.skills}</li>
          <li><strong>Prix :</strong> {handyman?.price}</li>
          <li><strong>Disponibilité :</strong> {handyman?.availability ? 'Disponible' : 'Indisponible'}</li>
          <li><strong>Bio :</strong> {handyman?.bio}</li>
          <li><strong>Adresse :</strong> {handyman?.address}</li>
          <li><strong>Ville :</strong> {handyman?.city}</li>
          <li><strong>Code Postal :</strong> {handyman?.postalCode}</li>
          <li><strong>Pays :</strong> {handyman?.country}</li>
          <li><strong>Photo de profil :</strong> {handyman?.profilePicture ? <img src={handyman.profilePicture} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> : 'Aucune photo'}</li>
          <li><strong>Évaluations :</strong> {handyman?.reviews ? handyman.reviews.join(', ') : 'Aucune évaluation'}</li>
          <li><strong>Statut :</strong> {handyman?.status || 'Actif'}</li>
          <li><strong>Date de création :</strong> {handyman?.createdAt ? new Date(handyman.createdAt).toLocaleDateString() : 'Inconnu'}</li>
          <li><strong>Date de mise à jour :</strong> {handyman?.updatedAt ? new Date(handyman.updatedAt).toLocaleDateString() : 'Inconnu'}</li>
          <li><strong>Identifiant :</strong> {handyman?._id}</li>
          <li><strong>Langues parlées :</strong> {handyman?.languages ? handyman.languages.join(', ') : 'Aucune langue spécifiée'}</li>
          <li><strong>Certifications :</strong> {handyman?.certifications ? handyman.certifications.join(', ') : 'Aucune certification'}</li>
          <li><strong>Portfolio :</strong> {handyman?.portfolio ? handyman.portfolio.join(', ') : 'Aucun portfolio'}</li>
          <li><strong>Tarification :</strong> {handyman?.pricing ? handyman.pricing : 'Aucune tarification spécifiée'}</li>
          <li><strong>Disponibilité horaire :</strong> {handyman?.availabilityHours ? handyman.availabilityHours : 'Aucune disponibilité horaire'}</li>
          <li><strong>Zone de service :</strong> {handyman?.serviceArea ? handyman.serviceArea : 'Aucune zone de service spécifiée'}</li>
          <li><strong>Assurance :</strong> {handyman?.insurance ? 'Assuré' : 'Non assuré'}</li>
          <li><strong>Vérification :</strong> {handyman?.verification ? 'Vérifié' : 'Non vérifié'}</li>
          <li><strong>Notes :</strong> {handyman?.notes ? handyman.notes : 'Aucune note'}</li>
          <li><strong>Références :</strong> {handyman?.references ? handyman.references.join(', ') : 'Aucune référence'}</li>
          <li><strong>Tarif horaire :</strong> {handyman?.hourlyRate ? handyman.hourlyRate : 'Aucun tarif horaire'}</li>
          <li><strong>Expérience :</strong> {handyman?.experience ? handyman.experience : 'Aucune expérience'}</li>
          <li><strong>Projets réalisés :</strong> {handyman?.completedProjects ? handyman.completedProjects.join(', ') : 'Aucun projet réalisé'}</li>
          <li><strong>Disponibilité actuelle :</strong> {handyman?.currentAvailability ? handyman.currentAvailability : 'Aucune disponibilité actuelle'}</li>
          <li><strong>Langues :</strong> {handyman?.languages ? handyman.languages.join(', ') : 'Aucune langue spécifiée'}</li>
          <li><strong>Services offerts :</strong> {handyman?.servicesOffered ? handyman.servicesOffered.join(', ') : 'Aucun service offert'}</li>
          {/* Ajoute d'autres champs si disponibles */}
        </ul>
      </section>
      {/* Ajoute ici une section "Mes prestations" ou "Mes demandes" si besoin */}
      <section>
        <h2 style={{ fontSize: '18px', marginTop: '1rem' }}>Mes prestations</h2>
        <p>Liste des prestations à venir ou en cours.</p>
        {/* Tu peux ajouter une liste ou un tableau pour afficher les prestations */}
        <p>Pas de prestations à afficher pour le moment.</p>

      </section>

    </ProfileLayout>
  );
};

export default HandyManProfile;

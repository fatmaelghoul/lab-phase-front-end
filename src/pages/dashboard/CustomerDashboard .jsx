import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";
import { useAuthCustomer } from '../../context/AuthCustomerContext'; 
import "./Dashboard.css"; // Assurez-vous d'avoir ce fichier CSS pour le style
import { Link } from "react-router-dom";
const CustomerDashboard = () => {
  const auth = useAuthCustomer();

  return (
    <ProfileLayout role="customer" auth={auth}>
      <h2>Bienvenue {auth.customer?.name}</h2>
      <p>
        <Link to="/customer/profile">
          Voir mon profil
        </Link>
      </p>
      <p>
        <Link to="/customer/bookings">
          Mes réservations
        </Link>
      </p>
      <p>
        <Link to="/customer/messages">
          Mes messages
        </Link>
      </p>
      
        <Link to="/customer/reviews">
          Mes avis
        </Link>
      <p>
        <Link to="/settings">
          Paramètres du compte
        </Link>
        </p>
      <p>
          <Link to="/customer/help">
            Aide et support
          </Link>
      </p>
      <p>
        <Link to="/customer/logout">
          Se déconnecter
        </Link>
      </p>
    </ProfileLayout>
  );
};

export default CustomerDashboard;

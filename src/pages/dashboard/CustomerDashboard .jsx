import React from "react";
import ProfileLayout from "../../layouts/ProfileLayout";
import { useAuthCustomer } from '../../context/AuthCustomerContext'; 

const CustomerDashboard = () => {
  const auth = useAuthCustomer();

  return (
    <ProfileLayout role="customer" auth={auth}>
      <h2>Bienvenue {auth.customer?.name}</h2>
      <p>Vous pouvez gérer vos demandes ici.</p>
    </ProfileLayout>
  );
};

export default CustomerDashboard;

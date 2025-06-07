// src/components/CustomerList.jsx
import React from 'react';
import useFetch from '../hooks/useFetch'; // adapte le chemin selon ton projet

const CustomerList = () => {
  const { data: customers, loading, error, refetch } = useFetch('/api/customers');

  if (loading) return <p>Chargement des clients...</p>;
  if (error) return <p>Erreur : {error}</p>;
  if (!customers || customers.length === 0) return <p>Aucun client trouvé.</p>;

  return (
    <div>
      <h2>Liste des clients</h2>
      <button onClick={refetch} className="refresh-button">🔄 Rafraîchir</button>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>
            <strong>{customer.name}</strong> – {customer.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;

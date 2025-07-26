import React, { useState } from 'react';
import { useCustomerAuth } from '../context/AuthCustomerContext';
import { useAuthHandyman } from '../context/AuthHandymanContext';

const ProfileSetting = () => {
  const { customer, setCustomer } = useCustomerAuth();
  const { handyman, setHandyman } = useAuthHandyman();

  const user = customer || handyman;
  const setUser = customer ? setCustomer : setHandyman;
  const role = customer ? 'customer' : handyman ? 'handyman' : null;

  const [form, setForm] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  if (!user) {
    return <p style={{ color: 'red' }}>Vous devez être connecté pour accéder à vos paramètres.</p>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    try {
      const res = await fetch(`/api/${role}s/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Erreur lors de la mise à jour');

      const updatedUser = await res.json();
      setUser(updatedUser);
      setSuccess('Profil mis à jour avec succès.');
    } catch (err) {
      setError(err.message || 'Erreur inattendue.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Modifier mon profil</h2>

      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Nom :
          <input type="text" name="name" value={form.name} onChange={handleChange} style={styles.input} required />
        </label>

        <label style={styles.label}>Email :
          <input type="email" name="email" value={form.email} onChange={handleChange} style={styles.input} required />
        </label>

        <label style={styles.label}>Téléphone :
          <input type="text" name="phone" value={form.phone} onChange={handleChange} style={styles.input} />
        </label>

        <button type="submit" style={styles.button}>Mettre à jour</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '600px',
    margin: '2rem auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  title: {
    fontSize: '22px',
    marginBottom: '1.5rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    marginTop: '0.25rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  button: {
    marginTop: '1rem',
    padding: '0.75rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3498db',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  }
};

export default ProfileSetting;


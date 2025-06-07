
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await axios.post(`http://localhost:5000/api/${role}/login`, {
        email,
        password,
      });

      const { token, user } = response.data;
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      localStorage.setItem('user', JSON.stringify(user));

      // Redirection selon le rôle
      switch (role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'handyman':
          navigate('/handyman/profile');
          break;
        default:
          navigate('/customer/profile');
          break;
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Erreur lors de la connexion.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Connexion</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Client</option>
          <option value="handyman">Prestataire</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
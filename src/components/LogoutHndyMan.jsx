import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHandymanAuth } from '../context/AuthHandymanContext';

const LogoutHandyMan = () => {
  const { logout } = useHandymanAuth(); // 🔐 Récupère la fonction logout du contexte
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // Supprime le token + infos prestataire
    navigate('/login-handyman'); // Redirige vers la page de connexion
  }, [logout, navigate]);

  return <p>Déconnexion du prestataire en cours...</p>;
};

export default LogoutHandyMan;

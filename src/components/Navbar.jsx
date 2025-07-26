import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://images.pexels.com/photos/5041030/pexels-photo-5041030.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Logo"
        />
        <span>Home Repair Services</span>
      </div>

      <ul className="navbar-links">
        <li><Link to="/Home">Accueil</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/Experts">Nos Experts</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/AboutUs">À propos</Link></li>
        <li><Link to="/Settings">Paramètres</Link></li>
       
        

        {!token ? (
          <>
            <li><Link to="/register">Inscription</Link></li>
            <li><Link to="/login">Connexion</Link></li>
          </>
        ) : (
          <>
            {role === "customer" && (
              <li><Link to="/customer/profile">Mon Profil</Link></li>
            )}
            {role === "handyman" && (
              <li><Link to="/handyman/profile">Prestataire</Link></li>
            )}
            {role === "admin" && (
              <li><Link to="/admin/dashboard">Admin</Link></li>
            )}
            <li><button onClick={handleLogout} className="logout-button">Déconnexion</button></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;


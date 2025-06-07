import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Assure-toi d'ajouter ce fichier aussi

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://images.pexels.com/photos/5041030/pexels-photo-5041030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Logo"
        />
        <span>Home Repair Services</span>
      </div>

      <ul className="navbar-links">
        <li>
          <Link to="/Home">Accueil</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <Link to="/register">Inscription</Link>
        </li>
        <li>
          <Link to="/Experts">Nos Experts</Link>
        </li>
         <li>
          <Link to="/Contact"> Contactez-nous</Link>
        </li>
        <li>
          <Link to="/AboutUs">À propos de nous</Link>
        </li>
        
        <li>
          <Link to="/Settings">Setting</Link>
        </li>
        <li>
          {" "}
          <Link to="/Landing">Landing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

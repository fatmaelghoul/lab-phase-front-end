import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LiaEyeSolid } from "react-icons/lia";
import { FaEyeSlash } from "react-icons/fa";
import "./style.css";
import axios from "axios";

const baseUrl = "http://localhost:5000";

function Register() {
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({ role: "customer" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      alert("Les mots de passe ne correspondent pas !");
      return;
    }

    const endpoint =
      registerData.role === "customer"
        ? `${baseUrl}/api/Customer/register`
        : `${baseUrl}/api/Handyman/register`;

    try {
      setLoading(true); // Affiche le bouton de chargement

      const res = await axios.post(endpoint, registerData);
      if (res.data.success) {
        alert("Inscription réussie !");

        // Réinitialisation du formulaire
        setRegisterData({ role: "customer" });
        setShowPassword(false);
        setShowConfirmPassword(false);

        // Redirection douce après 1 seconde
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else {
        alert(res.data.message || "Échec de l'inscription");
      }
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Erreur lors de l'inscription");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Inscription</h1>
      <p>Créez votre compte et profitez de nos services.</p>

      <form className="register-form">
        <select
          name="role"
          onChange={handleChange}
          value={registerData.role}
          className="input-field"
        >
          <option value="customer">Client</option>
          <option value="handyman">Prestataire</option>
        </select>

        <input
          type="text"
          name="fullName"
          placeholder="Nom complet"
          required
          className="input-field"
          onChange={handleChange}
          value={registerData.fullName || ""}
        />
        <input
          type="date"
          name="birthDate"
          placeholder="Date de naissance"
          required
          className="input-field"
          onChange={handleChange}
          value={registerData.birthDate || ""}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="input-field"
          onChange={handleChange}
          value={registerData.email || ""}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Mot de passe"
            required
            className="input-field"
            onChange={handleChange}
            value={registerData.password || ""}
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
            role="button"
          >
            {showPassword ? <FaEyeSlash /> : <LiaEyeSolid />}
          </span>
        </div>

        <div className="password-box">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirmer le mot de passe"
            required
            className="input-field"
            onChange={handleChange}
            value={registerData.confirmPassword || ""}
          />
          <span
            className="eye-icon"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            role="button"
          >
            {showConfirmPassword ? <FaEyeSlash /> : <LiaEyeSolid />}
          </span>
        </div>

        <input
          type="text"
          name="phoneNumber"
          placeholder="Téléphone"
          required
          className="input-field"
          onChange={handleChange}
          value={registerData.phoneNumber || ""}
        />
        <input
          type="text"
          name="address"
          placeholder="Adresse"
          required
          className="input-field"
          onChange={handleChange}
          value={registerData.address || ""}
        />

        {registerData.role === "handyman" && (
          <>
            <input
              type="text"
              name="specialty"
              placeholder="Spécialité"
              className="input-field"
              onChange={handleChange}
              value={registerData.specialty || ""}
            />
            <input
              type="number"
              name="price"
              placeholder="Prix moyen"
              className="input-field price"
              onChange={handleChange}
              value={registerData.price || ""}
            />
          </>
        )}

        <button
          type="submit"
          onClick={handleClick}
          className="btn-register"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Chargement...
            </>
          ) : (
            "S'inscrire"
          )}
        </button>
      </form>
    </div>
  );
}

export default Register;

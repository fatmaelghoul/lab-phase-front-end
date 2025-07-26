import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useCustomerAuth } from "../../context/AuthCustomerContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("customer");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const customer = useCustomerAuth();

  const query = new URLSearchParams(window.location.search);
  if (query.get("verified") === "true") {
    alert(
      "Votre email a été vérifié avec succès. Vous pouvez maintenant vous connecter."
    );
  } else if (query.get("verified") === "already") {
    alert("Votre email est déjà vérifié.");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/userControllers/login`,
        {
          email,
          password,
        }
      );

      const { token, user } = response.data;
      customer.login(token, user); // Utilise le hook de contexte pour stocker les infos utilisateur
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("user", JSON.stringify(user));
      console.log("role", role);
      // Redirection selon le rôle
      switch (role) {
        case "admin":
          return navigate("/admin/dashboard");

        case "handyman":
          navigate("/handyman/profile");
          break;
        default:
          console.log("customer");
          return navigate("/customer/profile");
        // break;
      }
    } catch (err) {
      setError(err.response?.data?.message || "Erreur lors de la connexion.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Connexion </h2>

        <label>Rôle</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="customer">Client</option>
          <option value="handyman">Prestataire</option>
          <option value="admin">Admin</option>
        </select>

        <label>Email</label>
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Mot de passe</label>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="error">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Connexion..." : "Se connecter"}
        </button>
      </form>
    </div>
  );
};

export default Login;

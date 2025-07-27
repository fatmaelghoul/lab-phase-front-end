import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contactez-nous</h2>
        <p className="contact-subtitle">Une question ? Un projet ? Écrivez-nous !</p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn">Envoyer</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

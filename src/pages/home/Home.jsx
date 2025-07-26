import { Link } from "react-router-dom";
import { FaWhatsapp, FaRegEnvelope, FaComments } from "react-icons/fa";
import { motion } from "framer-motion";
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const services = [
    // lient pour une  Liste des services dynamique//

    "Plomberie",
    "Maçonnerie et revêtement de sol",
    "Électricité",
    "Peinture et décoration d’intérieur",
    "Menuiserie",
    "Jardinage",
    "Réparation Électroménager",
    "Installation de caméras de surveillance",
    "Climatisation et chauffagee",
  ];
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="home">
      <section className="home-header">
        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Services de Réparation à Domicile
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Des professionnels qualifiés pour vos besoins à la maison.
        </motion.p>

        <Link to="/contact" className="home-contact-button">
          Contactez-nous
        </Link>

        <motion.div
          className="home-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <img
            src="https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/120d44b9caa45b1bba3ba103/min.png"
            alt="Technicien"
          />
        </motion.div>
      </section>

      <section className="home-services">
        <Link to="/services" className="home-services-button">Nos Services</Link>
        <h2>Nos Services</h2>
        <p>
          Découvrez une gamme complète de services de réparation à domicile,
          adaptés à vos besoins. Que ce soit pour la plomberie, l'électricité,
          la menuiserie ou d'autres domaines, nos experts sont là pour vous
          aider. 
          <br />
          Cliquez sur un service pour en savoir plus.
        </p>
        {/* //lien vers les defferents services */}
        <motion.div
          className="home-services-image"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <img
            src="https://images.pexels.com/photos/5041030/pexels-photo-5041030.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Services"
          />
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`service-item ${
                selectedService === service ? "active" : ""
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p>{service}</p>
            </motion.div>
          ))}
        </div>
        {selectedService && (
          <motion.div
            className="service-selected"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Vous avez sélectionné : <strong>{selectedService}</strong>
          </motion.div>
        )}
      </section>

      <section className="home-testimonial">
        <h2>Ils nous font confiance</h2>
        <p>“Service rapide et professionnel !”</p>
      </section>

      <section className="home-contact">
        <h2>Contactez-nous</h2>
        <div className="contact-grid">
          {/* Email */}
          <div className="contact-card">
            <div className="icon yellow">
              <FaRegEnvelope />
            </div>
            <h3>Email</h3>
            <p>Réponse sous 10 jours ouvrables.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Email envoyé !");
              }}
            >
              <input type="email" placeholder="Votre email" required />
              <button type="submit">ENVOYER</button>
            </form>
          </div>
          {/* WhatsApp */}
          <div className="contact-card">
            <div className="icon green">
              <FaWhatsapp />
            </div>
            <h3>WhatsApp</h3>
            <p>Contact rapide et direct</p>
            <a
              href="https://wa.me/21698056985"
              target="_blank"
              rel="noreferrer"
            >
              <button className="whatsapp-button">+216 98056985</button>
            </a>
          </div>
          {/* Live Chat */}
          <div className="contact-card">
            <div className="icon blue">
              <FaComments />
            </div>
            <h3>Chat en direct</h3>
            <p>Parlez avec un expert en temps réel</p>
            <button onClick={() => alert("Fonctionnalité bientôt disponible")}>
              LIVE CHAT
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

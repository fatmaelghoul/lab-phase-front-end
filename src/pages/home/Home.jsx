import { Link } from "react-router-dom";
import { FaWhatsapp, FaRegEnvelope, FaComments } from "react-icons/fa";
import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const services = [
    "Plomberie",
    "Électricité",
    "Peinture",
    "Menuiserie",
    "Reparation des cuisine",
    "Climatisation",
  ];
  const [selectedService, setSelectedService] = useState(null);
  return (
    <div>
      {/* Header */}
      <header>
        <h1>Services de réparation à domicile</h1>
        <p>
          Trouvez des services de réparation à domicile exceptionnels, adaptés à
          vos besoins. Handy vous met en contact avec des professionnels
          qualifiés.
        </p>
        <Link to="/contact">Contactez-nous</Link>
        <div>
          <img
            src="https://images03.nicepagecdn.com/c461c07a441a5d220e8feb1a/120d44b9caa45b1bba3ba103/min.png"
            alt="Illustration d’un technicien en réparation"
          />
        </div>
      </header>

      {/* Nos Services */}
      <section id="services" className="py-12 bg-gray-100 text-center">
        <h2 className="text-2xl font-bold text-black"></h2>
         <Link to="/services">Nos Services</Link>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 px-4">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(service)}
              className={`bg-white shadow-md rounded-2xl p-4 text-center w-full transition duration-300 ${
                selectedService === service
                  ? "ring-4 ring-yellow-400"
                  : "hover:shadow-lg"
              }`}
              style={{ cursor: "pointer" }}
            >
              <p className="text-lg font-semibold text-gray-700">{service}</p>
            </button>
          ))}
        </div>

        {selectedService && (
          <div
            className="mt-8 p-6 max-w-xl mx-auto bg-yellow-100 rounded-xl border border rgb(255, 202, 1)"
            style={{ color: "#92400e" }}
          >
          
          </div>
        )}
      </section>

      {/* Témoignage */}
      <section className="testimonial">
        <h2>Ils nous font confiance</h2>
        <p>“Service rapide et professionnel !”</p>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Email */}
          <div className="contact-block">
            <div className="icon">
              <FaRegEnvelope />
            </div>
            <h3>Email</h3>
            <p>
              Envoyez-nous un email et nous vous répondrons sous 10 jours
              ouvrables.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Email envoyé !");
              }}
            >
              <input type="email" placeholder="Votre adresse email" required />
              <button type="submit">ENVOYER</button>
            </form>
          </div>

          {/* WhatsApp */}
          <div className="contact-block">
            <div className="icon" style={{ color: "#25D366" }}>
              <FaWhatsapp />
            </div>
            <h3>WhatsApp</h3>
            <p>Contactez-nous directement sur WhatsApp</p>
            <a
              href="https://wa.me/21698056985"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>+216 21698056985</button>
            </a>
          </div>

          {/* Live Chat */}
          <div className="contact-block">
            <div className="icon">
              <FaComments />
            </div>
            <h3>Chat en direct</h3>
            <p>Le moyen le plus rapide pour parler avec un expert</p>
            <button onClick={() => alert("Fonctionnalité bientôt disponible")}>
              LIVE CHAT
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

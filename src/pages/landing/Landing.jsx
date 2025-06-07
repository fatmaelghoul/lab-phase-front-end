
import React from 'react'

import { motion } from "framer-motion";
import "./Landing.css";

function Landing() {
  return (
    <section className="landing-section">
      <motion.div className="landing-background" />
        <h1 className="landing-title">Bienvenue</h1>
        <p className="landing-subtitle">Des services professionnels à portée de clic</p>
      <p className="landing-description">
  Plateforme tout-en-un pour trouver des experts du dépannage à domicile. Rapide, fiable, sécurisé.
</p>

      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />

      <motion.div
        className="landing-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.a
          href="/services"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="landing-button"
        >
          Découvrir nos services
        </motion.a>
      </motion.div>
    </section>
  );
}

export default Landing;

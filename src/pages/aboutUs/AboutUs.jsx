import { motion } from "framer-motion";
import "./AboutUs.css"; // fichier CSS externe

export default function AboutUs() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.h2
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="about-title"
        >
          À propos de nous
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="about-text"
        >
          Nous sommes une équipe de professionnels dédiée à simplifier vos réparations à domicile.
          Fiabilité, efficacité et qualité sont au cœur de notre engagement.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="about-text secondary"
        >
          Plomberie, électricité, climatisation, menuiserie — notre réseau d’experts intervient
          rapidement avec des solutions sur mesure.
        </motion.p>
      </div>
    </section>
  );
}

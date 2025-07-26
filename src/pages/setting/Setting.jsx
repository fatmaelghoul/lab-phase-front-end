import { motion } from "framer-motion";
import { FaUser, FaGlobe, FaMoon } from "react-icons/fa";
import "./Setting.css"; // attention au bon chemin relatif

function Setting() {
  return (
    <section className="settings-section">
      <motion.div
        className="settings-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="settings-title">Paramètres du compte</h2>

        <form className="settings-form">
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Nom d'utilisateur" />
          </div>

          <div className="input-group">
            <FaGlobe className="icon" />
            <select>
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="input-group toggle">
            <FaMoon className="icon" />
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
            <span>Mode sombre</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="save-button"
          >
            Enregistrer
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}

export default Setting;

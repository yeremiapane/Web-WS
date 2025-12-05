import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-section">
            <h3 className="footer-brand">ALLURE INDUSTRIES</h3>
            <p className="footer-tagline">
              Crafting spatial luxury with precision and excellence
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-links">
              <a href="mailto:mail@allureindustries.com" className="footer-link">
                <FaEnvelope /> mail@allureindustries.com
              </a>
              <a href="tel:+622145850530" className="footer-link">
                <FaPhone /> +62 214 585 0530
              </a>
              <div className="footer-link">
                <FaMapMarkerAlt /> Cibitung, Indonesia
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              <div className="footer-link-simple">Extrusions & Powder Coating</div>
              <div className="footer-link-simple">Unitized Curtain Wall</div>
              <div className="footer-link-simple">Fenestration</div>
              <div className="footer-link-simple">Metal Fabrication</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="footer-copyright">
            © {currentYear} Allure Industries. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

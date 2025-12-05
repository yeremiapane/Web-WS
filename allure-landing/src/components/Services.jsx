import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  FaCog, 
  FaBuilding, 
  FaDoorOpen, 
  FaTools 
} from 'react-icons/fa';
import './Services.css';

const servicesData = [
  {
    icon: FaCog,
    title: 'Extrusions & Powder Coating',
    description: 'Advanced aluminum extrusion and premium powder coating services for superior durability and exceptional finish quality.',
    color: '#0ea5e9'
  },
  {
    icon: FaBuilding,
    title: 'Unitized Curtain Wall',
    description: 'Pre-fabricated curtain wall systems engineered for architectural excellence and seamless installation.',
    color: '#06b6d4'
  },
  {
    icon: FaDoorOpen,
    title: 'Finishing Goods Fenestration',
    description: 'Premium doors and windows designed with precision craftsmanship and innovative engineering.',
    color: '#0284c7'
  },
  {
    icon: FaTools,
    title: 'Metal Fabrication',
    description: 'Custom metal fabrication solutions tailored to your architectural and structural requirements.',
    color: '#0891b2'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-badge">
            <span>Our Expertise</span>
          </div>
          <h2 className="services-title">Specialized Solutions</h2>
          <p className="services-subtitle">
            Comprehensive architectural fenestration services powered by innovation and precision
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="service-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="service-icon" style={{ color: service.color }}>
                <service.icon />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-line" style={{ background: service.color }}></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

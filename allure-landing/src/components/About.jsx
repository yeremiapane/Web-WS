import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { HiLightningBolt, HiUsers, HiCube } from 'react-icons/hi';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    'Dedicated team of engineers and designers',
    'Collaboration with world-renowned architects',
    'Custom-made solutions for every project',
    'Minimal interruption to construction continuity'
  ];

  const stats = [
    { icon: HiLightningBolt, value: '15+', label: 'Years Experience' },
    { icon: HiUsers, value: '100+', label: 'Projects Completed' },
    { icon: HiCube, value: '15+', label: 'Expert Engineers' }
  ];

  return (
    <section className="about" ref={ref}>
      <div className="about-container">
        <div className="about-layout">
          <motion.div
            className="about-left"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-badge">
              <span>About Us</span>
            </div>
            <h2 className="about-title">Allure Industries</h2>
            <div className="about-accent"></div>
            
            <p className="about-text">
              <strong>Allure Industries</strong> is a specialized <strong>facade, door and window specialist</strong> committed 
              to delivering excellence in architectural fenestration. Our expertise encompasses comprehensive solutions 
              for modern building envelopes.
            </p>
            
            <p className="about-text">
              Crafting <strong>pure unadulterated spatial luxury</strong> with minimal interruption to construction 
              continuity is always a challenge. Our teams of dedicated engineers and designers work closely with 
              <strong> world-renowned architects</strong> to provide custom-made solutions for your windows, doors, 
              unitized curtain walls, and other fenestration needs.
            </p>

            <div className="about-highlights">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="highlight-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <FaCheckCircle className="check-icon" />
                  <span>{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-right"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <stat.icon className="stat-icon" />
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mission-card"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="mission-title">Our Mission</h3>
              <p className="mission-text">
                To revolutionize architectural fenestration through innovative engineering, 
                exceptional craftsmanship, and unwavering commitment to quality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

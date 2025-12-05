import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi';
import './Hero.css';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridItems = Array.from({ length: 100 }, (_, i) => i);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <section className="hero">
      {/* Interactive gradient background that follows cursor */}
      <div 
        className="hero-interactive-bg"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)`
        }}
      />

      <div className="hero-grid">
        {gridItems.map((i) => (
          <motion.div
            key={i}
            className="grid-item"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.02, 0.08, 0.02],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
            }}
          />
        ))}
      </div>

      <div className="hero-particles">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            initial={{ 
              x: Math.random() * 100 + '%',
              y: Math.random() * 100 + '%',
            }}
            animate={{
              y: ['-20%', '120%'],
              x: `${Math.random() * 100}%`,
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5
            }}
            style={{
              left: `${mousePosition.x}%`,
              opacity: 0.6
            }}
          />
        ))}
      </div>

      {/* Cursor follower elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`follower-${i}`}
          className="cursor-follower"
          animate={{
            x: mousePosition.x * (window.innerWidth / 100) - 50,
            y: mousePosition.y * (window.innerHeight / 100) - 50,
          }}
          transition={{
            type: "spring",
            damping: 20 + i * 10,
            stiffness: 100 - i * 20,
            mass: 0.5 + i * 0.5
          }}
          style={{
            width: 100 + i * 50,
            height: 100 + i * 50,
            opacity: 0.03 - i * 0.01
          }}
        />
      ))}
      
      <div className="hero-content">
        <motion.div
          className="hero-badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <HiSparkles className="badge-icon" />
          <span>Architectural Excellence</span>
        </motion.div>

        <motion.h1 
          className="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          ALLURE INDUSTRIES
        </motion.h1>
        
        <motion.p 
          className="hero-subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Facade, Door & Window Specialist
        </motion.p>
        
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Crafting pure unadulterated spatial luxury with precision engineering
          and innovative design solutions
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button className="cta-primary">
            Explore Solutions
          </button>
          <button className="cta-secondary">
            Contact Us
          </button>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaArrowDown size={18} />
          </motion.div>
          <span>Scroll to discover</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// src/components/Hero.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({ translations, language }) => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">{translations.title}</h1>
          <p className="hero-description">{translations.description}</p>
          <div className="hero-actions">
            <Link to="/contact" className="cta-button">
              {translations.cta}
              <span className="arrow">→</span>
            </Link>
            <a href="#services" className="cta-button secondary">
              {language === 'en' ? 'Our Services' : 'Nos Services'}
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <img 
            src="/hero-hvac.jpg" 
            alt="HVAC System" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
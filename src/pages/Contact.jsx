// src/pages/Contact.jsx
import React, { useState } from 'react';
import { translations } from '../utils/translations';
import './Contact.css';

const Contact = ({ language }) => {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const serviceOptions = [
    { value: '', label: language === 'en' ? 'Select a Service' : 'Sélectionnez un Service' },
    { value: 'installation', label: language === 'en' ? 'HVAC Installation' : 'Installation CVC' },
    { value: 'repair', label: language === 'en' ? 'Repair Services' : 'Services de Réparation' },
    { value: 'maintenance', label: language === 'en' ? 'Maintenance' : 'Entretien' },
    { value: 'emergency', label: language === 'en' ? 'Emergency Service' : 'Service d\'Urgence' },
    { value: 'air-quality', label: language === 'en' ? 'Air Quality' : 'Qualité d\'Air' },
    { value: 'consultation', label: language === 'en' ? 'Consultation' : 'Consultation' },
    { value: 'other', label: language === 'en' ? 'Other' : 'Autre' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-container">
          <div className="contact-hero-content">
            <div className="hero-text">
              <h1 className="hero-title">{t.contact?.title || "Contact Us"}</h1>
              <p className="hero-description">
                {t.contact?.description || "We'd love to hear from you. We're here to answer your questions and listen to your suggestions."}
              </p>
              <div className="hero-features">
                <div className="feature">
                  <span className="feature-icon">⚡</span>
                  <span>{language === 'en' ? '24/7 Emergency Service' : 'Service d\'Urgence 24/7'}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">👥</span>
                  <span>{language === 'en' ? 'Certified Technicians' : 'Techniciens Certifiés'}</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💎</span>
                  <span>{language === 'en' ? '15+ Years Experience' : '15+ Ans d\'Expérience'}</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card emergency-card">
                <div className="card-icon">🚨</div>
                <h3>{language === 'en' ? 'Emergency Service' : 'Service d\'Urgence'}</h3>
                <p>{language === 'en' ? 'Available 24/7' : 'Disponible 24/7'}</p>
                <a href="tel:4388011025" className="emergency-link">
                  📞 (438) 801-1025
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="contact-form-section">
              <div className="form-header">
                <h2>{language === 'en' ? 'Send us a Message' : 'Envoyez-nous un Message'}</h2>
                <p>
                  {language === 'en' 
                    ? 'Fill out the form below and we\'ll get back to you within 24 hours.'
                    : 'Remplissez le formulaire ci-dessous et nous vous répondrons dans les 24 heures.'
                  }
                </p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      {language === 'en' ? 'Full Name' : 'Nom Complet'} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder={language === 'en' ? 'Enter your full name' : 'Entrez votre nom complet'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      {language === 'en' ? 'Email Address' : 'Adresse Email'} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder={language === 'en' ? 'Enter your email' : 'Entrez votre email'}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      {language === 'en' ? 'Phone Number' : 'Numéro de Téléphone'}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={language === 'en' ? 'Enter your phone number' : 'Entrez votre numéro de téléphone'}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="service">
                      {language === 'en' ? 'Service Needed' : 'Service Requis'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      {serviceOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    {language === 'en' ? 'Message' : 'Message'} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder={
                      language === 'en' 
                        ? 'Tell us about your HVAC needs...' 
                        : 'Parlez-nous de vos besoins en CVC...'
                    }
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      {language === 'en' ? 'Sending...' : 'Envoi en cours...'}
                    </>
                  ) : (
                    language === 'en' ? 'Send Message' : 'Envoyer le Message'
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
                    <span className="success-icon">✅</span>
                    {language === 'en' 
                      ? 'Thank you! Your message has been sent successfully.'
                      : 'Merci ! Votre message a été envoyé avec succès.'
                    }
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-section">
              <div className="info-card">
                <h2>{language === 'en' ? 'Get in Touch' : 'Entrez en Contact'}</h2>
                
                <div className="info-item">
                  <div className="info-icon">📍</div>
                  <div className="info-content">
                    <h3>{language === 'en' ? 'Our Location' : 'Notre Adresse'}</h3>
                    <p>3850 Jean-Talon West<br />Montreal, QC. H3R 2G8</p>
                    <a 
                      href="https://maps.google.com/?q=3850+Jean-Talon+West+Montreal+QC+H3R+2G8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="map-link"
                    >
                      {language === 'en' ? 'View on Google Maps' : 'Voir sur Google Maps'}
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">📞</div>
                  <div className="info-content">
                    <h3>{language === 'en' ? 'Phone Numbers' : 'Numéros de Téléphone'}</h3>
                    <div className="phone-numbers">
                      <a href="tel:4388011025" className="phone-link">
                        <span className="phone-type">{language === 'en' ? 'Main' : 'Principal'}:</span>
                        (438) 801-1025
                      </a>
                      <a href="tel:4388011026" className="phone-link emergency">
                        <span className="phone-type">{language === 'en' ? 'Emergency' : 'Urgence'}:</span>
                        (438) 801-1026
                      </a>
                    </div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">✉️</div>
                  <div className="info-content">
                    <h3>{language === 'en' ? 'Email' : 'Courriel'}</h3>
                    <a href="mailto:info@superior-atmosphere.com" className="email-link">
                      info@superior-atmosphere.com
                    </a>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">🕒</div>
                  <div className="info-content">
                    <h3>{language === 'en' ? 'Business Hours' : 'Heures d\'Ouverture'}</h3>
                    <div className="business-hours">
                      <div className="hours-row">
                        <span>{language === 'en' ? 'Monday - Friday' : 'Lundi - Vendredi'}</span>
                        <span>8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="hours-row">
                        <span>{language === 'en' ? 'Saturday' : 'Samedi'}</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="hours-row">
                        <span>{language === 'en' ? 'Sunday' : 'Dimanche'}</span>
                        <span>Emergency Only</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="certification-badge">
                  <div className="badge-icon">🏆</div>
                  <div className="badge-content">
                    <h4>RBQ Certified</h4>
                    <p>License: 5829-8332-01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="contact-container">
          <h2>{language === 'en' ? 'Our Service Area' : 'Notre Zone de Service'}</h2>
          <p>
            {language === 'en' 
              ? 'Serving Montreal and surrounding areas with premium HVAC services'
              : 'Desservant Montréal et les environs avec des services CVC premium'
            }
          </p>
          <div className="map-placeholder">
            <div className="map-content">
              <div className="map-icon">🗺️</div>
              <h3>{language === 'en' ? 'Interactive Map' : 'Carte Interactive'}</h3>
              <p>
                {language === 'en' 
                  ? 'We serve the Greater Montreal Area including West Island, South Shore, and Laval'
                  : 'Nous desservons le Grand Montréal incluant l\'Ouest-de-l\'Île, la Rive-Sud et Laval'
                }
              </p>
              <a 
                href="https://maps.google.com/?q=3850+Jean-Talon+West+Montreal+QC+H3R+2G8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-button"
              >
                {language === 'en' ? 'Open in Google Maps' : 'Ouvrir dans Google Maps'}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
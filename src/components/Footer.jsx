// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { content } from '../data/content';
import './Footer.css';

const Footer = ({ language }) => {
  const t = content[language];

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'Facebook', icon: '📘', url: 'https://facebook.com/superior-atmosphere' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/superior-atmosphere' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/company/superior-atmosphere' },
    { name: 'Google Reviews', icon: '⭐', url: 'https://g.page/superior-atmosphere/review' }
  ];

  const serviceLinks = [
    { name: language === 'en' ? 'HVAC Installation' : 'Installation CVC', path: '/services#installation' },
    { name: language === 'en' ? 'Maintenance' : 'Entretien', path: '/services#maintenance' },
    { name: language === 'en' ? 'Repair Services' : 'Services de Réparation', path: '/services#repair' },
    { name: language === 'en' ? 'Emergency Services' : 'Services d\'Urgence', path: '/services#emergency' },
    { name: language === 'en' ? 'Air Quality' : 'Qualité d\'Air', path: '/services#air-quality' }
  ];

  const quickLinks = [
    { name: language === 'en' ? 'About Us' : 'À Propos', path: '/about' },
    { name: language === 'en' ? 'Services' : 'Services', path: '/services' },
    { name: language === 'en' ? 'Testimonials' : 'Témoignages', path: '/#testimonials' },
    { name: language === 'en' ? 'FAQ' : 'FAQ', path: '/#faq' },
    { name: language === 'en' ? 'Contact' : 'Contact', path: '/contact' }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">⚡</div>
              <div className="logo-text">
                <span className="logo-primary">Superior</span>
                <span className="logo-secondary">Atmosphere</span>
              </div>
            </div>
            <p className="footer-description">
              {language === 'en' 
                ? 'Your trusted partner for premium HVAC solutions in Montreal. 24/7 emergency services available.'
                : 'Votre partenaire de confiance pour des solutions CVC premium à Montréal. Services d\'urgence 24/7 disponibles.'
              }
            </p>
            <div className="footer-social">
              <h4 className="social-title">
                {language === 'en' ? 'Follow Us' : 'Suivez-Nous'}
              </h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-tooltip">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h3 className="link-group-title">
                {language === 'en' ? 'Our Services' : 'Nos Services'}
              </h3>
              <ul className="link-list">
                {serviceLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      <span className="link-bullet">•</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h3 className="link-group-title">
                {language === 'en' ? 'Quick Links' : 'Liens Rapides'}
              </h3>
              <ul className="link-list">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      <span className="link-bullet">•</span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="link-group">
              <h3 className="link-group-title">
                {language === 'en' ? 'Contact Info' : 'Coordonnées'}
              </h3>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div className="contact-details">
                    <p>3850 Jean-Talon West</p>
                    <p>Montreal, QC. H3R 2G8</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div className="contact-details">
                    <a href="tel:4388011025">(438) 801-1025</a>
                    <p className="contact-note">
                      {language === 'en' ? '24/7 Emergency' : 'Urgence 24/7'}
                    </p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div className="contact-details">
                    <a href="mailto:info@superior-atmosphere.com">
                      info@superior-atmosphere.com
                    </a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📝</span>
                  <div className="contact-details">
                    <p>RBQ: 5829-8332-01</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="trust-badges">
          <div className="trust-badge">
            <div className="badge-icon">🏆</div>
            <div className="badge-content">
              <h4>{language === 'en' ? 'Certified' : 'Certifié'}</h4>
              <p>{language === 'en' ? 'Licensed & Insured' : 'Licencié & Assuré'}</p>
            </div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">⭐</div>
            <div className="badge-content">
              <h4>4.9/5</h4>
              <p>{language === 'en' ? 'Customer Rating' : 'Évaluation Clients'}</p>
            </div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">🚀</div>
            <div className="badge-content">
              <h4>24/7</h4>
              <p>{language === 'en' ? 'Emergency Service' : 'Service d\'Urgence'}</p>
            </div>
          </div>
          <div className="trust-badge">
            <div className="badge-icon">💎</div>
            <div className="badge-content">
              <h4>15+</h4>
              <p>{language === 'en' ? 'Years Experience' : 'Ans d\'Expérience'}</p>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <h3 className="newsletter-title">
              {language === 'en' 
                ? 'Stay Updated with HVAC Tips' 
                : 'Restez Informé des Conseils CVC'
              }
            </h3>
            <p className="newsletter-description">
              {language === 'en'
                ? 'Get seasonal maintenance tips, energy-saving advice, and exclusive offers delivered to your inbox.'
                : 'Recevez des conseils d\'entretien saisonnier, des astuces d\'économie d\'énergie et des offres exclusives.'
              }
            </p>
          </div>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder={language === 'en' ? 'Enter your email' : 'Entrez votre email'}
              className="newsletter-input"
            />
            <button className="newsletter-button">
              {language === 'en' ? 'Subscribe' : 'S\'abonner'}
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Superior Atmosphere. {language === 'en' ? 'All rights reserved.' : 'Tous droits réservés.'}</p>
            </div>
            
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">
                {language === 'en' ? 'Privacy Policy' : 'Politique de Confidentialité'}
              </Link>
              <Link to="/terms" className="legal-link">
                {language === 'en' ? 'Terms of Service' : 'Conditions d\'Utilisation'}
              </Link>
              <Link to="/sitemap" className="legal-link">
                {language === 'en' ? 'Sitemap' : 'Plan du Site'}
              </Link>
            </div>

            <div className="footer-credits">
              <p>
                {language === 'en' 
                  ? 'Built with ❤️ for Montreal homeowners'
                  : 'Construit avec ❤️ pour les propriétaires de Montréal'
                }
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label={language === 'en' ? 'Back to top' : 'Retour en haut'}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;


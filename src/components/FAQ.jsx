// src/components/FAQ.jsx
import React, { useState } from 'react';
import { content } from '../data/content';
import './FAQ.css';

const FAQ = ({ language }) => {
  const t = content[language];
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFAQ = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const toggleAll = () => {
    if (openItems.size === t.faq.items.length) {
      setOpenItems(new Set());
    } else {
      setOpenItems(new Set(t.faq.items.map((_, index) => index)));
    }
  };

  // Filter FAQs based on search term
  const filteredFAQs = t.faq.items.filter(item => 
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq-section" id="faq">
      <div className="faq-container">
        <div className="faq-header">
          <div className="faq-title-section">
            <h2 className="faq-title">{t.faq.title}</h2>
            <p className="faq-subtitle">
              {language === 'en' 
                ? 'Find answers to common questions about our HVAC services'
                : 'Trouvez des réponses aux questions courantes sur nos services CVC'
              }
            </p>
          </div>
          
          <div className="faq-controls">
            <div className="search-box">
              <input
                type="text"
                placeholder={language === 'en' ? 'Search FAQs...' : 'Rechercher dans FAQ...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <span className="search-icon">🔍</span>
            </div>
            
            <button 
              className="toggle-all-btn"
              onClick={toggleAll}
              aria-label={language === 'en' ? 'Toggle all FAQs' : 'Basculer toutes les FAQ'}
            >
              {openItems.size === t.faq.items.length 
                ? (language === 'en' ? 'Collapse All' : 'Tout Réduire')
                : (language === 'en' ? 'Expand All' : 'Tout Développer')
              }
            </button>
          </div>
        </div>

        {searchTerm && (
          <div className="search-results-info">
            {language === 'en' 
              ? `Found ${filteredFAQs.length} results for "${searchTerm}"`
              : `${filteredFAQs.length} résultats trouvés pour "${searchTerm}"`
            }
          </div>
        )}

        <div className="faq-grid">
          <div className="faq-content">
            <div className="faq-list">
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((item, index) => {
                  const originalIndex = t.faq.items.indexOf(item);
                  const isOpen = openItems.has(originalIndex);
                  
                  return (
                    <div 
                      key={originalIndex} 
                      className={`faq-item ${isOpen ? 'open' : ''}`}
                    >
                      <button 
                        className="faq-question"
                        onClick={() => toggleFAQ(originalIndex)}
                        aria-expanded={isOpen}
                      >
                        <div className="question-content">
                          <span className="question-number">
                            {(originalIndex + 1).toString().padStart(2, '0')}
                          </span>
                          <span className="question-text">{item.question}</span>
                        </div>
                        <span className={`faq-toggle ${isOpen ? 'open' : ''}`}>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path 
                              d="M10 4V16M4 10H16" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </button>
                      
                      <div 
                        className="faq-answer-container"
                        style={{ 
                          maxHeight: isOpen ? '500px' : '0',
                          opacity: isOpen ? '1' : '0'
                        }}
                      >
                        <div className="faq-answer">
                          <p>{item.answer}</p>
                          
                          {/* Additional helpful links or actions */}
                          {(item.relatedServices || item.contactPrompt) && (
                            <div className="faq-actions">
                              {item.relatedServices && (
                                <a href="#services" className="faq-action-link">
                                  {language === 'en' ? 'View Related Services' : 'Voir Services Associés'}
                                </a>
                              )}
                              {item.contactPrompt && (
                                <a href="#contact" className="faq-action-link primary">
                                  {language === 'en' ? 'Get a Quote' : 'Obtenir un Devis'}
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">❓</div>
                  <h3>
                    {language === 'en' 
                      ? 'No FAQs found' 
                      : 'Aucune FAQ trouvée'
                    }
                  </h3>
                  <p>
                    {language === 'en'
                      ? `No results found for "${searchTerm}". Try different keywords or contact us directly.`
                      : `Aucun résultat pour "${searchTerm}". Essayez d'autres mots-clés ou contactez-nous directement.`
                    }
                  </p>
                  <a href="#contact" className="cta-button">
                    {language === 'en' ? 'Contact Us' : 'Nous Contacter'}
                  </a>
                </div>
              )}
            </div>
          </div>
          
          <div className="faq-sidebar">
            <div className="sidebar-card">
              <div className="card-icon">💡</div>
              <h3>
                {language === 'en' 
                  ? 'Need Immediate Help?' 
                  : 'Besoin d\'Aide Immédiate?'
                }
              </h3>
              <p>
                {language === 'en'
                  ? 'Our experts are available 24/7 for emergency HVAC services.'
                  : 'Nos experts sont disponibles 24/7 pour les services CVC d\'urgence.'
                }
              </p>
              <div className="contact-info">
                <a href="tel:4388011025" className="contact-link">
                  📞 (438) 801-1025
                </a>
                <a href="mailto:info@superior-atmosphere.com" className="contact-link">
                  ✉️ info@superior-atmosphere.com
                </a>
              </div>
            </div>
            
            <div className="sidebar-card">
              <div className="card-icon">⚡</div>
              <h3>
                {language === 'en' 
                  ? 'Quick Tips' 
                  : 'Conseils Rapides'
                }
              </h3>
              <ul className="tips-list">
                <li>
                  {language === 'en'
                    ? 'Change filters every 3 months'
                    : 'Changez les filtres tous les 3 mois'
                  }
                </li>
                <li>
                  {language === 'en'
                    ? 'Schedule annual maintenance'
                    : 'Planifiez l\'entretien annuel'
                  }
                </li>
                <li>
                  {language === 'en'
                    ? 'Keep vents clear and clean'
                    : 'Gardez les évents dégagés et propres'
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="faq-categories">
          <h3 className="categories-title">
            {language === 'en' ? 'Browse by Category' : 'Parcourir par Catégorie'}
          </h3>
          <div className="categories-grid">
            <button className="category-btn">
              🏠 {language === 'en' ? 'Residential' : 'Résidentiel'}
            </button>
            <button className="category-btn">
              🏢 {language === 'en' ? 'Commercial' : 'Commercial'}
            </button>
            <button className="category-btn">
              🔧 {language === 'en' ? 'Maintenance' : 'Entretien'}
            </button>
            <button className="category-btn">
              💰 {language === 'en' ? 'Pricing' : 'Tarification'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
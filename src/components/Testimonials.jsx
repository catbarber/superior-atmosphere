// src/components/Testimonials.jsx
import React from 'react';
import { testimonials } from '../data/testimonials';
import './Testimonials.css';

const Testimonials = ({ language }) => {
  const t = testimonials[language];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">
            {language === 'en' ? 'What Our Clients Say' : 'Ce Que Disent Nos Clients'}
          </h2>
          <p className="testimonials-subtitle">
            {language === 'en' 
              ? 'Trusted by homeowners and businesses across Montreal' 
              : 'De confiance par les propriétaires et entreprises de Montréal'
            }
          </p>
        </div>
        
        <div className="testimonials-grid">
          {t.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">❝</div>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                
                {/* Rating Stars */}
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <span 
                      key={i}
                      className={`star ${i < testimonial.rating ? 'filled' : ''}`}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="testimonial-author">
                <div className="author-image">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = `/images/avatar-${(index % 3) + 1}.jpg`;
                    }}
                  />
                  <div className="verified-badge">
                    ✓
                  </div>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-location">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="trust-indicators">
          <div className="trust-item">
            <div className="trust-number">500+</div>
            <div className="trust-label">
              {language === 'en' ? 'Happy Clients' : 'Clients Satisfaits'}
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-number">98%</div>
            <div className="trust-label">
              {language === 'en' ? 'Satisfaction Rate' : 'Taux de Satisfaction'}
            </div>
          </div>
          <div className="trust-item">
            <div className="trust-number">24/7</div>
            <div className="trust-label">
              {language === 'en' ? 'Support' : 'Support'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
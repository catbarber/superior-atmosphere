import React from 'react';
import { content } from '../data/content';

const Services = ({ language }) => {
  const t = content[language];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-header">
          <h2 className="services-title">{t.services.title}</h2>
          <p className="services-subtitle">{t.services.subtitle}</p>
        </div>
        
        <div className="services-grid">
          {t.services.items.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img 
                  src={`/service-${index + 1}.jpg`} 
                  alt={service.title}
                />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
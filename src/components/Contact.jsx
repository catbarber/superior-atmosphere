import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Hours</h3>
          <p><strong>7 Days a week</strong><br/>8:00 am — 6:00 pm</p>
        </div>
        <div className="contact-item">
          <h3>Contact</h3>
          <p><strong>Email</strong><br/>info@superior-atmosphere.com</p>
          <p><strong>Phone</strong><br/>(438) 801-1025</p>
        </div>
        <div className="contact-item">
          <h3>Location</h3>
          <p>3850 Jean-Talon West<br/>Montreal, QC. H3R 2G8</p>
          <p>RBQ:5829-8332-01</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
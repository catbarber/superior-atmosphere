// src/components/Header.jsx
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { translations } from '../utils/translations'

const Header = ({ language }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const t = translations[language]

  return (
    <header className="header">
      <div className="header-container">
        <nav className="navigation">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <div className={`nav-container ${isMenuOpen ? 'nav-open' : ''}`}>
            <button 
              className="close-menu"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ×
            </button>
            
            <ul className="nav-menu">
              <li>
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
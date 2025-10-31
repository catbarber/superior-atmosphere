import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Detect user's location or browser language for Quebec users
    const userLang = navigator.language || navigator.userLanguage;
    const isQuebec = userLang.startsWith('fr-CA') || 
                    userLang.startsWith('fr') || 
                    window.location.hostname.includes('.qc.ca');
    
    if (isQuebec) {
      setLanguage('fr');
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'fr' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
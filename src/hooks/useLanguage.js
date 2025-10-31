// src/hooks/useLanguage.js
import { useState, useEffect } from 'react'

export const useLanguage = () => {
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    // Detect user's location (simplified - in production, use IP geolocation)
    const userLanguage = navigator.language
    if (userLanguage.startsWith('fr') || userLanguage.includes('CA')) {
      setLanguage('fr')
    }
  }, [])

  return { language, setLanguage }
}
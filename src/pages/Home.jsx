// src/pages/Home.jsx
import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import { translations } from '../utils/translations'

const Home = ({ language }) => {
  const t = translations[language]

  return (
    <div className="home">
      <Hero translations={t.hero} language={language} />
      <Services language={language} translations={t.services} />
      <Testimonials language={language} />
      <FAQ language={language} />
    </div>
  )
}

export default Home
// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useLanguage } from './hooks/useLanguage'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import './styles/global.css'

function App() {
  const { language } = useLanguage()

  return (
    <Router>
      <div className="app">
        <Header language={language} />
        <main>
          <Routes>
            <Route path="/" element={<Home language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
          </Routes>
        </main>
        <Footer language={language} />
      </div>
    </Router>
  )
}

export default App
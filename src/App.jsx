import { useEffect, useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import Marquee from './components/Marquee'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const revealNodes = document.querySelectorAll('.reveal, .reveal-l, .reveal-r')

    if (!revealNodes.length) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    revealNodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="app">
      <CustomCursor />
      <nav className="navbar">
        <div className="nav-logo">Sandhya Shrestha</div>
        <ul className="nav-links">
          <li><a href="#about" onClick={(event) => { event.preventDefault(); scrollToSection('about') }}>About</a></li>
          <li><a href="#work" onClick={(event) => { event.preventDefault(); scrollToSection('work') }}>Works</a></li>
          <li><a href="#services" onClick={(event) => { event.preventDefault(); scrollToSection('services') }}>Services</a></li>
          <li><a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
          <li>
            <button
              type="button"
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              aria-pressed={theme === 'light'}
            >
              <span className="theme-toggle-icon">{theme === 'dark' ? '☼' : '☾'}</span>
              <span className="theme-toggle-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
            </button>
          </li>
        </ul>
      </nav>
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Services />
      <Contact />
      <footer className="site-footer">
        <div className="footer-top">
          <div>
            <div className="footer-mark">SANDHYA SHRESTHA</div>
            <p className="footer-role">Graphic Designer based in Nepal</p>
          </div>
          <div className="footer-links">
            <a href="#about" onClick={(event) => { event.preventDefault(); scrollToSection('about') }}>About Me</a>
            <a href="#work" onClick={(event) => { event.preventDefault(); scrollToSection('work') }}>Works</a>
            <a href="#services" onClick={(event) => { event.preventDefault(); scrollToSection('services') }}>Services</a>
            <a href="#contact" onClick={(event) => { event.preventDefault(); scrollToSection('contact') }}>Contact Me</a>
            <a href="mailto:sandhya@example.com">sandhya@example.com</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Sandhya Shrestha</span>
          <span>Graphic Designer · Kathmandu, Nepal</span>
          <span>Designed with intention</span>
        </div>
      </footer>
    </div>
  )
}

export default App

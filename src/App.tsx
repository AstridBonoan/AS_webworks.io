import { useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import './index.css'

function App() {
  const { isDark, toggleTheme } = useTheme()
  const [contactSubject, setContactSubject] = useState('')

  const handlePricingSelect = (subject: string) => {
    setContactSubject(subject)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-200">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} />
      <main>
        <Hero />
        <Services />
        <Pricing onSelect={handlePricingSelect} />
        <ContactForm subject={contactSubject} />
      </main>
      <Footer />
    </div>
  )
}

export default App

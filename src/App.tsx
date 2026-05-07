import { useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import { DemosPage } from './components/DemosPage'
import './index.css'

function App() {
  const { isDark, toggleTheme } = useTheme()
  const [contactSubject, setContactSubject] = useState('')
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const handlePopState = () => setPathname(window.location.pathname)

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
      setPathname(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handlePricingSelect = (subject: string) => {
    setContactSubject(subject)
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }, 0)
  }

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-200">
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} pathname={pathname} onNavigate={navigateTo} />
      <main>
        {pathname === '/demos' ? (
          <DemosPage />
        ) : (
          <>
            <Hero />
            <Services />
            <Pricing onSelect={handlePricingSelect} />
            <ContactForm subject={contactSubject} />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default App

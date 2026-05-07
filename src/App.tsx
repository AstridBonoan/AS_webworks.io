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
  const getRoute = () => window.location.hash.replace('#', '') || '/'
  const [pathname, setPathname] = useState(getRoute())

  useEffect(() => {
    const handleHashChange = () => setPathname(getRoute())

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigateTo = (path: string) => {
    if (getRoute() !== path) {
      window.location.hash = path
      setPathname(path)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const navigateToSection = (id: string) => {
    if (pathname !== '/') {
      navigateTo('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 0)
      return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
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
      <Footer onNavigateToSection={navigateToSection} />
    </div>
  )
}

export default App

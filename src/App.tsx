import './App.css'
import ProfileCard from './features/profile/ProfileCard'
import AboutCard from './features/about/AboutCard'
import ResumeCard from './features/resume/ResumeCard'
import PortfolioCard from './features/portfolio/PortfolioCard'
import FormCard from './features/form/FormCard'
import ThemeToggle from './components/ThemeToggle'
import { ThemeProvider } from './context/ThemeContext'
import { ToastProvider } from './context/ToastContext'
import { useState, useEffect } from 'react'

function App() {
  const [activeSection, setActiveSection] = useState('about')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveSection(id)
    }
  }

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-body transition-colors duration-400">
          {/* Header */}
          <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-overlay backdrop-blur-xl shadow-lg border-b border-primary' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="text-lg font-bold tracking-tight">
                <span className="text-accent">M</span><span className="text-primary">P</span>
              </div>
              
              <ul className="hidden md:flex gap-1">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? 'accent-muted text-accent'
                          : 'text-secondary hover:text-primary hover:bg-surface'
                      }`}
                      aria-current={activeSection === item.id ? 'page' : undefined}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>

              <ThemeToggle />
            </nav>
          </header>

          {/* Main Content */}
          <div className="pt-20 max-w-7xl mx-auto px-4 pb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Sidebar - Desktop */}
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24">
                  <ProfileCard />
                  
                  {/* Quick Stats */}
                  <div className="mt-6 bg-card rounded-xl p-5 border border-primary shadow-card transition-colors duration-400">
                    <h3 className="text-xs font-semibold text-tertiary uppercase tracking-wider mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">2+</div>
                        <div className="text-xs text-tertiary">Years Exp.</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">10+</div>
                        <div className="text-xs text-tertiary">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">5+</div>
                        <div className="text-xs text-tertiary">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-accent">100%</div>
                        <div className="text-xs text-tertiary">Commitment</div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Main Content Area */}
              <main className="lg:col-span-8 xl:col-span-9 space-y-6">
                
                {/* Profile Card - Mobile/Tablet */}
                <div className="lg:hidden">
                  <ProfileCard />
                </div>

                {/* Navigation Pills - Tablet */}
                <div className="lg:hidden">
                  <nav className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 scrollbar-hide">
                    {navItems.map(item => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0 ${
                          activeSection === item.id
                            ? 'bg-accent text-bg-card font-semibold'
                            : 'bg-surface text-secondary hover:bg-surface-hover'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                  <div id="about"><AboutCard /></div>
                  <div id="resume"><ResumeCard /></div>
                  <div id="portfolio"><PortfolioCard /></div>
                  <div id="contact"><FormCard /></div>
                </div>
              </main>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-primary py-6 text-center">
            <p className="text-tertiary text-sm">
              © {new Date().getFullYear()} Marcos Pirela. Built with React & Tailwind CSS.
            </p>
          </footer>
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
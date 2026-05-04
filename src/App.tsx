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
        <div className="min-h-screen bg-[#1a1a1b] transition-colors duration-300">
          {/* Header Navigation - Tablet & Desktop */}
          <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'bg-[#1a1a1b]/95 backdrop-blur-md shadow-lg border-b border-zinc-800/50' : 'bg-transparent'}`}>
            <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
              <div className="text-lg font-bold text-white tracking-tight">
                <span className="text-yellow-400">M</span>P
              </div>
              
              <ul className="hidden md:flex gap-1">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-yellow-400/20 text-yellow-400'
                          : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
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
            {/* Desktop Layout: Sidebar + Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Sidebar - Desktop Only */}
              <aside className="hidden lg:block lg:col-span-4 xl:col-span-3">
                <div className="sticky top-24">
                  <ProfileCard />
                  
                  {/* Quick Stats */}
                  <div className="mt-6 bg-primary-color rounded-lg p-6 border border-zinc-800">
                    <h3 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">2+</div>
                        <div className="text-xs text-zinc-500">Years Exp.</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">10+</div>
                        <div className="text-xs text-zinc-500">Projects</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">5+</div>
                        <div className="text-xs text-zinc-500">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-400">100%</div>
                        <div className="text-xs text-zinc-500">Commitment</div>
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
                            ? 'bg-yellow-400 text-zinc-900'
                            : 'bg-zinc-800/50 text-zinc-400 hover:bg-zinc-800'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Content Sections */}
                <div className="space-y-6">
                  <div id="about">
                    <AboutCard />
                  </div>
                  
                  <div id="resume">
                    <ResumeCard />
                  </div>
                  
                  <div id="portfolio">
                    <PortfolioCard />
                  </div>
                  
                  <div id="contact">
                    <FormCard />
                  </div>
                </div>
              </main>
            </div>
          </div>

          {/* Footer */}
          <footer className="border-t border-zinc-800 py-6 text-center">
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} Marcos Pirela. Built with React & Tailwind CSS.
            </p>
          </footer>
        </div>
      </ToastProvider>
    </ThemeProvider>
  )
}

export default App
import './App.css'
import ProfileCard from './features/profile/ProfileCard'
import AboutCard from './features/about/AboutCard'
import ResumeCard from './features/resume/ResumeCard'
import PortfolioCard from './features/portfolio/PortfolioCard'
import FormCard from './features/form/FormCard'

function App() {



  return (
    <>
      <section className='flex flex-col mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:mx-auto'>
          <div>
            <div className='lg:sticky lg:top-0'>
              <ProfileCard />
            </div>
          </div>
          <div className='lg:col-span-2'>
            <AboutCard />
            <ResumeCard />
            <PortfolioCard />
            <FormCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default App
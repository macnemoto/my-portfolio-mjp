import './App.css'
import ProfileCard from './features/profile/ProfileCard'
import AboutCard from './features/about/AboutCard'
import ResumeCard from './features/resume/ResumeCard'
import PortfolioCard from './features/portfolio/PortfolioCard'
import FormCard from './features/form/FormCard'

function App() {



  return (
    <>
      <section className='flex flex-col mx-auto max-w-7xl bg-orange-100'>
        <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-8 lg:mx-auto bg-red-500'>
          <div className='bg-blue-600 lg:col-span-1'>
            <div className='lg:sticky lg:top-0'>
              <ProfileCard />
            </div>
          </div>
          <div className='lg:col-span-2 bg-green-700'>
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
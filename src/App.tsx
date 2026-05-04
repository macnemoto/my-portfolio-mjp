import './App.css'
import ProfileCard from './features/profile/ProfileCard'
import AboutCard from './features/about/AboutCard'
import ResumeCard from './features/resume/ResumeCard'
import PortfolioCard from './features/portfolio/PortfolioCard'
import FormCard from './features/form/FormCard'

function App() {



  return (
    <>
      <div className='flex flex-col mx-auto max-w-7xl'>
        <ProfileCard />
        <AboutCard />
        <ResumeCard />
        <PortfolioCard />
        <FormCard />
      </div>
    </>
  )
}

export default App
import './App.css'
import InfoItem from './components/InfoItem'
import { MapPin, Phone, Mail} from 'lucide-react'
function App() {

  const avatar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
  const name = "Marcos Pirela"
  const description = "Software Developer"


  return (
    <>
      <div className="bg-primary-color rounded-lg p-4 flex flex-col gap-1">
        <div className="bg-primary-color rounded-lg p-4 flex flex-row gap-5">
          <div className="flex items-center justify-center h-24 bg-secondary-color rounded-lg">
            <img className='w-20 h-20' src={avatar} alt="avatar" />
          </div>
          <div>
            <h2 className='mb-2'>{name}</h2>
            <div className="flex items-center justify-center w-full py-1 pl-1 pr-1 bg-secondary-color rounded-lg text-xs">
              <p className=''>{description}</p>
            </div>
          </div>
        </div>
        <hr className={`h-px border-secondary-color border-spacing-1 my-3`}></hr>
        <div className='flex flex-col gap-4'>
          <InfoItem title={'EMAIL'} value={'Marcosj465@gmail.com'} icon={Mail} />
          <InfoItem title={'PHONE'} value={'(+58) 422-237617'} icon={Phone} />
          <InfoItem title={'LOCATION'} value={'Venezuela, Zulia'} icon={MapPin} />
        </div>
        <hr className={`h-px border-secondary-color border-spacing-1 my-3`}></hr>
      </div>
    </>
  )
}

export default App
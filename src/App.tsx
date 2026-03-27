import './App.css'

function App() {

  const avatar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
  const name = "Marcos Jose"
  const description = "Software Developer"

  return (
    <>
      <div className="bg-[#1E1E1F] rounded-lg p-4 flex flex-row gap-5">
        <div className='flex items-center justify-center h-24 bg-[#353535] rounded-lg'>
          <img className='w-20 h-20' src={avatar} alt="avatar" />
        </div>
        <div>
          <h2 className='mb-2'>{name}</h2>
          <div className='flex items-center justify-center w-full h-10 pl-1 pr-1 bg-[#353535] rounded-lg'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
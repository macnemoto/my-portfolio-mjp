import './App.css'

function App() {

  const avatar = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
  const name = "Marcos Jose"
  const description = "developer full stack"
  const button = "contact me"

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <div className="card bg-[#1E1E1F] rounded-lg p-4 flex flex-row">
        <div className='flex items-center justify-center h-24 bg-[#353535] rounded-lg'>
          <img className='w-20 h-20' src={avatar} alt="avatar" />
        </div>
        <div>
          <h2>{name}</h2>
          <p>{description}</p>
          <button>{button}</button>
        </div>
      </div>
    </>
  )
}

export default App
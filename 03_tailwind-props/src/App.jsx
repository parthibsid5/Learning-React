import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:'Payal',
    game:'BGMI'
  }
  let myArr=[1,2,3,4]

  return (
    <>
      {/* <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1> */}
      {/* <Card mode='hello' someObj={myObj} someArray={myArr}/> */}
      <Card imageSrc="https://assets.serenity.co.uk/58000-58999/58779/1296x864.jpg"
      title=" Goa Bliss - Sea, Sand & Serenity"
      features = {[["4 Star Hotel", "2 Activities"], ["Airport Pickup & Drop", "Selected Meals"]]}
      inclusion={[" North Goa Sightseeing","South Goa Sightseeing"]}
      totalPrice={10000}
      />
      {/* <Card/> */}
    </>
  )
}

export default App

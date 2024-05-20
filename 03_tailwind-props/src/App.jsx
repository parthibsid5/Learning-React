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
      <h1 className='bg-green-400 text-black p-4 rounded-md mb-4'>Tailwind Test</h1>
      {/* <Card mode='hello' someObj={myObj} someArray={myArr}/> */}
      <Card username='Ritesh Photography' hasTags='#riteshClicks'/>
      <Card username='Somani Photography' hasTags='#clickwithMani'/>
    </>
  )
}

export default App

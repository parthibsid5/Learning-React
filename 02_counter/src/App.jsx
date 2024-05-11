import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // hooks are used to "manage" the state of the component and "propagate" the changes to the UI

  let [counter, setCounter] = useState(15)
  let [message, setMessage] = useState('')
  // let message;
  // let counter=15
  const addValue = () => {
    counter = counter + 1
    if (counter > 20) {
      counter = 20
      message = "cannot go above 20 !"
      setMessage(message)
    }
    else {
      setCounter(counter);
      setMessage('')
    }
  }
  const removeValue = () => {
    counter = counter - 1
    if (counter < 0) {
      counter = 0
      message = "cannot go below 0 !"
      setMessage(message)
    }
    else {
      setCounter(counter);
      setMessage('')
    }
  }
  return (
    <>
      <h1>hello World</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removeValue}>Remove value</button>
      <br />
      Footer : {message}
    </>
  )
}

export default App

import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>This is custom my app</h1>
    </div>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com', target: '_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherElement=(
<a href="http://google.com" target='_blank'>visit google</a>
)

const anotheruser="Ayush"

const reactElement=React.createElement(
  'a',{href:'https://www.google.com',target:'_blank'},
  'Click me to visit google',
  anotheruser
)


ReactDOM.createRoot(document.getElementById('root')).
render(
  reactElement
)

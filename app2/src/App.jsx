import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Adv } from './components/adv.jsx'

function App() {
  const [count, setCount] = useState(0)
  let a = new Adv;
  a.genRand()
  console.log(a)
  return (
    <>
    </>
  )
}

export default App

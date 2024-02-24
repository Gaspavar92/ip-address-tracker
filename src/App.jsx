import { useState } from 'react'
import Ip from './components/Ip'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ip/>
    </>
  )
}

export default App

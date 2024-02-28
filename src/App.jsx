import { useState } from 'react'
import Ip from './components/Ip'
import SearchBar from './components/SearchBar'
import Map from './components/Map'

function App() {
  const [ipAddress, setIpAddress] = useState("")
  const [error, setError] = useState("")

  const handleChange = (data) => {
    setIpAddress(data)
  }

  return (
    <>
    <div className="header h-1/3">
      <SearchBar setIpAddress={handleChange} setError={setError}/>
      <div className="flex gap-24 bg-white py-16 px-32 absolute left-1/2 top-40 -translate-x-1/2 rounded-xl shadow-lg w-[70vw] min-w-fit justify-center">
        <Ip ipAddress={ipAddress} err={error}/>
      </div>
    </div>
    <Map />
    </>
  )
}

export default App

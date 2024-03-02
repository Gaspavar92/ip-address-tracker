import { useState } from 'react'
import Ip from './components/Ip'
import SearchBar from './components/SearchBar'
import Map from './components/Map'
import FetchData from './components/FetchData'

function App() {
  const [ipAddress, setIpAddress] = useState("")
  const [error, setError] = useState("")
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  return (
    <>
    <FetchData setError={setError} setResponse={setResponse} setLoading={setLoading} ipAddress={ipAddress} err={error}/>
    <div className="flex flex-col h-screen">
      <SearchBar setIpAddress={setIpAddress} setError={setError} />
      <div className="flex flex-col md:flex-row bg-white py-4 md:py-16 px-10 md:px-32 absolute left-1/2 top-32 md:top-40 -translate-x-1/2 rounded-xl shadow-lg w-[90vw] sm:w-[50vw] min-w-fit md:justify-between z-10 h-fit">
        <Ip ipAddress={ipAddress} loading={loading} error={error} response={response}/>
      </div>
    <Map data={response}/>
    </div>
    </>
  )
}

export default App

import axios from "axios";
import { useEffect, useState } from "react";

const Ip =  ({ipAddress, err}) =>  {

    const [response, setResponse] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // wrapping API call to get IP address in useEffect
    useEffect(() => {
        const fetchData = async () => {
                setLoading(true)
                const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IP_API_KEY}`;
                axios.get(url, {
                    params: {
                        ipAddress: ipAddress
                    }
                }).
                then(response => {
                    setError("")
                    setLoading(false);
                    setResponse(response.data)
                }).catch((error) => {
                    console.log("something")
                    setError(error.response.data.messages)
                }).finally(() => {
                    setLoading(false);
                })
        }
        if (ipAddress) {
            fetchData()
        }
    }, [ipAddress])

    if (loading) {
        return <p>Loading...</p>;
      }
    
      
    if (error) {
        return <p>{error}</p>
    }

    if (err) {
        return <p>{err}</p>
    }
    
    if (!ipAddress && !error) {
        return <p>Look for an IP address to populate results.</p>
    }

        return (
          
     response.location && (
            <>
                <p className="border-r border-gray pr-16">Country: {response.location.country}</p>
                <p className="border-r border-gray pr-16">City: {response.location.city}</p>
                <p className="border-r border-gray pr-16">Region: {response.location.region}</p>
                <p>ISP: {response.isp}</p>
            </>
      )
          
        );
}

export default Ip;
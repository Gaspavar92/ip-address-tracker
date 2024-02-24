import axios from "axios";
import { useEffect } from "react";

const Ip =  () =>  {

    // wrapping API call to get IP address in useEffect
    useEffect(() => {
        const fetchData = async () => {
            const url = "https://geo.ipify.org/api/v2/country?apiKey=at_mnkebYNmNmi3huij17aFstlEooUbW&ipAddress=8.8.8.8";
            axios.get(url).
            then(response => {
                console.log(response)
            })
        }
        fetchData()
    }, [])

    return (
        <></>
    )
}

export default Ip;
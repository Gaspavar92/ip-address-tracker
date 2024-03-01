import { useEffect } from "react";
import axios from "axios";

const FetchData = ({ ipAddress, setResponse, setError, setLoading, err }) => {
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IP_API_KEY}`;
      try {
        const response = await axios.get(url, {
          params: {
            ipAddress: ipAddress
          }
        });
        console.log(ipAddress)
        setError("");
        setResponse(response.data);
      } catch (error) {
        console.log(error)
        setError(error.response.data.messages);
        setResponse("");
      } finally {
        setLoading(false);
      }
    };
    if (!err) {
        fetchData();
    }
  }, [ipAddress, setResponse, setError, setLoading, err]);

  return null;
};

export default FetchData;
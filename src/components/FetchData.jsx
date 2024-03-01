import { useEffect } from "react";
import axios from "axios";

const FetchData = ({ ipAddress, setResponse, setError, setLoading }) => {
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
        setError("");
        setResponse(response.data);
      } catch (error) {
        setError(error.response.data.messages);
        setResponse("");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ipAddress, setResponse, setError, setLoading]);

  return null;
};

export default FetchData;
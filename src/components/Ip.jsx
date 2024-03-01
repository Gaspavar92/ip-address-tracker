const Ip =  ({ipAddress, response, error, loading}) =>  {

    if (loading) {
        return <p>Loading...</p>;
      }
      
    if (error) {
        return <p>{error}</p>
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
const Ip =  ({ipAddress, response, error, loading}) =>  {

    if (loading) {
        return <p className="flex justify-center w-full">Loading...</p>;
      }
      
    if (error) {
        return <p className="flex justify-center w-full">{error}</p>
    }
    
    if (!ipAddress && !error) {
        return <p className="flex justify-center w-full">Look for an IP address to populate results.</p>
    }

        return (
          
     response.location && (
            <>
                <div className="country border-r border-gray pr-16 flex flex-col justify-between gap-4">
                    <h2 className="text-gray-400 text-xs">COUNTRY</h2>
                    <p className="text-xl">{response.location.country}</p>
                </div>
                <div className="city border-r border-gray pr-16 flex flex-col justify-between gap-4">
                    <h2 className="text-gray-400 text-xs">CITY</h2>
                    <p className="text-xl">{response.location.city}</p>
                </div>
                <div className="region border-r border-gray pr-16 flex flex-col justify-between gap-4">
                    <h2 className="text-gray-400 text-xs">REGION</h2>
                    <p className="text-xl"> {response.location.region}</p>
                </div>
                <div className="isp flex flex-col justify-between gap-4">
                    <h2 className="text-gray-400 text-xs">ISP</h2>
                    <p className="text-xl">{response.isp}</p>
                </div> 
            </>
      )
          
        );
}

export default Ip;
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
                <div className="country border-b md:border-b-0 border-r-0 md:border-r border-gray md:mr-16 mr-0 md:pr-16 pr-0 md:pb-0 pb-2 flex flex-col justify-between md:gap-4 text-center">
                    <h2 className="text-gray-400 text-[10px] md:text-xs">COUNTRY</h2>
                    <p className="text-md md:text-xl">{response.location.country}</p>
                </div>
                <div className="city border-b md:border-b-0 border-r-0 md:border-r border-gray md:mr-16 mr-0 md:pr-16 pr-0 md:pb-0 pb-2 flex flex-col justify-between md:gap-4 text-center">
                    <h2 className="text-gray-400 text-[10px] md:text-xs">CITY</h2>
                    <p className="text-md md:text-xl">{response.location.city}</p>
                </div>
                <div className="region border-b md:border-b-0 border-r-0 md:border-r border-gray md:mr-16 mr-0 md:pr-16 pr-0 md:pb-0 pb-2 flex flex-col justify-between md:gap-4 text-center">
                    <h2 className="text-gray-400 text-[10px] md:text-xs">REGION</h2>
                    <p className="text-md md:text-xl"> {response.location.region}</p>
                </div>
                <div className="isp flex flex-col justify-between md:gap-4 text-center">
                    <h2 className="text-gray-400 text-[10px] md:text-xs">ISP</h2>
                    <p className="text-md md:text-xl">{response.isp}</p>
                </div> 
            </>
      )
          
        );
}

export default Ip;
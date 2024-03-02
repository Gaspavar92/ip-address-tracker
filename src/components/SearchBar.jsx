const SearchBar = ({setError, setIpAddress}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const regex = /^(?:\d{1,3}\.){3}\d{1,3}$/;
        const data = new FormData(e.target)
        if (regex.test(data.get("ip"))) {
            console.log("successful one")
            setError("");
            setIpAddress(data.get("ip"))
        } else {
            console.log("error one")
            setError("Invalid input. Please enter an IP address.")
            setIpAddress("")
        }
    }
    return (
        <div className="form-section h-56 min-h-56 bg-cover bg-no-repeat bg-center flex flex-col items-center gap-5 bg-[url('/public/pattern-bg-desktop.png')]">
            <h1 className="text-white center text-2xl md:text-4xl">IP Address Tracker</h1>
            <form onSubmit={handleSubmit} className="flex w-full justify-center h-10 md:h-14">
                <input type="text" name="ip" id="ip" className="rounded-l-lg border border-gray-950 w-1/3 min-w-36 p-4"/>
                <button type="submit" className="text-gray-50 bg-gray-950 px-5 py-2 rounded-r-lg"><i className="fa-solid fa-chevron-right"></i></button>
            </form>
        </div>
    )
}

export default SearchBar;
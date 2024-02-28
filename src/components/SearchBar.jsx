import { useState } from "react"

const SearchBar = ({setIpAddress, setError}) => {

    const handleSubmit = (e) => {
        e.preventDefault()
        const regex = /\b(?:[0-9]{1,3}\.){3}[0-9]{1,3}\b/;
        const data = new FormData(e.target)
        if (regex.test(data.get("ip"))) {
            setError("");
            setIpAddress(data.get("ip"))
        } else {
            setError("Invalid input. Please enter an IP address.")
            setIpAddress("")
        }
    }
    return (
        <div className="form-section h-56 min-h-36 bg-cover bg-no-repeat bg-center flex flex-col items-center gap-5 bg-[url('/public/pattern-bg-desktop.png')]">
            <h1 className="text-white center text-4xl">IP Address Tracker</h1>
            <form onSubmit={handleSubmit} className="flex w-full justify-center h-14">
                <input type="text" name="ip" id="ip" className="rounded-l-lg border border-gray-950 w-1/3 min-w-96 p-4"/>
                <button type="submit" className="text-gray-50 bg-gray-950 px-5 py-2 rounded-r-lg"><i className="fa-solid fa-chevron-right"></i></button>
            </form>
        </div>
    )
}

export default SearchBar;
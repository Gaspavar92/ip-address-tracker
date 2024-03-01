import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import NewMap from './NewMap';
import NewLoc from './NewLoc';

const Map = ({data}) => {

    const [info, setInfo] = useState({});

    useEffect(() => {
        setInfo(data)
    }, [data])

    return (
        <MapContainer center={[40.8518, 14.2681]} setView zoom={13} scrollWheelZoom={false} className="h-screen z-0" >
            <NewMap data={data}/>
            <NewLoc />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {info.location &&
            <Marker position={[info.location.lat, info.location.lng]}>
                <Popup>
                    {`${info.location.city}, ${info.location.region} - ${info.location.country}`}
                </Popup>
            </Marker>}
        </MapContainer>
    )
}

export default Map;
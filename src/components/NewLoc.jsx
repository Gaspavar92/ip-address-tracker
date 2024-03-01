import { useState } from 'react';
import { useMapEvents } from 'react-leaflet'

function NewLoc() {

    const [coord, setCoord] = useState({})
    const map = useMapEvents({
      click: (e) => {
        setCoord(e.latlng)
      }
    })
    map.setView([coord.lat, coord.lng])
    return null
  }

  export default NewLoc;
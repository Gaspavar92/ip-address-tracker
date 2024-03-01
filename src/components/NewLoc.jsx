import { useMapEvents } from 'react-leaflet'

function NewLoc() {
    const map = useMapEvents({
      click: (e) => {
        map.setView([e.latlng.lat, e.latlng.lng])
      }
    })
    return null
  }

  export default NewLoc;
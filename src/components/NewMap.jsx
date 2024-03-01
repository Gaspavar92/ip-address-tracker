import { useEffect } from 'react';
import { useMap } from 'react-leaflet'

const NewMap = ({data}) => {
    const map = useMap();
    useEffect(() => {
        if (data && data.location) {
            const { lat, lng } = data.location;
            map.flyTo([lat, lng], 13, {
                duration: 3
            })
        }
    }, [data])
    // const {lat, lng} = data;
    // map.setView([])
};

export default NewMap;
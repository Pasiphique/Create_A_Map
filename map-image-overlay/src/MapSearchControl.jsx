import { useMap } from "react-leaflet"; // Import the useMap hook
import { useEffect } from "react";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Required CSS
import LControlGeocoder from "leaflet-control-geocoder"; // Import geocoder

const MapSearchControl = () => {
    const map = useMap(); // Get the map instance
    
    useEffect(() => {
        // Create the geocoder control and add it to the map
        const geocoderControl = L.Control.geocoder()
        .on("markgeocode", (e) => {
            const { lat, lng } = e.geocode.center;
            // Center the map to the selected location
            map.setView([lat, lng], 13); // Update the map view
        })
        .addTo(map); // Add the geocoder control to the map
    
        // Cleanup the geocoder control when component unmounts
        return () => {
        map.removeControl(geocoderControl);
        };
    }, [map]); // Only rerun if the map instance changes
    
    return null;
    };

export default MapSearchControl;

import { MapContainer} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Required CSS
import MapSearchControl from "./MapSearchControl";
import DrawControls from "./DrawControls";
import NeighborhoodsLayer from "./NeighborhoodsLayer";
import BaseLayers from "./BaseLayers";
const Map = () => {

  // Sample coordinates for the overlay layers (marker and polygon)
 
  return (
    
      <div style={{ height: "100vh" }}>
      <MapContainer
        center={[40.4406, -79.9959]} // Pittsburgh coordinates (default)
        zoom={13}
        style={{ height: "100%", width: "100%" }}

      >
        {/* add Base Layers*/}
        <BaseLayers />
        {/* Add Geocoder Search Control */}
        <NeighborhoodsLayer />
        <MapSearchControl />
        <DrawControls />

      </MapContainer>
    </div>
  
  );
};

export default Map;


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
    
      <div style={{ height: "80vh" }}>
        <div>
          <h1>Neighborhoods of Pittsburgh: Explore the Heart of the Steel City</h1>
          <p style={{fontFamily:'sans-serif'}}>This interactive map offers a detailed view of Pittsburgh’s unique neighborhoods, allowing users to explore the diverse regions that make up the city. From the bustling downtown district to the quiet residential areas, each neighborhood has its own story. Whether you're discovering the historic charm of the South Side or the modern development in East Liberty, this map highlights the boundaries and distinctive features of Pittsburgh's many vibrant communities.</p>
        </div>
        <MapContainer
          center={[40.4406, -79.9959]} // Pittsburgh coordinates (default)
          zoom={13}
          style={{ height: "90vh", width: "100%" }}

        >
          <BaseLayers />
          <NeighborhoodsLayer />
          <MapSearchControl />
          <DrawControls />

        </MapContainer>
    </div>
  
  );
};

export default Map;


import {  TileLayer, LayersControl, Marker, Popup, Polygon } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Required CSS
import '../styles/App.css'
const BaseLayers = () =>{
     const markerPosition = [40.4406, -79.9959]; // Pittsburgh
      const polygonPositions = [
        [40.4416, -79.9960],
        [40.4426, -79.9970],
        [40.4436, -79.9980],
        [40.4406, -79.9985],
    
      ];

    return(
        <div>
             {/* Add LayersControl to toggle layers */}
       <LayersControl position="topright">
          {/* Base Layers */}
          <LayersControl.BaseLayer checked name="OpenStreetMap">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Satellite">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com/en-us/arcgis/products/arcgis-online/overview">Esri</a> contributors'
            />
  
          </LayersControl.BaseLayer>


          <LayersControl.BaseLayer name="CartoDB Positron">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
          />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="CartoDB Dark Matter">
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://carto.com/">CartoDB</a> contributors'
          />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="ESRI ">
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.esri.com/en-us/arcgis/products/arcgis-online/overview">Esri</a> contributors'
          />
          </LayersControl.BaseLayer>


          <LayersControl.BaseLayer name="OpenTopoMap ">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.opentopomap.org/">OpenTopoMap</a> contributors'
            />

          </LayersControl.BaseLayer>


          {/* Overlay Layers */}
          <LayersControl.Overlay checked name="Marker Layer">
            <Marker position={markerPosition}>
              <Popup>
                <span>Here is Pittsburgh!</span>
              </Popup>
            </Marker>
          </LayersControl.Overlay>

          <LayersControl.Overlay name="Polygon Layer">
            <Polygon positions={polygonPositions} color="blue" weight={5} opacity={0.7} />
          </LayersControl.Overlay>
        </LayersControl>

        </div>
    )
};

export default BaseLayers;
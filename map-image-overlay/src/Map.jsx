import React from "react";
import { MapContainer, TileLayer, LayersControl, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css"; // Required CSS
import LControlGeocoder from "leaflet-control-geocoder"; // Import geocoder
import { useMap } from "react-leaflet"; // Import the useMap hook
import MapSearchControl from "./MapSearchControl";
import DrawControls from "./DrawControls";



const Map = () => {
  // Sample coordinates for the overlay layers (marker and polygon)
  const markerPosition = [40.4406, -79.9959]; // Pittsburgh
  const polygonPositions = [
    [40.4416, -79.9960],
    [40.4426, -79.9970],
    [40.4436, -79.9980],
    [40.4406, -79.9985],
  ];
  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[40.4406, -79.9959]} // Pittsburgh coordinates (default)
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        


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

          {/* <LayersControl.BaseLayer name="Terrain">
          <TileLayer
                url="https://{s}.tile.stamen.com/terrain/{z}/{x}/{y}.jpg"
                attribution='&copy; <a href="http://stamen.com/">Stamen Design</a> and <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
          </LayersControl.BaseLayer> */}
{/* 
          <LayersControl.BaseLayer name="Stamen Toner">
          <TileLayer
              url="https://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://stamen.com/">Stamen Design</a> and <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name="Stamen WaterColor">
          <TileLayer
            url="https://{s}.tile.stamen.com/watercolor/{z}/{x}/{y}.jpg"
            attribution='&copy; <a href="http://stamen.com/">Stamen Design</a> and <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          </LayersControl.BaseLayer> */}

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

          {/* <LayersControl.BaseLayer name="ThunderForest">
          <TileLayer
            url="https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey=YOUR_API_KEY"
            attribution='&copy; <a href="https://www.thunderforest.com/">Thunderforest</a>'
          />

          </LayersControl.BaseLayer> */}

          <LayersControl.BaseLayer name="OpenTopoMap ">
            <TileLayer
              url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.opentopomap.org/">OpenTopoMap</a> contributors'
            />

          </LayersControl.BaseLayer>

          {/* <LayersControl.BaseLayer name="Hike and Bike">
          <TileLayer
            url="https://{s}.tile.hikebikemap.de/tiles/hikebikemap/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.hikebikemap.de/">Hike and Bike</a> contributors'
          />

          </LayersControl.BaseLayer> */}

          {/* <LayersControl.BaseLayer name="USGS Topographic Maps">
          <TileLayer
            url="https://{s}.tile.usgs.gov/arcgis/rest/services/USGSTopo/MapServer/tile/{z}/{y}/{x}"
            attribution='&copy; <a href="https://www.usgs.gov/">USGS</a> contributors'
          />
          </LayersControl.BaseLayer>


          <LayersControl.BaseLayer name="OpenAeriaMap">
          <TileLayer
            url="https://{s}.tile.openaerialmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openaerialmap.org/">OpenAerialMap</a> contributors'
          />
          </LayersControl.BaseLayer> */}

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
























        {/* Add Geocoder Search Control */}
        <MapSearchControl />
        <DrawControls />
      </MapContainer>
    </div>
  );
};

export default Map;

import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import DrawControls from "./DrawControls";
import "leaflet/dist/leaflet.css";
import MapSearchControl from "./MapSearchControl";
const Map = () => {
  return (
    <div style={{ height: "100vh" }}>
      <MapContainer
        center={[40.4406, -79.9959]} // Pittsburgh coordinates
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <DrawControls />

         {/* Add Geocoder Search Control */}
         <MapSearchControl />
      </MapContainer>
    </div>
  );
};

export default Map;

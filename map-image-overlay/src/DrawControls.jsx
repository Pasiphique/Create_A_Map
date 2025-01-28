import React from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
import "leaflet-draw";
const DrawControls = () => {
  const map = useMap();

  React.useEffect(() => {
    // Create a feature group to store drawn shapes
    const drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Add draw controls to the map
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawnItems, // Enable editing for drawn shapes
      },
      draw: {
        polyline: true, // Enable line drawing
        polygon: true, // Enable polygon drawing
        rectangle: true,
        circle: true,
        marker: true,
      },
    });

    map.addControl(drawControl);

    // Handle the creation of shapes
    map.on("draw:created", (e) => {
      const layer = e.layer;
      drawnItems.addLayer(layer);
    });

    // Function to export drawn shapes
    const exportShapes = () => {
      const geoJsonData = drawnItems.toGeoJSON();
      const dataStr = JSON.stringify(geoJsonData, null, 2); // Pretty-print JSON

      // Create a Blob and download link
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Trigger the download
      const a = document.createElement("a");
      a.href = url;
      a.download = "map_shapes.geojson";
      a.click();

      // Clean up
      URL.revokeObjectURL(url);
    };

    // Add export button
    const exportButton = L.control({ position: "topright" });
    exportButton.onAdd = () => {
      const button = L.DomUtil.create("button", "leaflet-bar leaflet-control");
      button.innerText = "Export Shapes";
      button.style.cursor = "pointer";
      button.onclick = exportShapes;
      return button;
    };
    exportButton.addTo(map);
  }, [map]);

  return null;
};

export default DrawControls;

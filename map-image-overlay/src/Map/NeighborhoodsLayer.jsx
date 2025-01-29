
import React from "react";
import { GeoJSON } from "react-leaflet";
import neighborhoodsData from '../assets/neighborhoods_.json'

const NeighborhoodsLayer = () => {

  const geoJsonStyle = {
    color: "black",
    weight: 2,
    opacity: 1,
    fillColor: 'grey',
    fillOpacity: 0.3,
  };

  return <GeoJSON data={neighborhoodsData} style={geoJsonStyle} />;
};

export default NeighborhoodsLayer;

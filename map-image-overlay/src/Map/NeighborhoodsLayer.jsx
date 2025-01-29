
import React from "react";
import { GeoJSON } from "react-leaflet";
import neighborhoodsData from '../assets/neighborhoods_.json'

const NeighborhoodsLayer = () => {
  const geoJsonStyle = {
    color: "black",
    weight: 3,
    opacity: 1,
    fillColor: 'grey',
    fillOpacity: 0.5,
  };

  const onEachFeature = (feature,layer) =>{
    layer.bindPopup(`<b> ${feature.properties.hood} </b>`)
    layer.on({
      click: ()=>{
        layer.setStyle({
          fillColor: 'yellow', // Highlight clicked neighborhood
          weight: 2,
          opacity: 1,
          color: 'white',
          fillOpacity: 0.7,
        });
      },
      mouseover: ()=>{
        layer.setStyle({
          fillColor: 'black',
          color: 'black',
          weight:2,
          opacity: .5,
          fillOpacity: .5,
        })
      },
      mouseout:()=>{
        layer.setStyle(geoJsonStyle)
      }
    })
  }
  return <GeoJSON data={neighborhoodsData} style={geoJsonStyle} onEachFeature={onEachFeature}/>;
};

export default NeighborhoodsLayer;

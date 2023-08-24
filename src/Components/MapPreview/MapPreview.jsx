import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  LayerControl,
 
} from "react-leaflet";
import "./MapPreview.scss"

const MapPreview = () => {
  const position =[51.505, -0.09];; // [latitude, longitude]

  return (
    <div className="preview">
       <MapContainer
      center={position}
      zoom={4}
      style={{ width: "100%", height: "200px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A sample marker at Lat: {position.lat}, Long: {position.lng}
        </Popup>
      </Marker>
      {/* <LayerControl /> */}
    </MapContainer>
    </div>
   
  );
};

export default MapPreview;

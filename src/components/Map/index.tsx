import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "@geoman-io/leaflet-geoman-pro";
import { ExpGeomanControl, ExpGeomanControlProps } from './ExpGeomanControl'; // Make sure ExpGeomanControl accepts props

// Fix for the default icon issue in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

// Define the props interface for the Map component
interface MapProps {
  geomanControlOptions: ExpGeomanControlProps; // ExpGeomanControlProps should define the options you want to pass
}

const Map: React.FC<MapProps> = ({ geomanControlOptions }) => {
  const position: [number, number] = geomanControlOptions.center ?? [51.514244, 7.468429];

  return (
    <MapContainer center={position} zoom={geomanControlOptions.zoom ?? 14} style={{ height: '400px', width: '100%', marginBottom: '20px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Forward the geomanControlOptions props to ExpGeomanControl */}
      <ExpGeomanControl {...geomanControlOptions}/>
    </MapContainer>
  );
};

export default Map;
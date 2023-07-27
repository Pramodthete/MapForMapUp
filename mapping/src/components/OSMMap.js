import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const OSMMap = ({ selectedRegion }) => {
  const [mapCenter, setMapCenter] = useState({ x: 20.5937, y: 80.9629 });

  useEffect(() => {
    updateMapCenter(selectedRegion);
  }, [selectedRegion]);

  const updateMapCenter = (region) => {
    // Replace the center coordinates with actual coordinates based on the selectedRegion
    if (region === 'UnitedStates') {
        console.log(mapCenter.x)
        mapCenter.x= 37.0902; mapCenter.y= -95.7129;
        setMapCenter({x:mapCenter.x, y:mapCenter.y})
        console.log(mapCenter.x)
    } else if (region === 'India') {
        console.log(region)
      setMapCenter({ x: 20.5937, y: 80.9629 });
    } else if (region === 'UnitedKingdom') {
        console.log(region)
      setMapCenter({ x: 51.509865, y: -0.118092 });
    } else {
      setMapCenter({ x: 0, y: 0 });
    }
  };

  return (<div>
    <MapContainer center={[mapCenter.x, mapCenter.y]} zoom={5} style={{ height: '1000px', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* Add other map components or markers as needed */}
    </MapContainer>
    
    </div>
  );
};

export default OSMMap;

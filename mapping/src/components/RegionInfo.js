import React from 'react';

const RegionInfo = ({ regionInfo }) => {
    if (!regionInfo) {
        // If regionInfo is empty, display a message or loading spinner
        return <p>Loading region info...</p>;
      }

  return (
    <div>
      <h1>Region Information</h1>
      <p>Currency Symbol: {regionInfo.currency}</p>
      <p>Speed Units: {regionInfo.speedUnits}</p>
      <p>Distance Units: {regionInfo.distanceUnits}</p>
      <p>Volume Units: {regionInfo.volumeUnits}</p>
      <p>Timezone: {regionInfo.timezone}</p>
    </div>
  );
};

export default RegionInfo;

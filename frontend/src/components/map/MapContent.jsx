import React from 'react';
import './MapContent.css';

const MapContent = ({mapInfo}) => {
  return (
      <div className="content-container">
          <img src={mapInfo.image}/>
          <h1>{mapInfo.title}</h1>
      </div>
  );
};

export default MapContent;

import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const position = {
  lat: 6.778515,
  lng: 79.883119
};

const onLoad = marker => {
   console.log('marker: ',marker)
}

function Map() {
  return (
    <LoadScript
      googleMapsApiKey=""
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={15}
      >
      <Marker 
      onLoad={onLoad}
      position={position}
      />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)
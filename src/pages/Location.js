import React from 'react'
import { useState, useEffect } from "react";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 38.788370,
  lng:  -77.272880
};

function Location() {
//   const urlApiKey = "https://wed-backend.herokuapp.com/keys/";
//   const [api, setApi] = useState([]);
//   const getApi = async () => {
//     const response = await fetch(urlApiKey);
//     const data = await response.json();
//     setApi(data);
//   };
// useEffect(() => {
//     getApi();
//   },[]);
//   console.log(api[0].apiKey)

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAI4EGoam1B-kDsW_3MRFsfo9Pq9Y4_7YU'
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(Location)
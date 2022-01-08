import React from 'react'


import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '350px',
  height: '350px',
  margin: '50px auto 30px auto', 
  border: 'solid 10px #E9A2A3'
};

const position = {
  lat: 36.1549,
  lng:  -115.1516
};

const center= {
  lat: 36.154881,
  lng:  -115.151627
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
    <Marker
      position={position}
    />
      </GoogleMap>

  ) : <>
  </>
}

export default React.memo(Location)
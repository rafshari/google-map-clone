import { Box } from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react'

import React from 'react'

const Map = ({ coordinates, setCoordinates, setBounds }) => {
  return (
    <Box width={'full'} height={'full'}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB99IC1gOnxVcAVwgq9i8CdpmDEarcy5p0' }}
        defaultCenter={coordinates}
        center={ {lat: 35.736830, lng:51.380777} }
        defaultZoom={11}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  )
}

//
export default Map

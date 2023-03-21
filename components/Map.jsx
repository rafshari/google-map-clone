import { Box } from '@chakra-ui/react'
import GoogleMapReact from 'google-map-react'

import React from 'react'

const Map = ({ coordinates}) => {
  return (
    <Box width={'full'} height={'full'}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB99IC1gOnxVcAVwgq9i8CdpmDEarcy5p0' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={4}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={() => {}}
        onChildClick={() => {}}
      ></GoogleMapReact>
    </Box>
  )
}

//
export default Map

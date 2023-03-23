import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import List from 'components/List'
import PlaceDetail from 'components/PlaceDetail'
import { getPlaceData } from './api'

import Script from 'next/script'

const HomePage = () => {
  const [places, setPlaces] = useState([])
  const [filteredPlaces, setFilteredPlaces] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [bounds, setBounds] = useState(null)
  const [coordinates, setCoordinates] = useState({})
  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState('')

  useEffect(() => {
    // get the users current location on intial login
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude })
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    const filteredData = places.filter((place) => place.rating > ratings)
    setFilteredPlaces(filteredData)
    console.log(ratings)
  }, [ratings])

  useEffect(() => {
    setIsLoading(true)
    getPlaceData(type, bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data)
      setIsLoading(false)
    })
  }, [type, coordinates, bounds])

  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      width={'100vw'}
      height={'100vh'}
      maxWidth={'100vw'}
      maxHeight={'100vh'}
      position={'relative'}
    >
      <script src='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB99IC1gOnxVcAVwgq9i8CdpmDEarcy5p0'></script>

      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      <List
        places={filteredPlaces.length ? filteredPlaces : places}
        isLoading={isLoading}
      />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
        places={filteredPlaces.length ? filteredPlaces : places}
      />
    </Flex>
  )
}

export default HomePage

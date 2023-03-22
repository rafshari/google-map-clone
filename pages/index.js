import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import List from 'components/List'
import PlaceDetail from 'components/PlaceDetail'
import { getPlaceData } from './api'

const HomePage = () => {
  const [places, setPlaces] = useState([])
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
    setIsLoading(true)
    getPlaceData(bounds?.sw, bounds?.ne).then((data) => {
      console.log(data)
      setPlaces(data)
      setIsLoading(false)
    })
  }, [coordinates, bounds])

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
      <Header
        setType={setType}
        setRatings={setRatings}
        setCoordinates={setCoordinates}
      />
      <List places={places} isLoading={isLoading} />

      <Map
        setCoordinates={setCoordinates}
        coordinates={coordinates}
        setBounds={setBounds}
      />
    </Flex>
  )
}

export default HomePage

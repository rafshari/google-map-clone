import { Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import Header from 'components/Header'
import Map from 'components/Map'
import List from 'components/List'
import PlaceDetail from 'components/PlaceDetail'
import { getPlaceData } from './api'

const places = [
  { name: 'sample place' },
  { name: 'sample place' },
  { name: 'sample place' },
  { name: 'sample place' },
  { name: 'sample place' },
  { name: 'sample place' },
  { name: 'sample place' },
]

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const [coordinates, setCoordinates] = useState({})
  const [type, setType] = useState('restaurants')
  const [ratings, setRatings] = useState('')

  useEffect(() => {
    // get the users current location on intial login
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        console.log({ latitude, longitude });
        setCoordinates({ lat: latitude, lng: longitude })
      }
    )
  }, [])

  useEffect(() => {
    getPlaceData().then((data) => {
      console.log(data)
    })
  }, [])

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

      <Map coordinates={coordinates} />
    </Flex>
  )
}

export default HomePage

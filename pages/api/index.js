import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlaceData = async (sw, ne) => {
  try {
    const {data:{data}} = await axios.get(url, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      
      headers: {
        'X-RapidAPI-Key': '89202684cemshd5a8a43b4c27950p16da9cjsn45b80520e16b',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
      },
    })
    return data
  } catch (error) {
    console.log(`fetch data Error: ${error}`)
  }
}

export const getPlaceDataNeshan = () => {
  //making url
  var url = `https://api.neshan.org/v1/search?term=${term}&lat=${centerLat.value}&lng=${centerLng.value}`
  //add your api key
  var params = {
    headers: {
      'Api-Key': 'service.b5c4ed11ff714a6bb8972c17f305b58b',
    },
  }
  //sending get request
  const {
    data: { data },
  } = axios
    .get(url, params)
    .then((data) => {
      return data

      //set center of map to marker location
      console.log(data)
    })
    .catch((error) => {
      console.log(error.response)
    })
}

import axios from 'axios'

export const getPlaceData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },

        headers: {
          'X-RapidAPI-Key':
            process.env.RAPIDAPI_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
        },
      }
    )
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
      'Api-Key': process.env.NESHAN_KEY,
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

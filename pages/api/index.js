import axios from 'axios'

const url = 'https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete'
const options = {
  params: { query: 'eiffel tower', lang: 'en_US', units: 'km' },

  headers: {
    'X-RapidAPI-Key': '89202684cemshd5a8a43b4c27950p16da9cjsn45b80520e16b',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
  },
}

export const getPlaceData = async () => {
  try {
    const { data:{data}} = await axios.get(url, options)
    return data
  } catch (error) {
    console.log(`fetch data Error: ${error}`)
  }
}

export const getPlaceDataNeshan = () => {

  //making url 
  var url = `https://api.neshan.org/v1/search?term=${term}&lat=${centerLat.value}&lng=${centerLng.value}`;
  //add your api key
  var params = {
      headers: {
          'Api-Key': 'service.b5c4ed11ff714a6bb8972c17f305b58b'
      },

  };
  //sending get request
  const { data:{data}} = axios.get(url, params)
      .then(data => {
        return data

         
          //set center of map to marker location
          console.log(data);

      }).catch(error => {
    
          console.log(error.response);
      });
}

import axios from 'axios';

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    });

    return data;
}



// import axios from 'axios';

// const URL = 'https://api.openweathermap.org/data/2.5/weather';
// const API_KEY = '4cb57465ad471459fb028e2f1bcd2fca';

// export const fetchWeather = async (query) => {
//   const { data } = await axios.get(URL, {
//     params: {
//       q: query,
//       units: 'metrice',
//       APPID: API_KEY,
//     }
//   });

//   return data;
// }
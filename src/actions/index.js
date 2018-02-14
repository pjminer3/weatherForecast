import axios from 'axios';

const API_KEY = 'a7c6330c6bae9e3cb15a782c927abe06';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// an action creator is a function that always returns an action
// { type: ..... , payload: ..... }
 export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; // We'll only look for US cities
  const request = axios.get(url); // returns a promise called 'request'

   return {
     type: FETCH_WEATHER,
     payload: request,
   };
 }
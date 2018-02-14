import { combineReducers } from 'redux';

import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  // WeatherReducer will be responsible for the part of the state called 'weather'
  weather: WeatherReducer,
});

export default rootReducer;

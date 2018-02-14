import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // In the below, state is an array of arrays, so by destructuring it it accepts action.payload.data as a new array within itself
      return [ action.payload.data, ...state ];
      break; // Break is unneccesary here due to the return statement, but I like it as a reminder and good form
  }

  return state;
}
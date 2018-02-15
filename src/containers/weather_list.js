import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const humidity = cityData.list.map(weather => weather.main.humidity);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const { lon, lat } = cityData.city.coord;
    // const lng = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat; 


    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color={'red'} /></td>
        <td><Chart data={humidity} color={'orange'} /></td>
        <td><Chart data={pressure} color={'green'} /></td>
      </tr>
    )
  }
  
  render () {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){ // state.weather
  return { weather }; // { weather: weather }
  // we use state.weather because we assigned the 'weather' key to our WeatherReducer in combineReducers
};

export default connect(mapStateToProps)(WeatherList);
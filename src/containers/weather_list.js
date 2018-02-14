import React, { Component } from 'react';
import { connect } from 'react-redux'

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    
    return (
      <tr key={name}>
        <td>{name}</td>
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
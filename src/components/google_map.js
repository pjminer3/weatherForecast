import React, { Component } from 'react';

class GoogleMap extends Component {
  constructor(props) {
    super(props);
  }
  // on componentDidMount it creates the map and adds it to the div with ref = map
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon,
      }
    });
  }

  render() {
    return (
      <div ref='map' />
    );
  }
}

export default GoogleMap;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // this is the proper way to make sure the correct 'this' binding occurs
    // this.onInputChange = this.onInputChange.bind(this);
    // this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  // always need to prevent default when using form tags
  onFormSubmit = (event) => {
    event.preventDefault();

    // go to fetch weather data
    this.props.fetchWeather(this.state.term);

    // reset the searchBar
    this.setState({ term: '' });
  }
  
  render() {
    return (
      <form 
        className="input-group"
        onSubmit={this.onFormSubmit}
      >
        <input
          placeholder="Get a 5-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          // onChange will run whatever function is inside the brackets
          onChange={this.onInputChange} 
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

// Allows the function fetchWeather to be a prop for the searchBar
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);

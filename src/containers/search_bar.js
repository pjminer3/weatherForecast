import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // this is the proper way to make sure the correct 'this' binding occurs
    // this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };
  
  render() {
    return (
      <form className="input-group">
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
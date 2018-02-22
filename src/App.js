import React, { Component } from 'react';
import { connect } from 'react-redux';
import './assets/css/App.css';
import * as actions from './actions';

class App extends Component {

  componentWillMount() {
    this.props.fetchAllPokemons(9);
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default connect(null, actions)(App);

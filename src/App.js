import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Pokedex from './components/Pokedex';

import './assets/css/App.css';

class App extends Component {

  componentWillMount() {
    this.props.fetchAllPokemonsAndSetCurrent(9);

  }

  render() {
    const { pokemons } = this.props;
    console.log(pokemons);
    return (
      <div className="App">
        <Pokedex />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    pokemons: state.pokemons
  };
}

export default connect(MapStateToProps, actions)(App);

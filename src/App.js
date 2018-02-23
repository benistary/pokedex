import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Pokedex from './components/Pokedex';

import './assets/css/App.css';

class App extends Component {

  componentWillMount() {
    this.props.fetchAllPokemons(3);
  }

  renderName() {
    const { list } = this.props.pokemons;
    list.map((pokemon) => {
      console.log(pokemon.data);
    });
  }

  render() {
    const { list } = this.props.pokemons;
    return (

      <div className="App">
        <ul>{this.renderName()}</ul>
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

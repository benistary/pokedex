import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Pokedex from './components/Pokedex';

import './assets/css/App.css';

class App extends Component {

  componentWillMount() {
    this.props.fetchAllPokemons(2);
  }

  handleLeftButton(e) {
    e.preventDefault();
    console.log('left');
  }

  handleRightButton(e) {
    e.preventDefault();
    console.log('right');
  }

  render() {
    const { pokemon } = this.props;
    console.log(pokemon);
    return (
      <div className="App">
        <Pokedex pokemon={pokemon} left={this.handleLeftButton} right={this.handleRightButton} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  console.log(state);
  return {
    pokemon: state.pokemons.pokemon
  };
}

export default connect(MapStateToProps, actions)(App);

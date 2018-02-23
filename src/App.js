import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';
import Pokedex from './components/Pokedex';

import './assets/css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSpinner: true
    }
    this.handleLeftButton = this.handleLeftButton.bind(this);
    this.handleRightButton = this.handleRightButton.bind(this);
  }

  componentWillMount() {
    this.props.fetchAllPokemons(2);
  }

  componentWillReceiveProps(nextProps) {
    this.showSpinner(nextProps);
  }

  showSpinner(props) {
    const { name } = props.pokemon;
    if (name !== '') {
      this.setState({showSpinner: false});
    }
  }

  handleLeftButton(e) {
    e.preventDefault();
    this.props.switchBetweenPokemons('left');
  }

  handleRightButton(e) {
    e.preventDefault();
    this.props.switchBetweenPokemons('right')
  }

  render() {
    const { pokemon } = this.props;
    const { showSpinner } = this.state;
    return (
      <div className="App">
        <Pokedex pokemon={pokemon} showSpinner={showSpinner} left={this.handleLeftButton} right={this.handleRightButton} />
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

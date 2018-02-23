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
  }

  componentWillMount() {
    this.props.fetchPokemons(9);
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

  handleButton(direction) {
    this.props.switchBetweenPokemons(direction);
  }

  render() {
    const { pokemon } = this.props;
    const { showSpinner } = this.state;
    return (
      <div className="App">
        <Pokedex pokemon={pokemon} showSpinner={showSpinner} left={this.handleButton.bind(this,'left')} right={this.handleButton.bind(this,'right')} />
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    pokemon: state.pokemons.pokemon
  };
}

export default connect(MapStateToProps, actions)(App);

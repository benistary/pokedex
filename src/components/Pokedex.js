import React, { Component } from 'react';
import View from './View';

class Pokedex extends Component {
  render() {
    return(
      <div className="pokedex">
        <div className="pokedex__panel-left">
          <div className="pokedex__wrapper-left"></div>
          <div className="pokedex__curve-left"></div>
          <div className="pokedex__radius-fill-1"></div>
          <div className="pokedex__curve-right"></div>
          <div className="pokedex__display">
            <div className="pokedex__view"></div>
            <View></View>
          </div>
        </div>
        <div className="pokedex__panel-right">

        </div>
      </div>
    );
  }
}

export default Pokedex;

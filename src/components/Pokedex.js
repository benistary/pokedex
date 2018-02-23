import React, { Component } from 'react';
import View from './View';

class Pokedex extends Component {
  render() {
    return(
      <div className="pokedex">
        <div className="pokedex__panel-left">
          <div className="pokedex__wrapper-left"></div>
          <div className="pokedex__curve-left-1"></div>
          <div className="pokedex__radius-fill-1"></div>
          <div className="pokedex__curve-left-2"></div>
          <div className="pokedex__button-1"></div>
          <ul className="pokedex__button-list">
            <li><div className="pokedex__button-2 pokedex__button-2--red"></div></li>
            <li><div className="pokedex__button-2 pokedex__button-2--yellow"></div></li>
            <li><div className="pokedex__button-2 pokedex__button-2--green"></div></li>
          </ul>
          <div className="pokedex__display">
            <div className="pokedex__view">
              <div className="pokedex__button-3"></div>
              <View></View>
            </div>
          </div>
          <div className="pokedex__button-4"></div>
          <div className="pokedex__arrows">
            <div class="pokedex__arrows--top"></div>
            <div class="pokedex__arrows--right"></div>
            <div class="pokedex__arrows--bottom"></div>
            <div class="pokedex__arrows--left"></div>
            <div class="pokedex__arrows--mid"></div>
          </div>
        </div>
        <div className="pokedex__panel-right">
          <div className="pokedex__wrapper-right"></div>
          <div className="pokedex__curve-right-1"></div>
          <div className="pokedex__radius-fill-2"></div>
          <div className="pokedex__curve-right-2"></div>
        </div>
      </div>
    );
  }
}

export default Pokedex;

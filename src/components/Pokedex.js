import React, { Component } from 'react';
import View from './View';
import Spinner from './Spinner';

class Pokedex extends Component {

  returnElement() {
    const { showSpinner, pokemon } = this.props;
    if (showSpinner) {
      return <Spinner />;
    } else {
      if ( pokemon.name !== '' && pokemon.image !== '' ) {
        return <View pokemon={pokemon}></View>;
      }
    }
  }

  render() {
    const { left, right } = this.props;
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
              <div className="pokedex__button-3"></div>
              <div className="pokedex__view">
                {this.returnElement()}
              </div>
          </div>
          <div className="pokedex__button-4"></div>
          <div className="pokedex__arrows">
            <div className="pokedex__arrows--top"></div>
            <a href="#" onClick={right}><div className="pokedex__arrows--right"></div></a>
            <div className="pokedex__arrows--bottom"></div>
            <a href="#" onClick={left}><div className="pokedex__arrows--left"></div></a>
            <div className="pokedex__arrows--mid"></div>
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

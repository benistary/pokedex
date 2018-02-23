import { POKEMONS, POKEMON } from './types';
import axios from 'axios';

let pokemons = [];
let index = 0;

export const fetchAllPokemons = (count) => {
  return async (dispatch) => {
    let fetchedPokemons = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`);
    fetchedPokemons = fetchedPokemons.data.results;
    for  (const pokemon of fetchedPokemons) {
      await addPokemonsToObject(pokemon.name);
    }
    await dispatch({type: POKEMONS, payload: pokemons });
    await dispatch(showCurrentPokemon(pokemons[0].data));
  }
}

const addPokemonsToObject = async (name) => {
  const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const {data} = pokemon;
  pokemons = [...pokemons, pokemon: data ];
}

export const showCurrentPokemon = (data) => {
  const { name } = data;
  const { front_default } = data.sprites;
  return (dispatch) => {
    dispatch({type: POKEMON, payload: {name, front_default} })
  }
}

export const switchBetweenPokemons = (direction) => {
  return (dispatch) => {
    if (direction === 'left') {
      if(index > 0) {
        index = index - 1;
        dispatch(showCurrentPokemon(pokemons[index].data));
      }

    }
    if (direction === 'right') {
      if(index < pokemons.length - 1) {
        index = index + 1;
        dispatch(showCurrentPokemon(pokemons[index].data));
      }
    }
  }
}

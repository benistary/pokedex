import { POKEMONS } from './types';
import axios from 'axios';

let pokemons = [];

export const fetchAllPokemons = (count) => {
  return async (dispatch) => {
    let fetchedPokemons = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`);
    fetchedPokemons = fetchedPokemons.data.results;
    for  (const pokemon of fetchedPokemons) {
      await addPokemonToObject(pokemon.name);
    }
    dispatch({type: POKEMONS, payload: pokemons });
  }
}

const addPokemonToObject = async (name) => {
  const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const {data} = pokemon;
  pokemons = [...pokemons, pokemon: data ];
}

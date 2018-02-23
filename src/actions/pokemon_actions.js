import { POKEMONS } from './types';
import axios from 'axios';

let pokemons = {};

export const fetchAllPokemonsAndSetCurrent = (count) => {
  return async (dispatch) => {
    let fetchedPokemons = await axios(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`);
    fetchedPokemons = fetchedPokemons.data.results;
    for  (const pokemon of fetchedPokemons) {
      await putPokemonToObject(pokemon.name);
    }
    dispatch({type: POKEMONS, payload: pokemons });
  }
}

const putPokemonToObject = async (name) => {
  const pokemon = await axios(`https://pokeapi.co/api/v2/pokemon/${name}/`);
  const { data } = pokemon;
  pokemons = await {...pokemons, [data.name]: {data}};
}

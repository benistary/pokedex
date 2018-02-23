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
      console.log(pokemons);
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

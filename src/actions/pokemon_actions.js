import { POKEMON } from './types';
import axios from 'axios';

export const fetchAllPokemons = (count) => {
  return (dispatch) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${count}`).then((res) => {
      dispatch({ type: POKEMON, payload: res.data.results });
    });
  }
}

import { POKEMON } from '../actions/types';

const INITIAL_STATE = {
  pokemons: {}
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POKEMON:
      return { ...state, pokemons: action.payload };
    default:
      return state;
  }
}

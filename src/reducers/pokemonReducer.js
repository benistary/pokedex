import { POKEMONS } from '../actions/types';

const INITIAL_STATE = {
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POKEMONS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
}

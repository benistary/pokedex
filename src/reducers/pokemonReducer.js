import { POKEMONS, POKEMON } from '../actions/types';

const INITIAL_STATE = {
  list: [],
  pokemon: {
    name: '',
    image: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POKEMONS:
      return { ...state, list: action.payload };
    case POKEMON:
      return {
        ...state,
        pokemon: {
          name: action.payload.name,
          image: action.payload.front_default
        }
      };
    default:
      return state;
  }
}

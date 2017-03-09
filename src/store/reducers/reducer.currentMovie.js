import { SET_CURRENT_MOVIE } from '../actions/types';

const currentMovieReducer = (state = '', action) => {
  switch(action.type) {
  case SET_CURRENT_MOVIE:
    return Object.assign({}, state, {
      currentMovie: action.payload
    });
  default:
    return state;
  }
};

export default currentMovieReducer;

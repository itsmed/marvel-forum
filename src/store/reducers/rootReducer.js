import { combineReducers } from 'redux';

import currentMovieReducer from './reducer.currentMovie';

const rootReducer = combineReducers({
  currentMovie: currentMovieReducer
});

export default rootReducer;

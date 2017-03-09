import { createStore } from 'redux';

import currentMovieReducer from './reducer.currentMovie';

const rootReducer = createStore(currentMovieReducer);

export default rootReducer;

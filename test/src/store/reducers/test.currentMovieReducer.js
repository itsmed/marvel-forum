import { expect } from 'chai';

import currentMovieReducer from '../../../../src/store/reducers/reducer.currentMovie';
import {
  SET_CURRENT_MOVIE
} from '../../../../src/store/actions/types';

describe('current movie reducer', () => {

  it('should return the current state when given an unknown or undefined action', () => {
    const currentState = {
      currentMovie: 'Raiders of the Lost Ark'
    };
    expect(currentMovieReducer(currentState)).to.deep.equal(currentState);
    expect(currentMovieReducer(currentState, { type: 'RANDOM_ACTION'})).to.deep.equal(currentState);
  });

  it('should set the action payload as the new movie when passed the correct action type', () => {
    const action = {
      type: SET_CURRENT_MOVIE,
      payload: 'The Matrix'
    };
    const currentState = {
      currentMovie: ''
    };
    const expectedState = {
      currentMovie: 'The Matrix'
    };
    expect(currentMovieReducer(currentState, action)).to.deep.equal(expectedState);
  });
});
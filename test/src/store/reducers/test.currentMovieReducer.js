import { expect } from 'chai';

import currentMovieReducer from '../../../../src/store/reducers/reducer.currentMovie';
import {
  SET_CURRENT_MOVIE
} from '../../../../src/store/actions/types';

describe('current movie reducer', () => {

  it('should return the default state when passed undefined as state', () => {
      const expectedState = {
        currentMovie: ''
      };
      expect(currentMovieReducer(undefined, { type: 'REDUX_INIT' })).to.equal('');
  });

  xit('should return the current state when given an unknown action', () => {
    const currentState = {
      currentMovie: 'Raiders of the Lost Ark'
    };
    expect(currentMovieReducer(currentState, { type: 'RANDOM_ACTION'})).to.deep.equal(currentState);
  });

  xit('should set the action payload as the new movie when passed the correct action type', () => {
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
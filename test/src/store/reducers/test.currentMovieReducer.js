import { expect } from 'chai';

import currentMovieReducer from '../../../../src/store/reducers/reducer.currentMovie';

describe('current movie reducer', () => {

  it('should return the current state when given an unknown or undefined action', () => {
    const currentState = {
      currentMovie: 'Raiders of the Lost Ark'
    };
    expect(currentMovieReducer(currentState)).to.deep.equal(currentState);
    expect(currentMovieReducer(currentState, { type: 'RANDOM_ACTION'})).to.deep.equal(currentState);
  });
});
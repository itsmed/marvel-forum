describe('current movie reducer', () => {
  const { expect } = require('chai');

  it('should return the current state when given an unknown or undefined action', () => {
    const currentState = {
      currentMovie: 'Raiders of the Lost Ark'
    };
    expect(currentMovieReducer(currentState).to.deep.equal(currentMovie));
    expect(currentMovieReducer(currentState, { type: 'RANDOM_ACTION'})).to.deep.equal(curerntState);
  });
});
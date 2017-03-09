import { expect } from 'chai';

import store from '../../../src/store/createStore';

describe('the application state', () => {
  it('should return the appliction state', () => {
    // const unsub = store.subscribe(() => console.log(store.getState));
    // console.log('state', store.getState(), 'ypu');
    // store.dispatch({type: 'poo', payload: 'Cool Runnings'});
    // console.log('state', store.getState(), 'ypu');
    // unsub();
      expect(store.getState()).to.deep.equal({ currentMovie: '' });
  });
});

import feedReducer from './reducer';
import { ACTIONS, STATES } from '../../constants';

describe('feedReducer', () => {
  describe('given a LOAD_START action', () => {
    it('sets the LOADING state', () => {
      const action = { type: ACTIONS.LOAD_START };
      const state = { state: STATES.INACTIVE, feed: [] };
      const newState = { state: STATES.LOADING, feed: [] };
      expect(feedReducer(state, action)).toEqual(newState)
    });
  });

  describe('given a LOAD_SUCCESS action', () => {
    it('sets the DONE state and populates the feed', () => {
      const action = { type: ACTIONS.LOAD_SUCCESS, feed: [1, 2, 3] };
      const state = { state: STATES.LOADING, feed: [] };
      const newState = { state: STATES.DONE, feed: [1, 2, 3] };
      expect(feedReducer(state, action)).toEqual(newState)
    });
  });

  describe('given a LOAD_ERROR action', () => {
    it('sets the ERRPR state', () => {
      const action = { type: ACTIONS.LOAD_ERROR };
      const state = { state: STATES.LOADING, feed: [] };
      const newState = { state: STATES.ERROR, feed: [] };
      expect(feedReducer(state, action)).toEqual(newState)
    });
  });
});

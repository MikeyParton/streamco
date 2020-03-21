import { ACTIONS, STATES } from '../../constants';

function feedReducer(state, action) {
  switch(action.type) {
    case ACTIONS.LOAD_START:
      return { ...state, state: STATES.LOADING };
    case ACTIONS.LOAD_SUCCESS:
      return { ...state, state: STATES.DONE, feed: action.feed };
    case ACTIONS.LOAD_ERROR:
      return { ...state, state: STATES.ERROR };
    default:
      return state;
  }
}

export default feedReducer;

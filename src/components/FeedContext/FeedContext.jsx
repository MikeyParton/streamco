import React, { useReducer, useContext, useEffect } from 'react';
import feedReducer from './reducer';
import { ACTIONS, STATES, FEED_URL } from '../../constants';
import { alphabeticalSort } from '../../utils';

const FeedContext = React.createContext();

const initialState = {
  state: STATES.INACTIVE,
  feed: []
};

function FeedProvider({ children }) {
  const [state, dispatch] = useReducer(feedReducer, initialState);

  return (
    <FeedContext.Provider value={{ state, dispatch }}>
      {children}
    </FeedContext.Provider>
  );
}

export const useFeed = () => {
  const { state, dispatch } = useContext(FeedContext);

  useEffect(() => {
    if (state.state !== STATES.INACTIVE) return;
    
    dispatch({ type: ACTIONS.LOAD_START });
    
    fetch(FEED_URL)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const feed = json.entries.sort(alphabeticalSort);
        dispatch({ type: ACTIONS.LOAD_SUCCESS, feed });
      })
      .catch((_error) => {
        dispatch({ type: ACTIONS.LOAD_ERROR });
      });
  }, [dispatch, state.state]);

  return state;
}

export default FeedProvider;

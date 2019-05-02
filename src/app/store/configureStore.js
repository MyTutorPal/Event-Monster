import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/rootReducer';

export const configureStore = preloadedState => {
  const middleware = [];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const storeEnhancer = [middlewareEnhancer];

  const composedEnhancer = compose(...storeEnhancer);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};

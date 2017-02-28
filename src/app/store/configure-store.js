/* eslint-env browser */
import { applyMiddleware, compose, createStore } from 'redux';
import { responsiveStoreEnhancer } from 'redux-responsive';
import rootReducer from '../reducers/index';
import { setMouseDown } from '../actions/mouse-down';
import thunk from 'redux-thunk';

export default (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(responsiveStoreEnhancer, applyMiddleware(thunk))
  );
  window.addEventListener('mousedown', () => {
    store.dispatch(setMouseDown(true));
  });
  window.addEventListener('mouseup', () => {
    store.dispatch(setMouseDown(false));
  });
  return store;
};

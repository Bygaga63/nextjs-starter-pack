import { IS_DEV } from './../config/environments';
import {applyMiddleware, compose, createStore, Store} from 'redux';
import thunk from 'redux-thunk'
import { IState } from './states';
import reducer from "./reducers";
let store: any;

export const getStore = (state: any, isServer?: boolean): Store<IState> => {
  if (isServer && typeof window === 'undefined') {
    return createStore<IState, any, {}, undefined>(reducer, state, applyMiddleware(thunk))
  } else {
    const composeEnhancers = IS_DEV && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    if (!store) {
      const mw = [thunk]
      if (!IS_DEV) {
        if (window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
          window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}
        }
      } 
      store = createStore<IState, any, {}, undefined>(
        reducer,
        state,
        composeEnhancers(applyMiddleware(...mw))
      )

    }
    return store
  }
}
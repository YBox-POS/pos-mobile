import { applyMiddleware, createStore, compose, combineReducers } from 'redux';

import mainReducer from '../modules/Main/duck';
import homeReducer from '../modules/Home/duck';
import imageReducer from '../modules/Imagelist/duck';

export const rootReducer = combineReducers({
  app: mainReducer,
  home: homeReducer,
  image:imageReducer
})

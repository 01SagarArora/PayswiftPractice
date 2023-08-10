import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { headerFooterApi
} from 'api';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  [headerFooterApi.reducerPath]: headerFooterApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}
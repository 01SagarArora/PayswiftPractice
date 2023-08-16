import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { headerFooterApi, travelStatusTripApi
} from 'api';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  [headerFooterApi.reducerPath]: headerFooterApi.reducer,
  [travelStatusTripApi.reducerPath]: travelStatusTripApi.reducer,

};

export function createReducer() {
  return combineReducers(rootReducer);
}
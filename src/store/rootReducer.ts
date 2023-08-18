import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { commonS2SApi, headerFooterApi, travelStatusTripApi
} from 'api';
import { mainDataReducer } from './MainData/mainDataSlice';
import { errorReducer } from './Error/ErrorSlice';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  mainData : mainDataReducer,
  error: errorReducer,
  [headerFooterApi.reducerPath]: headerFooterApi.reducer,
  [travelStatusTripApi.reducerPath]: travelStatusTripApi.reducer,
  [commonS2SApi.reducerPath]: commonS2SApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}
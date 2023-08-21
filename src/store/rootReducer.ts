import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { commonS2SApi, headerFooterApi, travelStatusTripApi
} from 'api';
import { mainDataReducer } from './MainData/mainDataSlice';
import { errorReducer } from './Error/ErrorSlice';
import { commonApi } from 'api/commonApi/apis';
import { pendingListReducer } from './PostSlice/PostSlice';
import { reasonsReducer } from './ReasonSlice/ReasonSlics';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  mainData : mainDataReducer,
  error: errorReducer,
  pendingList: pendingListReducer,
  reasonData: reasonsReducer,
  [headerFooterApi.reducerPath]: headerFooterApi.reducer,
  [travelStatusTripApi.reducerPath]: travelStatusTripApi.reducer,
  [commonS2SApi.reducerPath]: commonS2SApi.reducer,
  [commonApi.reducerPath]: commonApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}
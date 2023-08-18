import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { headerFooterApi
} from 'api';
import { commonApi } from 'api/commonApi/apis';
import { pendingListReducer } from './PostSlice/PostSlice';
import { reasonsReducer } from './ReasonSlice/ReasonSlics';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  pendingList: pendingListReducer,
  reasonData: reasonsReducer,
  [headerFooterApi.reducerPath]: headerFooterApi.reducer,
  [commonApi.reducerPath]: commonApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}
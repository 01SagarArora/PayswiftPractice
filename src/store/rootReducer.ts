import { combineReducers } from '@reduxjs/toolkit';
import { alertReducer } from './Alert/alertSlice';
import { loaderReducer } from './Loader/LoaderSlice';
import { commonS2SApi
} from 'api';
import { mainDataReducer } from './MainData/MainDataSlice';
import { errorReducer } from './Error/ErrorSlice';
import { commonApi } from 'api/commonApi/apis';
import { reasonsReducer } from './ReasonSlice/ReasonSlics';
import { tsDailogReducer } from './TSDialogSlice/TSDialogSlice';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  mainData : mainDataReducer,
  tsDialog: tsDailogReducer,
  error: errorReducer,
  reasonData: reasonsReducer,
  [commonS2SApi.reducerPath]: commonS2SApi.reducer,
  [commonApi.reducerPath]: commonApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}
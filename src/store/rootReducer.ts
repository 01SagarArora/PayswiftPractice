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
import { notFoundReducer } from './NotFound/NotFoundSlice';
import { mainDataPaymentReducer } from './PaymentMainData/PaymentMainDataSlice';

export const rootReducer = {
  alert:alertReducer,
  loader:loaderReducer,
  mainData : mainDataReducer,
  mainDataPayment: mainDataPaymentReducer,
  tsDialog: tsDailogReducer,
  error: errorReducer,
  reasonData: reasonsReducer,
  notFound : notFoundReducer,
  [commonS2SApi.reducerPath]: commonS2SApi.reducer,
  [commonApi.reducerPath]: commonApi.reducer,
};

export function createReducer() {
  return combineReducers(rootReducer);
}
import { configureStore, StateFromReducersMapObject } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { rootReducer } from './rootReducer';
import { commonS2SApi, headerFooterApi, travelStatusTripApi } from 'api';

const initStore = (preloadedState?: Partial<RootState>) => configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([
      headerFooterApi.middleware,
      travelStatusTripApi.middleware,
      commonS2SApi.middleware,
      ]),
  preloadedState,
  devTools: String(process.env.NODE_ENV).trim() !== 'production',
});

export type Store = ReturnType<typeof initStore>;
export type RootState = StateFromReducersMapObject<typeof rootReducer>;
export type AppDispatch = Store['dispatch'];

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { initStore };

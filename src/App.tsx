import { FC, ReactElement, useEffect } from 'react';
import { ErrorBoundary } from 'components';
import Router from 'router/Router';
import {  RootState } from 'store/store';
import AlertDialog from 'components/common/AlertDialog';
import './App.scss'
import { useSelector } from 'react-redux';
import Loader from "./components/Loader/Loader";


const App: FC = (): ReactElement => {
  const loader = useSelector((state: RootState) => state.loader);
  const alert = useSelector((state: RootState) => state.alert);
  useEffect(() => {  
  }, []);

  return (
    <ErrorBoundary>
       {loader.isLoading && <Loader oMessage={loader.oMessage} />}
       <AlertDialog {...alert}></AlertDialog>
        <Router />
    </ErrorBoundary>
  );
};

export { App };

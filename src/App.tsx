import { FC, ReactElement } from 'react';
import { ErrorBoundary } from 'components';
import Router from 'router/Router';
import { RootState } from 'store/store';
import AlertDialog from 'components/common/AlertDialog';
import './App.scss'
import { useSelector } from 'react-redux';
import Loader from "./components/Loader/Loader";
import NotFound from 'components/NotFound/NotFound';

const App: FC = (): ReactElement => {
  const loader = useSelector((state: RootState) => state.loader);
  const alert = useSelector((state: RootState) => state.alert);
  const error = useSelector((state: RootState) => state.error);

  return (

    <ErrorBoundary>
      {error.isPageNotFound && <NotFound />}
      {(loader.isLoading) &&(!error.isPageNotFound) && <Loader  oMessage={loader.oMessage} />}
      <AlertDialog {...alert}></AlertDialog>
      {!error.isPageNotFound && <main>
        <Router />
      </main>}
    </ErrorBoundary>
  );
};

export { App };

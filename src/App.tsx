import { FC, ReactElement, useEffect } from 'react';
import { ErrorBoundary } from 'components';
import Router from 'router/Router';
import {  AppDispatch, RootState, useAppDispatch } from 'store/store';
import AlertDialog from 'components/common/AlertDialog';
import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "./components/Loader/Loader";
import { commonApi } from 'api/commonApi/apis';
import { GET_REASONS } from 'utils/constants';
import { REASON_REQUEST } from './models/ReasonData';
import { setReasonData, setReasonLoaded } from 'store/ReasonSlice/ReasonSlics';
import { LOADER_MSG } from 'components/Loader/loader.contant';
import { startLoading, stopLoading } from 'store/Loader/LoaderSlice';
import NotFound from 'components/NotFound/NotFound';
import { showAlert } from 'store/Alert/alertSlice';
import { ALERT_DIALOG } from 'constants/commonConstants';

const App: FC = (): ReactElement => {
  const loader = useSelector((state: RootState) => state.loader);
  const alert = useSelector((state: RootState) => state.alert);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useAppDispatch();
  const loaderDispatch = useDispatch<AppDispatch>();
  
  useEffect(() => { 
    
    function getReasonsList(){
      let req = {...REASON_REQUEST};
        loaderDispatch(startLoading(LOADER_MSG.tripDetails.default));
        dispatch(commonApi.endpoints.postApi.initiate({url: GET_REASONS, data: req}))
            .then((res)=>{
            loaderDispatch(stopLoading());
              try{
              if(res.data.success){
                //TODO : MANIPULATE DATA
                dispatch(setReasonData(res.data));
                dispatch(setReasonLoaded());
              }
            }catch(e){
              console.log(e)
              let alertData = {
                title: ALERT_DIALOG.DIALOG_TITLE,
                messages: [ALERT_DIALOG.TRY_AGAIN_MESSAGE],
                actions: ['OK'],
              };
              dispatch(showAlert(alertData));
            }             
        })
    }
    getReasonsList();
   
  }, []);

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

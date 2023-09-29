import { FC, ReactElement, useEffect } from 'react';
import { ErrorBoundary } from 'components';
import Router from 'router/Router';
import {RootState,useAppDispatch } from 'store/store';
import AlertDialog from 'components/common/AlertDialog';
import './App.scss'
import { useSelector } from 'react-redux';
import Loader from "./components/Loader/Loader";
import NotFound from 'components/NotFound/NotFound';
import { showAlert } from 'store/Alert/alertSlice';
import { ALERT_DIALOG } from 'constants/commonConstants';
import { setReasonData } from 'store/ReasonSlice/ReasonSlics';
import { commonApi } from 'api/commonApi/apis';
import { GET_REASONS_AJAX_API } from 'utils/ApiConstants';


const App: FC = (): ReactElement => {
  const loader = useSelector((state: RootState) => state.loader);
  const alert = useSelector((state: RootState) => state.alert);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(commonApi.endpoints.getApi.initiate({url: GET_REASONS_AJAX_API}))
    .then((res)=>{
      try{
        dispatch(setReasonData(JSON.parse(res.data.data[0].data)))
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
  },[])



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

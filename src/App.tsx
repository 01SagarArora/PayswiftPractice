import { FC, ReactElement, useEffect } from 'react';
import { ErrorBoundary } from 'components';
import Router from 'router/Router';
import {  AppDispatch, RootState, useAppDispatch } from 'store/store';
import AlertDialog from 'components/common/AlertDialog';
import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import Loader from "./components/Loader/Loader";
import { commonApi } from 'api/commonApi/apis';
import { setPendingList } from 'store/PostSlice/PostSlice';
import { GET_POSTS, GET_REASONS } from 'utils/constants';
import { REASON_REQUEST } from './models/ReasonData';
import { setReasonData, setReasonLoaded } from 'store/ReasonSlice/ReasonSlics';
import { Booking, PendingUpdate } from 'models/PendingUpdate';
import { tripMockData } from './mockData';
import { LOADER_MSG } from 'components/Loader/loader.contant';
import { startLoading, stopLoading } from 'store/Loader/LoaderSlice';
import NotFound from 'components/NotFound/NotFound';
// import { PageNotFound } from 'pages';
//import TSDialog from 'pages/TSDialog/TSDialog';

const App: FC = (): ReactElement => {
  const loader = useSelector((state: RootState) => state.loader);
  const alert = useSelector((state: RootState) => state.alert);
  const error = useSelector((state: RootState) => state.error);
  const dispatch = useAppDispatch();
  const loaderDispatch = useDispatch<AppDispatch>();
  
  useEffect(() => { 
    function getPendingActions(){
      loaderDispatch(startLoading(LOADER_MSG.tripDetails.default));
        dispatch(commonApi.endpoints.getApi.initiate({url: GET_POSTS}))
          .then((res)=>{
            loaderDispatch(stopLoading());
            let tripDataArray: Booking[] = [];
            let resp = res?.data?.length ? res?.data : tripMockData;
            resp?.data?.map((item:PendingUpdate) => {
              item.bookings?.map((booking: Booking) => {
                tripDataArray?.push(booking);
              })
            });
            dispatch(setPendingList(tripDataArray))
        })
    }

    function getReasonsList(){
      let req = {...REASON_REQUEST};
        dispatch(commonApi.endpoints.postApi.initiate({url: GET_REASONS, data: req}))
            .then((res)=>{
              if(res.data.success){
                //TODO : MANIPULATE DATA
                dispatch(setReasonData(res.data));
                dispatch(setReasonLoaded());
              }
              
        })
    }



    getPendingActions();
    getReasonsList();
   
  }, []);

  return (
    // <ErrorBoundary>
    //   jhh
    //   {error.isPageNotFound && <NotFound />}
    //    {loader.isLoading &&  <Loader oMessage={loader.oMessage} />}
    //    <AlertDialog {...alert}></AlertDialog>
    //     <Router />
    // </ErrorBoundary>

    <ErrorBoundary>
      {error.isPageNotFound && <NotFound />}
      {(loader.isLoading) &&(!error.isPageNotFound) && <Loader  oMessage={loader.oMessage} />}
      <AlertDialog {...alert}></AlertDialog>
      <main>
        <Router />
      </main>
    </ErrorBoundary>
  );
};

export { App };

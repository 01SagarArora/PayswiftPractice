import { FC, ReactElement, useEffect } from 'react';
import { ErrorBoundary } from 'components';
import Router from 'router/Router';
import {  RootState, useAppDispatch } from 'store/store';
import AlertDialog from 'components/common/AlertDialog';
import './App.scss'
import { useSelector } from 'react-redux';
import Loader from "./components/Loader/Loader";
import { commonApi } from 'api/commonApi/apis';
import { setPendingList } from 'store/PostSlice/PostSlice';
import { GET_POSTS, GET_REASONS } from 'utils/constants';
import { REASON_REQUEST } from './models/ReasonData';
import { setReasonData, setReasonLoaded } from 'store/ReasonSlice/ReasonSlics';
import { Booking, PendingUpdate } from 'models/PendingUpdate';
import { tripData } from './mockData';
//import TSDialog from 'pages/TSDialog/TSDialog';

const App: FC = (): ReactElement => {
  const loader = useSelector((state: RootState) => state.loader);
  const alert = useSelector((state: RootState) => state.alert);
  const dispatch = useAppDispatch();
  
  useEffect(() => { 
    function getPendingActions(){
        dispatch(commonApi.endpoints.getApi.initiate({url: GET_POSTS}))
          .then((res)=>{
            let tripDataArray: Booking[] = [];
            let resp = res.data.data.length ? res.data : tripData;
            resp.data?.map((item:PendingUpdate) => {
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
    <ErrorBoundary>
       {loader.isLoading && <Loader oMessage={loader.oMessage} />}
       <AlertDialog {...alert}></AlertDialog>
        <Router />
    </ErrorBoundary>
  );
};

export { App };

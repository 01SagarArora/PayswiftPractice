import { commonS2SApi } from 'api';
import { Booking } from 'models/PendingUpdate';
import { setError } from 'store/Error/ErrorSlice';
import { setMainData, setToken } from 'store/MainData/MainDataSlice';
import { TRAVEL_STATUS_S2S_LIST_API } from 'utils/ApiConstants';
import { getKeyFromCookie } from 'utils/helpers';

const mainDataRequest = async (store: any, cookie: any) => { 
    store.dispatch(commonS2SApi.endpoints.getApi.initiate({ cookie, url: TRAVEL_STATUS_S2S_LIST_API })).then((res: any) => {
        try{
            const response = JSON.parse(res.data);
            const tempTripData: Booking[] = [];
            response?.data?.forEach((tripDataItem: any) => {
                tripDataItem.bookings?.forEach((bookingsItem: Booking) => {
                    tempTripData?.push(bookingsItem);
                })
            })
            store.dispatch(setMainData(tempTripData))
            let csrfToken = getKeyFromCookie('XSRF-TOKEN', cookie);
            store.dispatch(setToken(csrfToken))
        }catch(e){
            console.log(e)
            store.dispatch(setError())
            return false
        }       
    })
    return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { mainDataRequest };

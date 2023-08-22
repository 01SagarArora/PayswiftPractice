import { commonS2SApi } from 'api';
import { setError } from 'store/Error/ErrorSlice';
import { setMainData, setToken } from 'store/MainData/MainDataSlice';
import { TRAVEL_STATUS_S2S_LIST_API } from 'utils/constants';
import { getKeyFromCookie } from 'utils/helpers';
// import { tripMockData } from '../../mockData';
//const { appLogger } = require('../../utils/logger');

const mainDataRequest = async (store: any, cookie: any) => {
    
    store.dispatch(commonS2SApi.endpoints.getApi.initiate({ cookie, url: TRAVEL_STATUS_S2S_LIST_API })).then((res: any) => {
        //appLogger.info(`main data response ----------->>> ${res}`);
        try{
            const response = JSON.parse(res.data);
            const tempTripData: any[] = [];
            response?.data?.forEach((tripDataItem: any) => {
                tripDataItem.bookings?.forEach((bookingsItem: any) => {
                    tempTripData?.push(bookingsItem);
                })
            })
            let mainData = tempTripData
            store.dispatch(setMainData(mainData))
            let csrfToken = getKeyFromCookie('XSRF-TOKEN', cookie);
            store.dispatch(setToken(csrfToken))
        }catch(e){
            store.dispatch(setError())
            return false
        }       
    })
    return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { mainDataRequest };

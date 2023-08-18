import { commonS2SApi } from 'api';
import { setError } from 'store/Error/ErrorSlice';
import { setMainData,setToken } from 'store/MainData/mainDataSlice';
import { TRAVEL_STATUS_S2S_LIST_API } from 'utils/constants';
import { getKeyFromCookie } from 'utils/helpers';
//const { appLogger } = require('../../utils/logger');

// interface MainData {
//     mainData: object,
//     csrfToke: string
// }

// const mainDataWindow = typeof window !== 'undefined' && window as any;

const mainDataRequest = async (store: any,cookie:any) => {
    console.log("mainData========================>???>>>>>>>>>")
    store.dispatch(commonS2SApi.endpoints.getApi.initiate({cookie,url: TRAVEL_STATUS_S2S_LIST_API })).then((res: any) => {
        //appLogger.info(`main data response ----------->>> ${res}`);
        console.log("responseee",res.data)
        let mainData = res.data        
        console.log("main=============",mainData)
        if(typeof res.data === 'string'){
            try{
                mainData = JSON.parse(mainData); 
                console.log("mainData",mainData);  
            }
            catch(e){
                store.dispatch(setError())
                return false
            }
        }
        store.dispatch(setMainData(mainData))
        let csrfToken = getKeyFromCookie('XSRF-TOKEN',cookie);
        store.dispatch(setToken(csrfToken))
    })
    return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { mainDataRequest };

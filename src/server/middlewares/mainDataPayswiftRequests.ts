import { commonS2SApi } from 'api';
import { PaymentLabelOption } from '../../models/PaymentOptions';
import { setError } from 'store/Error/ErrorSlice';
import { setPaymentMainData } from 'store/PaymentMainData/PaymentMainDataSlice'
import { PAYSWIFT_S2S_LIST_API } from 'utils/ApiConstants';

const mainDataPaymentRequest = async (store: any, cookie: any) => {
    store.dispatch(commonS2SApi.endpoints.getApi.initiate({ cookie, url: PAYSWIFT_S2S_LIST_API })).then((res: any) => {
        try {            
            const response = JSON.parse(res.data);            
            const tempPaymentOptionsDataOfficial: any[] = [];
            response?.agentPaymentOptions?.paymentOptions?.official?.forEach((PaymentOptionItem: PaymentLabelOption) => {
                tempPaymentOptionsDataOfficial?.push(PaymentOptionItem)
            })            
            store.dispatch(setPaymentMainData(tempPaymentOptionsDataOfficial));
        } catch (e) {
            store.dispatch(setError())
            return false
        }
    })
    return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};

export { mainDataPaymentRequest };

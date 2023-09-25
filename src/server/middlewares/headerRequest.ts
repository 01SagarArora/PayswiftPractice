import { commonS2SApi } from 'api';
import { HEADER_URL } from 'utils/ApiConstants';
import { getKeyFromCookie, urlFormatter } from 'utils/helpers';

const logger = require('../../utils/logger');
const frescoHeaderUrl = HEADER_URL;

const headerRequest = async (store: any,cookie:any,setHeaderValue:any) => {
  let ssoToken = getKeyFromCookie('ssoToken',cookie);
  let userType = getKeyFromCookie('userType',cookie);
  const headerUrlWithSsoToken = urlFormatter(frescoHeaderUrl,[ssoToken,userType]);
  store.dispatch(commonS2SApi.endpoints.getApi.initiate({url:headerUrlWithSsoToken})).then((res:any)=>{    
  logger.info(`cookie ----------->>> ${cookie}`);
    setHeaderValue('header',res.data);
  });
 return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { headerRequest };
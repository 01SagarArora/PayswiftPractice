import { headerFooterApi } from 'api';
import { HEADER_URL } from 'utils/constants';
import { getKeyFromCookie, urlFormatter } from 'utils/helpers';

const logger = require('../../utils/logger');
const frescoHeaderUrl = HEADER_URL;

const headerRequest = async (store: any,cookie:any,setHeaderValue:any) => {
  let ssoToken = getKeyFromCookie('ssoToken',cookie);
  let userType = getKeyFromCookie('userType',cookie);
  const headerUrlWithSsoToken = urlFormatter(frescoHeaderUrl,[ssoToken,userType]);
  store.dispatch(headerFooterApi.endpoints.getFooterHeader.initiate({url:headerUrlWithSsoToken})).then((res:any)=>{    
  logger.info(`cookie ----------->>> ${cookie}`);
    setHeaderValue('header',res.data);
  });
 return Promise.all(store.dispatch(headerFooterApi.util.getRunningQueriesThunk()));
};
export { headerRequest };
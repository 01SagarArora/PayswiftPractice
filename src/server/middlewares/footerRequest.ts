import { headerFooterApi } from 'api';
import { getKeyFromCookie, urlFormatter } from 'utils/helpers';
import { FOOTER_URL } from 'utils/constants'

const frescoFooterUrl = FOOTER_URL;

const footerRequest = async (store: any,cookie:any,setFooterValue:any) => {
  let ssoToken = getKeyFromCookie('ssoToken',cookie);
  let userType = getKeyFromCookie('userType',cookie);
  const footerUrlWithSsoToken = urlFormatter(frescoFooterUrl,[ssoToken,userType]);
  
  store.dispatch(headerFooterApi.endpoints.getFooterHeader.initiate({url:footerUrlWithSsoToken})).then((res:any)=>{
    setFooterValue('footer',res.data);
  });
 return Promise.all(store.dispatch(headerFooterApi.util.getRunningQueriesThunk()));
};
export { footerRequest };
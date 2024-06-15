export const DEV_BASE_URL = 'https://dev.yatra.com';
export const RFS_BASE_URL = 'https://www.yatra.com';
export const PROD_BASE_URL = 'https://secure.yatra.com';
export const BASE_URL = process.env.NODE_ENV==='development' ? DEV_BASE_URL: RFS_BASE_URL
export const FINCH_URL = "http://finch.default.svc.yatra";
export const LOGIN_URL = '/social/custom/crp/login.htm?'
export const HEADER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/service?name=B2B_HEADER&firstPageLoad=true&ssoToken={0}&userType={1}`;
export const FOOTER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/dom/service?name=FOOTER&dataType=hook&ssoToken={0}&userType={1}`;
export const TRAVEL_STATUS_S2S_LIST_API = 'http://finch.default.svc.yatra/finch/listPendingUpdates'
export const PAYSWIFT_S2S_LIST_API = 'http://localhost:3001/data'
export const GET_REASONS_S2S = 'http://corpservice.yatra.com/falcon/configuration/api'
export const UPDATE_TRAVEL_STATUS = 'https://secure.yatra.com/travel-status/updateTravelStatus'
export const GET_REASONS_AJAX_API = '/travel-status-v2/getReasons'


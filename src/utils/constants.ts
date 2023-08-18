export const DEV_BASE_URL = 'https://dev.yatra.com';
export const RFS_BASE_URL = 'https://www.yatra.com';
export const PROD_BASE_URL = 'https://secure.yatra.com';
export const BASE_URL = process.env.NODE_ENV==='development' ? DEV_BASE_URL: RFS_BASE_URL

export const HEADER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/service?name=B2B_HEADER&firstPageLoad=true&ssoToken={0}&userType={1}`;
export const FOOTER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/dom/service?name=FOOTER&dataType=hook&ssoToken={0}&userType={1}`;
export const TRAVEL_STATUS_TRIP_API = '/finch/listPendingUpdates';
export const TRAVEL_STATUS_CONFIG_API = '/falcon/configuration/api';
export const TRAVEL_STATUS_REASONS_API = '/reasons';
export const TRAVEL_STATUS_S2S_LIST_API = 'http://finch.default.svc.yatra/finch/listPendingUpdates'






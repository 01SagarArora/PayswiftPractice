export const DEV_BASE_URL = 'https://dev.yatra.com';
export const RFS_BASE_URL = 'https://www.yatra.com';
export const PROD_BASE_URL = 'https://secure.yatra.com';
export const BASE_URL = process.env.NODE_ENV==='development' ? DEV_BASE_URL: RFS_BASE_URL
export const FINCH_URL = "http://finch.default.svc.yatra"

export const HEADER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/service?name=B2B_HEADER&firstPageLoad=true&ssoToken={0}&userType={1}`
export const FOOTER_URL = `http://fresco.ui.service/fresco/corporate/en/flights/dom/service?name=FOOTER&dataType=hook&ssoToken={0}&userType={1}`

export const GET_REASONS = '/falcon/configuration/api'
export const GET_POSTS = '/finch/listPendingUpdates'
export const GET_CONFIG = ''
export const UPDATE_TRAVEL_STATUS = '/finch/updateTravelStatus'
export const PRRODUCT_NAME = {
}

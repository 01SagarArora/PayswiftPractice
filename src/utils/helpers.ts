import { ROUTE_CONSTANTS } from 'constants/routeConstants';


export const isServer: boolean = !(
  typeof window !== 'undefined'
);

export const checkPage = (url: string) =>
  (Object.values(ROUTE_CONSTANTS)
    .some(route => url.includes(route) && !url.includes('.') && route !== '/')) || url === '/';



export const urlFormatter =  (str:any, data:any) => {
  if (typeof str === 'string' && (data instanceof Array)) {
    return str.replace(/({\d})/g, function (i:any) {
      return data[i.replace(/{/, '').replace(/}/, '')]
    })
  } else if (typeof str === 'string' && (data instanceof Object)) {
    for (let key in data) {
      return str.replace(/({([^}]+)})/g, function (i) {
        key = i.replace(/{/, '').replace(/}/, '')
        if (!data[key]) {
          return i
        }
        return data[key]
      })
    }
  } else {
    return false
  }
}

export const getKeyFromCookie = (key:string,cookieStr:string)=>{
  let cookie = {} as any;
  cookieStr?.split(';').forEach(function(el) {
    let [k,v] = el.split('=');
    cookie[k.trim()] = v;
  })
  return cookie[key];
}

export const YT_TRAVEL_DATA = {
  reasons:[
    {
    'label': 'Missed my flight',
    'value': 'Missed my flight'
    }, {
      'label': 'Cancellation requested online on Yatra',
      'value': 'Cancellation requested online on Yatra'
    }, {
      'label': 'Cancellation request sent via Email',
      'value': 'Cancellation request sent via Email'
    }, {
      'label': 'Cancelled directly on Airline website / app',
      'value': 'Cancelled directly on Airline website / app'
    }, {
      'label': 'My reason is not listed here',
      'value': 'My reason is not listed here'
    }
  ],
  defaultSelectedReason : 'Missed my flight',
  minReasonTextLength: 10,
  loginError: 'technical Error.Please try again',
  noReasonText: 'Others',
  noReasonMasterType: 'master',
  noReasonBothType: 'both',
  noReasonFreeTextType: 'freeText',
  technicalError : 'technical error Please try again',
  loginRedirection : 'https://secure.yatra.com/social/custom/crp/login.htm?returnUrl=https://secure.yatra.com/travel-status/home',
  genericErrorMessage : 'Something went wrong please try after some time'
}
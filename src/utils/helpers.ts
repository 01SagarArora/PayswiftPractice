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
import { buildCreateApi, coreModule, reactHooksModule, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isServer } from 'utils';
import {  PROD_BASE_URL ,BASE_URL}  from "../../utils/constants";

let createApiFunction = createApi;

/*
For data prefetching during SSR we need to use a modified createApi function.
You can remove this modification if you do not need this api to be used on the server.
*/
if (isServer) {
  createApiFunction = buildCreateApi(
    coreModule(),
    // eslint-disable-next-line camelcase
    reactHooksModule({ unstable__sideEffectsInRender: true }),
  );
}


//GET Api S2S
export const commonS2SApi = createApiFunction({
  reducerPath: 'commonS2SApi',
    baseQuery : fetchBaseQuery({
    baseUrl: PROD_BASE_URL,
  }),
  endpoints: builder => ({
    getApi: builder.query<any, any>({
      query:({url})=> ( {
       url,
       headers: {
        'content-type': 'text/plain',
       },
       responseHandler: (response: { text: () => any }) => response.text()
      }),
    }),
    postApi: builder.query<any, any>({
      query:({cookie,url,data})=> ( {
       url,
       method: 'POST',
       headers: {
        'content-type': 'text/plain',
        'cookie':cookie,
       },
       'body':data,
       responseHandler: (response: { text: () => any }) => response.text()
      }),
  })
})
})

export const commonApi = createApiFunction({
  reducerPath: 'commonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: builder => ({
    getApi: builder.query<any, any>({
      query: ({ url , params }) => {
        return {
          url,
          headers: {
            'content-type': 'application/json;charset=UTF-8',
            'Access-Control-Allow-Origin': '*'
          },
          params : params,
        }
      },
    }),
    postApi: builder.query<any, any>({
      query: ({url, data }) => {
        return {
          url,
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          'body': data,
        }
      },
    })
  })
})
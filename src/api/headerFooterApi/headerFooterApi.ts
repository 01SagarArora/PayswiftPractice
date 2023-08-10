import { buildCreateApi, coreModule, reactHooksModule, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isServer } from 'utils';
import { PROD_BASE_URL } from 'utils/constants';


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

export const headerFooterApi = createApiFunction({
  reducerPath: 'headerFooterApi',
    baseQuery : fetchBaseQuery({
      baseUrl:PROD_BASE_URL
  }),
  endpoints: builder => ({
    getFooterHeader: builder.query<any, any>({
      query:({url})=>  {
      return {url,
       method: "GET",
       responseHandler: (response) => response.text()       
      }},
    }),
    
  })
});


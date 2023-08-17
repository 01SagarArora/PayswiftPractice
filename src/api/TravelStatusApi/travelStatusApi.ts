import { buildCreateApi, coreModule, reactHooksModule, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isServer } from 'utils';
import { BASE_URL, TRAVEL_STATUS_CONFIG_API, TRAVEL_STATUS_REASONS_API, TRAVEL_STATUS_TRIP_API } from "../../utils/constants";


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


export const travelStatusTripApi = createApiFunction({
  reducerPath: 'travelStatusTripApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }
  ),
  endpoints: builder => ({
    getTripData: builder.query({
      query: () => {
        let url = TRAVEL_STATUS_TRIP_API;
        return {
          url: url,
          method: "GET",
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          responseHandler: (response: { text: () => any }) => response.text()
        };
      },
    }),

    getConfigData: builder.query({
      query: (arg) => {
        let url = TRAVEL_STATUS_CONFIG_API;
        return {
          url: url,
          method: "POST",
          body: arg,
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        };
      },
    }),

    getReasons: builder.query({
      query: (arg) => {
        let url = TRAVEL_STATUS_REASONS_API;
        return {
          url: url,
          method: "POST",
          body: arg,
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        };
      },
    }),
  })
});
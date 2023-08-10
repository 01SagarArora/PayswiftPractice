import { buildCreateApi, coreModule, reactHooksModule, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { isServer } from 'utils';

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

export const pokemonApi = createApiFunction({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    prepareHeaders: (headers) => {
      headers.set("cookie", "ssoToken=bd998794-83e5-4394-bb64-b6e48a099fda")
      return headers
    }
  }),
  endpoints: (builder) => ({
    getFlightMainData: builder.query({
      query: () => 'https://local.yatra.com/corp-air-search/crpdom/triggerJson?flight_depart_date=21/04/2023&origin=DEL&originCountry=IN&destination=GOI&destinationCountry=IN&depart_time_1_from=&depart_time_1_to=&class=Economy&type=O&non_stop=0&flexi=0&noOfSegments=1&marineFare=false&isTripProduct=false&tripId=TA1904230040495&viewName=normal&source=trip-booking-engine&booking-type=official&ADT=1&CHD=0&INF=0'
    }),
  }),
})
import { commonS2SApi } from 'api';
import { Booking } from 'models/PendingUpdate';
import { setError } from 'store/Error/ErrorSlice';
import { setMainData, setToken } from 'store/MainData/MainDataSlice';
import { TRAVEL_STATUS_S2S_LIST_API } from 'utils/ApiConstants';
import { getKeyFromCookie } from 'utils/helpers';


// const mockData = {
//     "status": "success",
//     "httpCode": 200,
//     "message": null,
//     "data": [
//         {
//             "superPnr": "RQS7418075",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-25 11:00:00.000",
//                     "endDate": "2023-10-25 00:00:00.000",
//                     "cityCode": "DELHI - ALL STATIONS",
//                     "hotelName": "shatabdi",
//                     "hotelAddress": "DELHI - ALL STATIONS-MUMBAI - ALL STATIONS",
//                     "paxId": "4391936",
//                     "updateStatus": null,
//                     "itineraryId": "2077682",
//                     "itineraryType": "Domestic",
//                     "id": "65341e96b5e5fe00303c82d2",
//                     "TripId": "TA2609230031197",
//                     "BookingId": "4276270",
//                     "bookingType": "TRAIN",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418191",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-06 00:00:00.000",
//                     "endDate": "2023-10-08 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Business - Multiple Entry",
//                     "hotelAddress": "Canada",
//                     "paxId": "4392072",
//                     "updateStatus": null,
//                     "itineraryId": "2077716",
//                     "itineraryType": "International",
//                     "id": "651e9dc9b5e5fe00303c2730",
//                     "TripId": "TA0510230102558",
//                     "BookingId": "4276348",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062524",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062511",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062511",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062533",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062500",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062501",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062502",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062503",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         },
//         {
//             "superPnr": "RQS7418081",
//             "bookings": [
//                 {
//                     "startDate": "2023-10-18 00:00:00.000",
//                     "endDate": "2023-10-21 00:00:00.000",
//                     "cityCode": "",
//                     "hotelName": "Tourist",
//                     "hotelAddress": "USA",
//                     "paxId": "4391942",
//                     "updateStatus": null,
//                     "itineraryId": "2077685",
//                     "itineraryType": "International",
//                     "id": "652ed7e1b5e5fe00303c79da",
//                     "TripId": "TA2609230062504",
//                     "BookingId": "4276276",
//                     "bookingType": "VISA",
//                     "PaxName": "Noopur Khare"
//                 }
//             ]
//         }
//     ]
// }

const mainDataRequest = async (store: any, cookie: any) => { 
    store.dispatch(commonS2SApi.endpoints.getApi.initiate({ cookie, url: TRAVEL_STATUS_S2S_LIST_API })).then((res: any) => {
        try{
            const response = JSON.parse(res.data);
            const tempTripData: Booking[] = [];
            response?.data?.forEach((tripDataItem: any) => {
                tripDataItem.bookings?.forEach((bookingsItem: Booking) => {
                    tempTripData?.push(bookingsItem);
                })
            })
            store.dispatch(setMainData(tempTripData))
            let csrfToken = getKeyFromCookie('userName', cookie);
            store.dispatch(setToken(csrfToken))
        }catch(e){
            console.log(e)
            store.dispatch(setError())
            return false
        }       
    })
    return Promise.all(store.dispatch(commonS2SApi.util.getRunningQueriesThunk()));
};
export { mainDataRequest };

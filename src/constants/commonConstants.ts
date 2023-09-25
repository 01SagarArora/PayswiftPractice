export const APP_NAME = 'App Name';

export const PAGE_NAMES = {
  ABOUT: 'About',
  FETCH: 'Fetch',
  HOME: 'Home',
  PAGE_NOT_FOUND: 'Page Not Found',
};

export const ABOUT_TEXT = 'About page';
export const FETCH_TEXT = 'Fetch page';
export const HOME_TEXT = 'Home page';
export const LOADABLE_TEXT = 'This is a loadable component';
export const NOT_FOUND_TEXT = 'Wrong page, sorry...';
export const BUTTON_TEXT = 'Click Me';
export const OFFLINE_TEXT = 'Offline';

export const COUNTER_DESCRIPTION = {
  LOCAL: 'Local State',
  GLOBAL: 'Global State',
};

// https://javascript.plainenglish.io/typescript-enums-i-want-to-actually-use-3ec989ea1158
export const enum THEME_NAMES {
  LIGHT = 'Light',
  DARK = 'Dark',
}

export const THEME_SWITCHER_DESCRIPTION = 'Theme switcher';

export const TRAVEL_STATUS_PAGE = {
  TRAVEL_STATUS:"Travel Status",
  INFO_CONTENT: "Your Travel policy mandates you to update if you have availed your booked flights or hotels. If you do not update this info your expense claims can be rejected & future booking may be denied.",
  SHOW_RESULTS: "Showing results"
}

export const ALERT_DIALOG = {
  TRY_AGAIN_MESSAGE: "Please Try After Sometime",
  DIALOG_TITLE: "Error"
}

export const NO_DATA_FOUND_PAGE = {
  NOT_FOUND: "Sorry, No Data Found",
  NOT_FOUND_TITLE: "There were no Travel Status found for this scenario."
}

export type ProductBookingType = "HOTEL" | "VISA" | "FLIGHTS" | "TRAIN" | "CAR" | "BUS" | "AIR";
export const ListPerPage = 10;

export const DUMMY_DATA = {
	"data": [
		{
			"superPnr": "1902210030375",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5152081",
					"segmentId": "4546150",
					"itineraryType": "Domestic",
					"id": "60321dd24739a100011f96b2",
					"TripId": "TA1902210029953",
					"BookingId": "4465947",
					"bookingType": "AIR",
					"PaxName": "Mr Manish  Agrawal",
					"description": "Go Air(G8-101)",
					"itineraryId": "3968056",
					"Origin": "DEL",
					"Destination": "CCU",
					"FlightDeparture": "21-02-2021 10:35 AM",
					"FlightArrival": "21-02-2021 12:40 PM"
				}
			]
		},
		{
			"superPnr": "151188077741",
			"bookings": [
				{
					"startDate": "2018-11-15 14:00:00.000",
					"endDate": "2018-11-16 12:00:00.000",
					"cityCode": "HYDERABAD",
					"hotelName": "Taj Krishna Hyderabad",
					"hotelAddress": "Road No. 1, Banjara Hills,  Banjara Hills HYDERABAD TELANGANA,",
					"paxId": "2352259",
					"updateStatus": "pending",
					"itineraryId": "758431",
					"itineraryType": "Domestic",
					"id": "5d49c9602b93f9000127173b",
					"TripId": "TA151189877174",
					"BookingId": "2045264",
					"bookingType": "HOTEL",
					"PaxName": "TravelDesk PWC"
				}
			]
		},
		{
			"superPnr": "1510200007634",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4947780",
					"segmentId": "4389870",
					"itineraryType": "Domestic",
					"id": "5f89cf2494965000011e51d0",
					"TripId": "TA1510200007569",
					"BookingId": "4290478",
					"bookingType": "AIR",
					"PaxName": "Mr Arpan  Datta",
					"description": "IndiGo(6E-6107)",
					"itineraryId": "3822809",
					"Origin": "PAT",
					"Destination": "CCU",
					"FlightDeparture": "16-10-2020 08:10 PM",
					"FlightArrival": "16-10-2020 09:15 PM"
				}
			]
		},
		{
			"superPnr": "1902210009732",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151877",
					"segmentId": "4545975",
					"itineraryType": "Domestic",
					"id": "6030cc554739a100011f9639",
					"TripId": "TA1902210009580",
					"BookingId": "4465765",
					"bookingType": "AIR",
					"PaxName": "Mr Sibabrata  Gupta",
					"description": "AirAsia India(I5-517)",
					"itineraryId": "3967896",
					"Origin": "HYD",
					"Destination": "CCU",
					"FlightDeparture": "20-02-2021 11:15 AM",
					"FlightArrival": "20-02-2021 01:15 PM"
				}
			]
		},
		{
			"superPnr": "0505220125725",
			"bookings": [
				{
					"startDate": "2022-05-08 12:00:00.000",
					"endDate": "2022-05-09 12:00:00.000",
					"cityCode": "AHMEDABAD",
					"hotelName": "Hotel Flair Inn",
					"hotelAddress": "2nd Floor,Abhinav Aarcade, Ashram Road, Pritam Nagar, Paldi, Near Kothawala Flat, Pritamnagar,Paldi.Paldi",
					"paxId": "6378552",
					"updateStatus": "pending",
					"itineraryId": "1713895",
					"itineraryType": "Domestic",
					"id": "627a2786ed19f10001386b36",
					"TripId": "TA0505220123884",
					"BookingId": "5497691",
					"bookingType": "HOTEL",
					"PaxName": "bhavesh choudhary"
				},
				{
					"startDate": "2022-05-09 12:00:00.000",
					"endDate": "2022-05-10 12:00:00.000",
					"cityCode": "AHMEDABAD",
					"hotelName": "Hotel Flair Inn",
					"hotelAddress": "2nd Floor,Abhinav Aarcade, Ashram Road, Pritam Nagar, Paldi, Near Kothawala Flat, Pritamnagar,Paldi.Paldi",
					"paxId": "6378552",
					"updateStatus": "pending",
					"itineraryId": "1713895",
					"itineraryType": "Domestic",
					"id": "627a2786ed19f10001386b37",
					"TripId": "TA0505220123884",
					"BookingId": "5497691",
					"bookingType": "HOTEL",
					"PaxName": "bhavesh choudhary"
				}
			]
		},
		{
			"superPnr": "1802210128077",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151716",
					"segmentId": "4545881",
					"itineraryType": "Domestic",
					"id": "602f5eb44739a100011f94b1",
					"TripId": "TA1802210127538",
					"BookingId": "4465635",
					"bookingType": "AIR",
					"PaxName": "Ms Shikha  Sharma",
					"description": "Vistara(UK-815)",
					"itineraryId": "3967806",
					"Origin": "DEL",
					"Destination": "BLR",
					"FlightDeparture": "19-02-2021 08:20 AM",
					"FlightArrival": "19-02-2021 11:05 AM"
				},
				{
					"updateStatus": "Availed",
					"paxId": "5151716",
					"segmentId": "4545882",
					"itineraryType": "Domestic",
					"id": "603015824739a100011f95ae",
					"TripId": "TA1802210127538",
					"BookingId": "4465635",
					"bookingType": "AIR",
					"PaxName": "Ms Shikha  Sharma",
					"description": "Vistara(UK-814)",
					"itineraryId": "3967807",
					"Origin": "BLR",
					"Destination": "DEL",
					"FlightDeparture": "19-02-2021 09:20 PM",
					"FlightArrival": "19-02-2021 11:55 PM"
				}
			]
		},
		{
			"superPnr": "1012200003572",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "5019317",
					"segmentId": "4445703",
					"itineraryType": "International",
					"id": "5fd544874739a100011f657e",
					"TripId": "TA1012200003371",
					"BookingId": "4352333",
					"bookingType": "AIR",
					"PaxName": "Mr Arpit  Vijayvargiya",
					"description": "Air India(AI-161)",
					"itineraryId": "3874502",
					"Origin": "DEL",
					"Destination": "LHR",
					"FlightDeparture": "02-01-2021 04:20 AM",
					"FlightArrival": "02-01-2021 07:50 AM"
				},
				{
					"updateStatus": "pending",
					"paxId": "5019317",
					"segmentId": "4445702",
					"itineraryType": "International",
					"id": "5fd544874739a100011f657f",
					"TripId": "TA1012200003371",
					"BookingId": "4352333",
					"bookingType": "AIR",
					"PaxName": "Mr Arpit  Vijayvargiya",
					"description": "Air India(AI-162)",
					"itineraryId": "3874502",
					"Origin": "LHR",
					"Destination": "DEL",
					"FlightDeparture": "12-12-2020 08:45 AM",
					"FlightArrival": "12-12-2020 10:25 PM"
				},
				{
					"updateStatus": "pending",
					"paxId": "5019317",
					"segmentId": "4490850",
					"itineraryType": "International",
					"id": "600794674739a100011f79cc",
					"TripId": "TA1012200003371",
					"BookingId": "4352333",
					"bookingType": "AIR",
					"PaxName": "Mr Arpit  Vijayvargiya",
					"description": "Air India(AI-161)",
					"itineraryId": "3916319",
					"Origin": "DEL",
					"Destination": "LHR",
					"FlightDeparture": "20-01-2021 03:05 AM",
					"FlightArrival": "20-01-2021 06:35 AM"
				},
				{
					"updateStatus": "Availed",
					"paxId": "5019317",
					"segmentId": "4490849",
					"itineraryType": "International",
					"id": "600794674739a100011f79ce",
					"TripId": "TA1012200003371",
					"BookingId": "4352333",
					"bookingType": "AIR",
					"PaxName": "Mr Arpit  Vijayvargiya",
					"description": "Air India(AI-162)",
					"itineraryId": "3916319",
					"Origin": "LHR",
					"Destination": "DEL",
					"FlightDeparture": "12-12-2020 08:45 AM",
					"FlightArrival": "12-12-2020 10:25 PM"
				}
			]
		},
		{
			"superPnr": "23019943109",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2635621",
					"segmentId": "2284352",
					"itineraryType": "Domestic",
					"id": "5c6d28e7e5b3040001f99b50",
					"TripId": "TA2301954419",
					"BookingId": "2287502",
					"bookingType": "AIR",
					"PaxName": "Ms charmaine moules",
					"description": "IndiGo(6E-6939)",
					"itineraryId": "1977188",
					"Origin": "BOM",
					"Destination": "BLR",
					"FlightDeparture": "20-02-2019 12:40 PM",
					"FlightArrival": "20-02-2019 02:20 PM"
				},
				{
					"updateStatus": "pending",
					"paxId": "2635621",
					"segmentId": "2284353",
					"itineraryType": "Domestic",
					"id": "5c72cf3ae5b3040001f9ab3d",
					"TripId": "TA2301954419",
					"BookingId": "2287502",
					"bookingType": "AIR",
					"PaxName": "Ms charmaine moules",
					"description": "Jet Airways(9W-816)",
					"itineraryId": "1977189",
					"Origin": "BLR",
					"Destination": "DEL",
					"FlightDeparture": "24-02-2019 05:45 PM",
					"FlightArrival": "24-02-2019 08:45 PM"
				}
			]
		},
		{
			"superPnr": "3010200010440",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4969962",
					"segmentId": "4408073",
					"itineraryType": "Domestic",
					"id": "5f9c0be4f12d640001f8616d",
					"TripId": "TA3010200010295",
					"BookingId": "4310455",
					"bookingType": "AIR",
					"PaxName": "Mr Sudip  Datta",
					"description": "IndiGo(6E-6616)",
					"itineraryId": "3839992",
					"Origin": "CCU",
					"Destination": "DEL",
					"FlightDeparture": "30-10-2020 02:35 PM",
					"FlightArrival": "30-10-2020 05:15 PM"
				}
			]
		},
		{
			"superPnr": "3110200019475",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4970972",
					"segmentId": "4408764",
					"itineraryType": "Domestic",
					"id": "5f9d3334f12d640001f861ac",
					"TripId": "TA3010200009752",
					"BookingId": "4311274",
					"bookingType": "AIR",
					"PaxName": "Mr Praveen Kumar  Mishra",
					"description": "Air India(AI-560)",
					"itineraryId": "3840615",
					"Origin": "HYD",
					"Destination": "DEL",
					"FlightDeparture": "31-10-2020 12:05 PM",
					"FlightArrival": "31-10-2020 02:15 PM"
				}
			]
		},
		{
			"superPnr": "1902210049868",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5152416",
					"segmentId": "4546461",
					"itineraryType": "Domestic",
					"id": "60369ef49fe9610001293b2c",
					"TripId": "TA1902210048032",
					"BookingId": "4466247",
					"bookingType": "AIR",
					"PaxName": "Mr Vishal  Poddar",
					"description": "IndiGo(6E-413)",
					"itineraryId": "3968344",
					"Origin": "HYD",
					"Destination": "BOM",
					"FlightDeparture": "24-02-2021 09:30 PM",
					"FlightArrival": "24-02-2021 11:10 PM"
				},
				{
					"updateStatus": "Availed",
					"paxId": "5152416",
					"segmentId": "4546462",
					"itineraryType": "Domestic",
					"id": "6038d1769fe9610001293d04",
					"TripId": "TA1902210048032",
					"BookingId": "4466247",
					"bookingType": "AIR",
					"PaxName": "Mr Vishal  Poddar",
					"description": "SpiceJet(SG-271)",
					"itineraryId": "3968345",
					"Origin": "BOM",
					"Destination": "IXR",
					"FlightDeparture": "26-02-2021 12:05 PM",
					"FlightArrival": "26-02-2021 02:20 PM"
				}
			]
		},
		{
			"superPnr": "0611200000565",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4976522",
					"segmentId": "4412679",
					"itineraryType": "Domestic",
					"id": "5fabfa050cb32c0001e2ca52",
					"TripId": "TA0611200000314",
					"BookingId": "4315858",
					"bookingType": "AIR",
					"PaxName": "Mr Sanjay  Bhirud",
					"description": "AirAsia India(I5-1427)",
					"itineraryId": "3844121",
					"Origin": "JAI",
					"Destination": "PNQ",
					"FlightDeparture": "11-11-2020 05:20 PM",
					"FlightArrival": "11-11-2020 06:55 PM"
				}
			]
		},
		{
			"superPnr": "899088",
			"bookings": [
				{
					"startDate": "2019-04-02 12:00:00.000",
					"endDate": "2019-04-03 11:00:00.000",
					"cityCode": "KOLKATA",
					"hotelName": "Treebo Trend Sreemaa",
					"hotelAddress": "4TH FR 290 MAIN ROAD LP 416 3 RAJ DANGA KOLKATA WEST BENGAL 700107,700107,",
					"paxId": "2956803",
					"updateStatus": "pending",
					"itineraryId": "899088",
					"itineraryType": "Domestic",
					"id": "5ca461c472c66300013f342b",
					"TripId": "TA0204987362513",
					"BookingId": "2562451",
					"bookingType": "HOTEL",
					"PaxName": "Ayan Majumder"
				}
			]
		},
		{
			"superPnr": "902462",
			"bookings": [
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Siesta - Andheri (Business Hotel) - Guest House",
					"hotelAddress": "5, New Nagardas Rd, Andheri East,Andheri East",
					"paxId": "2979692",
					"updateStatus": "pending",
					"itineraryId": "902462",
					"itineraryType": "Domestic",
					"id": "5cadb0bcf1bc2500015c9373",
					"TripId": "TA0604910303100",
					"BookingId": "2581280",
					"bookingType": "HOTEL",
					"PaxName": "Jinu Thankachan"
				},
				{
					"startDate": "2019-04-08 12:00:00.000",
					"endDate": "2019-04-09 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Siesta - Andheri (Business Hotel) - Guest House",
					"hotelAddress": "5, New Nagardas Rd, Andheri East,Andheri East",
					"paxId": "2979692",
					"updateStatus": "pending",
					"itineraryId": "902462",
					"itineraryType": "Domestic",
					"id": "5cadb0bcf1bc2500015c9374",
					"TripId": "TA0604910303100",
					"BookingId": "2581280",
					"bookingType": "HOTEL",
					"PaxName": "Jinu Thankachan"
				},
				{
					"startDate": "2019-04-09 12:00:00.000",
					"endDate": "2019-04-10 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Siesta - Andheri (Business Hotel) - Guest House",
					"hotelAddress": "5, New Nagardas Rd, Andheri East,Andheri East",
					"paxId": "2979692",
					"updateStatus": "pending",
					"itineraryId": "902462",
					"itineraryType": "Domestic",
					"id": "5cadb0bcf1bc2500015c9375",
					"TripId": "TA0604910303100",
					"BookingId": "2581280",
					"bookingType": "HOTEL",
					"PaxName": "Jinu Thankachan"
				},
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Siesta - Andheri (Business Hotel) - Guest House",
					"hotelAddress": "5, New Nagardas Rd, Andheri East,Andheri East",
					"paxId": "2979693",
					"updateStatus": "pending",
					"itineraryId": "902462",
					"itineraryType": "Domestic",
					"id": "5cadb0bcf1bc2500015c9376",
					"TripId": "TA0604910303100",
					"BookingId": "2581280",
					"bookingType": "HOTEL",
					"PaxName": "Amit Vyas"
				},
				{
					"startDate": "2019-04-08 12:00:00.000",
					"endDate": "2019-04-09 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Siesta - Andheri (Business Hotel) - Guest House",
					"hotelAddress": "5, New Nagardas Rd, Andheri East,Andheri East",
					"paxId": "2979693",
					"updateStatus": "pending",
					"itineraryId": "902462",
					"itineraryType": "Domestic",
					"id": "5cadb0bcf1bc2500015c9377",
					"TripId": "TA0604910303100",
					"BookingId": "2581280",
					"bookingType": "HOTEL",
					"PaxName": "Amit Vyas"
				},
				{
					"startDate": "2019-04-09 12:00:00.000",
					"endDate": "2019-04-10 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Siesta - Andheri (Business Hotel) - Guest House",
					"hotelAddress": "5, New Nagardas Rd, Andheri East,Andheri East",
					"paxId": "2979693",
					"updateStatus": "pending",
					"itineraryId": "902462",
					"itineraryType": "Domestic",
					"id": "5cadb0bcf1bc2500015c9378",
					"TripId": "TA0604910303100",
					"BookingId": "2581280",
					"bookingType": "HOTEL",
					"PaxName": "Amit Vyas"
				}
			]
		},
		{
			"superPnr": "1802210117332",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151600",
					"segmentId": "4551660",
					"itineraryType": "Domestic",
					"id": "603523479fe9610001293a32",
					"TripId": "TA1802210117005",
					"BookingId": "4465536",
					"bookingType": "AIR",
					"PaxName": "Mr T  Venkateswaran",
					"description": "IndiGo(6E-818)",
					"itineraryId": "3973196",
					"Origin": "BOM",
					"Destination": "BLR",
					"FlightDeparture": "23-02-2021 05:45 PM",
					"FlightArrival": "23-02-2021 07:40 PM"
				}
			]
		},
		{
			"superPnr": "1411200007503",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4983794",
					"segmentId": "4417788",
					"itineraryType": "Domestic",
					"id": "5faf53d40cb32c0001e2cb6b",
					"TripId": "TA1411200007457",
					"BookingId": "4321648",
					"bookingType": "AIR",
					"PaxName": "Mr Kamalesh Parasamal  Lunkad",
					"description": "IndiGo(6E-699)",
					"itineraryId": "3848608",
					"Origin": "BLR",
					"Destination": "PNQ",
					"FlightDeparture": "14-11-2020 06:40 AM",
					"FlightArrival": "14-11-2020 08:15 AM"
				}
			]
		},
		{
			"superPnr": "904567",
			"bookings": [
				{
					"startDate": "2019-04-10 14:00:00.000",
					"endDate": "2019-04-11 14:00:00.000",
					"cityCode": "BHUBANESHWAR",
					"hotelName": "Ginger Bhubaneshwar",
					"hotelAddress": "Opposite Nalco Headquarters, Joydev Vihar, Nayapalli  Nayapalli,",
					"paxId": "2991981",
					"updateStatus": "pending",
					"itineraryId": "904567",
					"itineraryType": "Domestic",
					"id": "5cb0561bf1bc2500015ca051",
					"TripId": "TA0904939439898",
					"BookingId": "2591847",
					"bookingType": "HOTEL",
					"PaxName": "Asit Chatterji"
				},
				{
					"startDate": "2019-04-11 14:00:00.000",
					"endDate": "2019-04-12 12:00:00.000",
					"cityCode": "BHUBANESHWAR",
					"hotelName": "Ginger Bhubaneshwar",
					"hotelAddress": "Opposite Nalco Headquarters, Joydev Vihar, Nayapalli  Nayapalli,",
					"paxId": "2991981",
					"updateStatus": "pending",
					"itineraryId": "904567",
					"itineraryType": "Domestic",
					"id": "5cb0561bf1bc2500015ca052",
					"TripId": "TA0904939439898",
					"BookingId": "2591847",
					"bookingType": "HOTEL",
					"PaxName": "Asit Chatterji"
				}
			]
		},
		{
			"superPnr": "1802210116604",
			"bookings": [
				{
					"updateStatus": "Cancelled at Yatra",
					"paxId": "5151591",
					"segmentId": "4545815",
					"itineraryType": "Domestic",
					"id": "603496a39fe96100012939b9",
					"TripId": "TA1802210116320",
					"BookingId": "4465529",
					"bookingType": "AIR",
					"PaxName": "Mr T  Venkateswaran",
					"description": "Vistara(UK-852)",
					"itineraryId": "3967744",
					"Origin": "BLR",
					"Destination": "BOM",
					"FlightDeparture": "23-02-2021 08:30 AM",
					"FlightArrival": "23-02-2021 10:15 AM"
				}
			]
		},
		{
			"superPnr": "0511200113772",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4976509",
					"segmentId": "4412675",
					"itineraryType": "Domestic",
					"id": "5faa7e570cb32c0001e2c9e8",
					"TripId": "TA0511200113577",
					"BookingId": "4315852",
					"bookingType": "AIR",
					"PaxName": "Mr Ashish  Ashish",
					"description": "SpiceJet(SG-2752)",
					"itineraryId": "3844117",
					"Origin": "JAI",
					"Destination": "PAT",
					"FlightDeparture": "10-11-2020 12:00 PM",
					"FlightArrival": "10-11-2020 03:20 PM"
				}
			]
		},
		{
			"superPnr": "0112200109949",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5010170",
					"segmentId": "4439091",
					"itineraryType": "Domestic",
					"id": "5fc7c5a34739a100011f6125",
					"TripId": "TA0112200109707",
					"BookingId": "4344765",
					"bookingType": "AIR",
					"PaxName": "Mr Biswadeep  Parida",
					"description": "IndiGo(6E-2405)",
					"itineraryId": "3868591",
					"Origin": "BBI",
					"Destination": "DEL",
					"FlightDeparture": "02-12-2020 06:35 PM",
					"FlightArrival": "02-12-2020 09:05 PM"
				}
			]
		},
		{
			"superPnr": "1902210045782",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5152339",
					"segmentId": "4546382",
					"itineraryType": "International",
					"id": "603755c69fe9610001293b64",
					"TripId": "TA1902210039012",
					"BookingId": "4466174",
					"bookingType": "AIR",
					"PaxName": "Mr Manish  Sharma",
					"description": "Vistara(UK-182)",
					"itineraryId": "3968277",
					"Origin": "DAC",
					"Destination": "DEL",
					"FlightDeparture": "25-02-2021 10:20 AM",
					"FlightArrival": "25-02-2021 12:15 PM"
				}
			]
		},
		{
			"superPnr": "885469",
			"bookings": [
				{
					"startDate": "2019-03-18 14:00:00.000",
					"endDate": "2019-03-19 14:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863821",
					"updateStatus": "pending",
					"itineraryId": "885469",
					"itineraryType": "Domestic",
					"id": "5c91fe720398490001e1e6e3",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "S Talluri"
				},
				{
					"startDate": "2019-03-19 14:00:00.000",
					"endDate": "2019-03-20 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863821",
					"updateStatus": "pending",
					"itineraryId": "885469",
					"itineraryType": "Domestic",
					"id": "5c91fe720398490001e1e6e5",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "S Talluri"
				},
				{
					"startDate": "2019-03-18 14:00:00.000",
					"endDate": "2019-03-19 14:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863821",
					"updateStatus": "pending",
					"itineraryId": "885469",
					"itineraryType": "Domestic",
					"id": "5cb7212090f9b900010735c0",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "S Talluri"
				},
				{
					"startDate": "2019-03-19 14:00:00.000",
					"endDate": "2019-03-20 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863821",
					"updateStatus": "pending",
					"itineraryId": "885469",
					"itineraryType": "Domestic",
					"id": "5cb7212090f9b900010735ca",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "S Talluri"
				}
			]
		},
		{
			"superPnr": "2302210102544",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5160803",
					"segmentId": "4552414",
					"itineraryType": "Domestic",
					"id": "60362e749fe9610001293ae5",
					"TripId": "TA1902210006446",
					"BookingId": "4473464",
					"bookingType": "AIR",
					"PaxName": "Mr vivek  agarwal",
					"description": "IndiGo(6E-264)",
					"itineraryId": "3973883",
					"Origin": "IXC",
					"Destination": "BOM",
					"FlightDeparture": "24-02-2021 12:05 PM",
					"FlightArrival": "24-02-2021 02:50 PM"
				}
			]
		},
		{
			"superPnr": "2403220042697",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6149097",
					"segmentId": "5233966",
					"itineraryType": "Domestic",
					"id": "62494d62ed19f10001380551",
					"TripId": "TA2403220042374",
					"BookingId": "5305431",
					"bookingType": "AIR",
					"PaxName": "Ms vartika  srivastava",
					"description": "IndiGo(6E-5328)",
					"itineraryId": "4604785",
					"Origin": "DEL",
					"Destination": "BOM",
					"FlightDeparture": "03-04-2022 09:35 AM",
					"FlightArrival": "03-04-2022 12:00 PM"
				}
			]
		},
		{
			"superPnr": "885466",
			"bookings": [
				{
					"startDate": "2019-03-18 14:00:00.000",
					"endDate": "2019-03-19 14:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863819",
					"updateStatus": "pending",
					"itineraryId": "885466",
					"itineraryType": "Domestic",
					"id": "5c91fe720398490001e1e6e1",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "prerana amitabh"
				},
				{
					"startDate": "2019-03-19 14:00:00.000",
					"endDate": "2019-03-20 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863819",
					"updateStatus": "pending",
					"itineraryId": "885466",
					"itineraryType": "Domestic",
					"id": "5c91fe720398490001e1e6e2",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "prerana amitabh"
				},
				{
					"startDate": "2019-03-18 14:00:00.000",
					"endDate": "2019-03-19 14:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863819",
					"updateStatus": "pending",
					"itineraryId": "885466",
					"itineraryType": "Domestic",
					"id": "5cb7212090f9b900010735b7",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "prerana amitabh"
				},
				{
					"startDate": "2019-03-19 14:00:00.000",
					"endDate": "2019-03-20 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863819",
					"updateStatus": "pending",
					"itineraryId": "885466",
					"itineraryType": "Domestic",
					"id": "5cb7212090f9b900010735be",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "prerana amitabh"
				}
			]
		},
		{
			"superPnr": "885465",
			"bookings": [
				{
					"startDate": "2019-03-18 14:00:00.000",
					"endDate": "2019-03-19 14:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863820",
					"updateStatus": "pending",
					"itineraryId": "885465",
					"itineraryType": "Domestic",
					"id": "5c91fe720398490001e1e6df",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "R Sudhinder"
				},
				{
					"startDate": "2019-03-19 14:00:00.000",
					"endDate": "2019-03-20 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863820",
					"updateStatus": "pending",
					"itineraryId": "885465",
					"itineraryType": "Domestic",
					"id": "5c91fe720398490001e1e6e0",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "R Sudhinder"
				},
				{
					"startDate": "2019-03-18 14:00:00.000",
					"endDate": "2019-03-19 14:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863820",
					"updateStatus": "pending",
					"itineraryId": "885465",
					"itineraryType": "Domestic",
					"id": "5cb7212090f9b900010735aa",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "R Sudhinder"
				},
				{
					"startDate": "2019-03-19 14:00:00.000",
					"endDate": "2019-03-20 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident  Nariman Point",
					"hotelAddress": "Nariman Point   ,MUMBAI  ,,MUMBAI,Maharashtra",
					"paxId": "2863820",
					"updateStatus": "pending",
					"itineraryId": "885465",
					"itineraryType": "Domestic",
					"id": "5cb7212090f9b900010735b3",
					"TripId": "TA1503934210370",
					"BookingId": "2483518",
					"bookingType": "HOTEL",
					"PaxName": "R Sudhinder"
				}
			]
		},
		{
			"superPnr": "1708200009695",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "4911286",
					"segmentId": "4362002",
					"itineraryType": "Domestic",
					"id": "5f3a8051e434ee0001f7dd39",
					"TripId": "TA1708200009608",
					"BookingId": "4259123",
					"bookingType": "AIR",
					"PaxName": "Mr Sarpreet  Singh",
					"description": "IndiGo(6E-2052)",
					"itineraryId": "3796986",
					"Origin": "BHO",
					"Destination": "DEL",
					"FlightDeparture": "17-08-2020 04:00 PM",
					"FlightArrival": "17-08-2020 05:30 PM"
				}
			]
		},
		{
			"superPnr": "1902210040269",
			"bookings": [
				{
					"startDate": "2021-02-19 12:00:00.000",
					"endDate": "2021-02-20 12:00:00.000",
					"cityCode": "PATNA",
					"hotelName": "Hotel Maurya",
					"hotelAddress": "Fraser Rd, South Gandhi Maidan, Raja Ji Salai, Dujra Diara., PatnaSouth Gandhi Maidan",
					"paxId": "5152239",
					"updateStatus": "Availed",
					"itineraryId": "1362249",
					"itineraryType": "Domestic",
					"id": "60321d5f4739a100011f96a9",
					"TripId": "TA1802210130409",
					"BookingId": "4466089",
					"bookingType": "HOTEL",
					"PaxName": "Siva Moorty"
				},
				{
					"startDate": "2021-02-20 12:00:00.000",
					"endDate": "2021-02-21 12:00:00.000",
					"cityCode": "PATNA",
					"hotelName": "Hotel Maurya",
					"hotelAddress": "Fraser Rd, South Gandhi Maidan, Raja Ji Salai, Dujra Diara., PatnaSouth Gandhi Maidan",
					"paxId": "5152239",
					"updateStatus": "Availed",
					"itineraryId": "1362249",
					"itineraryType": "Domestic",
					"id": "60321d5f4739a100011f96aa",
					"TripId": "TA1802210130409",
					"BookingId": "4466089",
					"bookingType": "HOTEL",
					"PaxName": "Siva Moorty"
				}
			]
		},
		{
			"superPnr": "1510200014532",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4947803",
					"segmentId": "4389882",
					"itineraryType": "Domestic",
					"id": "5f89cf2494965000011e51d2",
					"TripId": "TA1510200014385",
					"BookingId": "4290498",
					"bookingType": "AIR",
					"PaxName": "Mr Anindya  Bera",
					"description": "IndiGo(6E-6107)",
					"itineraryId": "3822820",
					"Origin": "PAT",
					"Destination": "CCU",
					"FlightDeparture": "16-10-2020 08:10 PM",
					"FlightArrival": "16-10-2020 09:15 PM"
				}
			]
		},
		{
			"superPnr": "2304220010026",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6307313",
					"segmentId": "5357923",
					"itineraryType": "Domestic",
					"id": "6263ffc8ed19f10001383e58",
					"TripId": "TA2304220009988",
					"BookingId": "5437000",
					"bookingType": "AIR",
					"PaxName": "Mr venkateshwar  nippani",
					"description": "Vistara(UK-853)",
					"itineraryId": "4719279",
					"Origin": "BOM",
					"Destination": "BLR",
					"FlightDeparture": "23-04-2022 04:00 PM",
					"FlightArrival": "23-04-2022 05:45 PM"
				}
			]
		},
		{
			"superPnr": "0112200008815",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5009028",
					"segmentId": "4438288",
					"itineraryType": "Domestic",
					"id": "5fc674244739a100011f60d0",
					"TripId": "TA0112200008782",
					"BookingId": "4343817",
					"bookingType": "AIR",
					"PaxName": "Mr Padam  Prakash",
					"description": "IndiGo(6E-2405)",
					"itineraryId": "3867879",
					"Origin": "BBI",
					"Destination": "DEL",
					"FlightDeparture": "01-12-2020 06:35 PM",
					"FlightArrival": "01-12-2020 09:05 PM"
				}
			]
		},
		{
			"superPnr": "RQP8412274",
			"bookings": [
				{
					"startDate": "2023-09-14 14:45:00.000",
					"endDate": "2023-09-14 14:45:00.000",
					"cityCode": "",
					"hotelName": "Visa",
					"hotelAddress": "Saudi Arabia",
					"paxId": "9285313",
					"updateStatus": "pending",
					"itineraryId": "1955799",
					"itineraryType": "International",
					"id": "6502e3b619b3c10001f310c9",
					"TripId": "TA0409230073965",
					"BookingId": "8007382",
					"bookingType": "VISA",
					"PaxName": "sharabjeet singh"
				}
			]
		},
		{
			"superPnr": "161192248750",
			"bookings": [
				{
					"startDate": "2019-11-16 14:00:00.000",
					"endDate": "2019-11-17 14:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b83370f3000157c966",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				},
				{
					"startDate": "2019-11-17 14:00:00.000",
					"endDate": "2019-11-18 14:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b83370f3000157c967",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				},
				{
					"startDate": "2019-11-18 14:00:00.000",
					"endDate": "2019-11-19 14:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b83370f3000157c968",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				},
				{
					"startDate": "2019-11-19 14:00:00.000",
					"endDate": "2019-11-20 14:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b83370f3000157c969",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				},
				{
					"startDate": "2019-11-20 14:00:00.000",
					"endDate": "2019-11-21 14:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b83370f3000157c96a",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				},
				{
					"startDate": "2019-11-21 14:00:00.000",
					"endDate": "2019-11-22 14:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b93370f3000157c96b",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				},
				{
					"startDate": "2019-11-22 14:00:00.000",
					"endDate": "2019-11-23 12:00:00.000",
					"cityCode": "CHENNAI",
					"hotelName": "Dhans",
					"hotelAddress": "# 6 &amp;amp; 7, Ramagiri Extension, Taramani Link Road, , VelacheriVelacheri",
					"paxId": "4204395",
					"updateStatus": "pending",
					"itineraryId": "1179386",
					"itineraryType": "Domestic",
					"id": "5dd8f3b93370f3000157c96c",
					"TripId": "TA161191348616",
					"BookingId": "3644135",
					"bookingType": "HOTEL",
					"PaxName": "Abdul Mohammed"
				}
			]
		},
		{
			"superPnr": "0411941153366",
			"bookings": [
				{
					"startDate": "2019-11-04 14:00:00.000",
					"endDate": "2019-11-05 12:00:00.000",
					"cityCode": "KOLKATA",
					"hotelName": "IndiSmart Hotel",
					"hotelAddress": "X-1, 8/3, Block- EP, Sector 5,Salt LakeSalt Lake City",
					"paxId": "4114070",
					"updateStatus": "pending",
					"itineraryId": "1155139",
					"itineraryType": "Domestic",
					"id": "5dc137633370f3000157759f",
					"TripId": "TA0411975151552",
					"BookingId": "3565019",
					"bookingType": "HOTEL",
					"PaxName": "siddhartha jauhari"
				}
			]
		},
		{
			"superPnr": "0910210012236",
			"bookings": [
				{
					"startDate": "2021-10-12 14:00:00.000",
					"endDate": "2021-10-13 12:00:00.000",
					"cityCode": "GURGAON",
					"hotelName": "Radisson Gurugram Udyog Vihar",
					"hotelAddress": "Adjacent to plot No-406, Udyog Vihar, Phase 3, NH-8Udyog Vihar",
					"paxId": "5588891",
					"updateStatus": "pending",
					"itineraryId": "1499505",
					"itineraryType": "Domestic",
					"id": "6166edb9ed19f1000136feac",
					"TripId": "TA0910210012188",
					"BookingId": "4838679",
					"bookingType": "HOTEL",
					"PaxName": "Aditya Agarwal"
				}
			]
		},
		{
			"superPnr": "07039429861",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "2828881",
					"segmentId": "2469439",
					"itineraryType": "Domestic",
					"id": "5c84b799e5b3040001f9f27a",
					"TripId": "TA07039598404",
					"BookingId": "2453869",
					"bookingType": "AIR",
					"PaxName": "Mr nikhil dungarwal",
					"description": "IndiGo(6E-748)",
					"itineraryId": "2138036",
					"Origin": "UDR",
					"Destination": "BOM",
					"FlightDeparture": "10-03-2019 09:55 AM",
					"FlightArrival": "10-03-2019 11:35 AM"
				}
			]
		},
		{
			"superPnr": "2805220005733",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6496413",
					"segmentId": "5506962",
					"itineraryType": "International",
					"id": "6296269345aea800014d0259",
					"TripId": "TA2805220005489",
					"BookingId": "5596556",
					"bookingType": "AIR",
					"PaxName": "Mr NIRMALYA  GHOSH",
					"description": "SpiceJet(SG-77)",
					"itineraryId": "4856615",
					"Origin": "DAC",
					"Destination": "CCU",
					"FlightDeparture": "03-06-2022 01:35 PM",
					"FlightArrival": "03-06-2022 01:55 PM"
				},
				{
					"updateStatus": "pending",
					"paxId": "6496413",
					"segmentId": "5506961",
					"itineraryType": "International",
					"id": "6296269345aea800014d025a",
					"TripId": "TA2805220005489",
					"BookingId": "5596556",
					"bookingType": "AIR",
					"PaxName": "Mr NIRMALYA  GHOSH",
					"description": "SpiceJet(SG-76)",
					"itineraryId": "4856615",
					"Origin": "CCU",
					"Destination": "DAC",
					"FlightDeparture": "31-05-2022 11:10 AM",
					"FlightArrival": "31-05-2022 12:35 PM"
				}
			]
		},
		{
			"superPnr": "2502210129431",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5165746",
					"segmentId": "4555898",
					"itineraryType": "Domestic",
					"id": "6038fba59fe9610001293d17",
					"TripId": "TA1902210048032",
					"BookingId": "4477635",
					"bookingType": "AIR",
					"PaxName": "Mr Vishal  Poddar",
					"description": "Go Air(G8-387)",
					"itineraryId": "3976953",
					"Origin": "BOM",
					"Destination": "IXR",
					"FlightDeparture": "26-02-2021 03:30 PM",
					"FlightArrival": "26-02-2021 06:00 PM"
				}
			]
		},
		{
			"superPnr": "2310200001759",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4954526",
					"segmentId": "4394208",
					"itineraryType": "Domestic",
					"id": "5f9bfdd4f12d640001f8615f",
					"TripId": "TA2310200001535",
					"BookingId": "4295999",
					"bookingType": "AIR",
					"PaxName": "Mr Tanmay Kumar Mishra",
					"description": "IndiGo(6E-102)",
					"itineraryId": "3826604",
					"Origin": "CCU",
					"Destination": "IXA",
					"FlightDeparture": "30-10-2020 12:05 PM",
					"FlightArrival": "30-10-2020 01:05 PM"
				},
				{
					"updateStatus": "Availed",
					"paxId": "4954526",
					"segmentId": "4394209",
					"itineraryType": "Domestic",
					"id": "5f9bfdd4f12d640001f86160",
					"TripId": "TA2310200001535",
					"BookingId": "4295999",
					"bookingType": "AIR",
					"PaxName": "Mr Tanmay Kumar Mishra",
					"description": "IndiGo(6E-119)",
					"itineraryId": "3826604",
					"Origin": "IXA",
					"Destination": "GAU",
					"FlightDeparture": "30-10-2020 02:20 PM",
					"FlightArrival": "30-10-2020 03:30 PM"
				}
			]
		},
		{
			"superPnr": "2503220051636",
			"bookings": [
				{
					"startDate": "2022-03-29 12:00:00.000",
					"endDate": "2022-03-30 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Treebo Trend Raj Premier",
					"hotelAddress": "32, 12th Cross, Indiranagar 1st Stage, Opposite RTOIndira Nagar",
					"paxId": "6155273",
					"updateStatus": "pending",
					"itineraryId": "1654833",
					"itineraryType": "Domestic",
					"id": "62494e29ed19f1000138058e",
					"TripId": "TA2503220050610",
					"BookingId": "5310323",
					"bookingType": "HOTEL",
					"PaxName": "Raushan Kumar"
				},
				{
					"startDate": "2022-03-30 12:00:00.000",
					"endDate": "2022-03-31 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Treebo Trend Raj Premier",
					"hotelAddress": "32, 12th Cross, Indiranagar 1st Stage, Opposite RTOIndira Nagar",
					"paxId": "6155273",
					"updateStatus": "pending",
					"itineraryId": "1654833",
					"itineraryType": "Domestic",
					"id": "62494e29ed19f1000138058f",
					"TripId": "TA2503220050610",
					"BookingId": "5310323",
					"bookingType": "HOTEL",
					"PaxName": "Raushan Kumar"
				},
				{
					"startDate": "2022-03-31 12:00:00.000",
					"endDate": "2022-04-01 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Treebo Trend Raj Premier",
					"hotelAddress": "32, 12th Cross, Indiranagar 1st Stage, Opposite RTOIndira Nagar",
					"paxId": "6155273",
					"updateStatus": "pending",
					"itineraryId": "1654833",
					"itineraryType": "Domestic",
					"id": "62494e29ed19f10001380590",
					"TripId": "TA2503220050610",
					"BookingId": "5310323",
					"bookingType": "HOTEL",
					"PaxName": "Raushan Kumar"
				},
				{
					"startDate": "2022-04-01 12:00:00.000",
					"endDate": "2022-04-02 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Treebo Trend Raj Premier",
					"hotelAddress": "32, 12th Cross, Indiranagar 1st Stage, Opposite RTOIndira Nagar",
					"paxId": "6155273",
					"updateStatus": "pending",
					"itineraryId": "1654833",
					"itineraryType": "Domestic",
					"id": "62494e29ed19f10001380591",
					"TripId": "TA2503220050610",
					"BookingId": "5310323",
					"bookingType": "HOTEL",
					"PaxName": "Raushan Kumar"
				},
				{
					"startDate": "2022-04-02 12:00:00.000",
					"endDate": "2022-04-03 11:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Treebo Trend Raj Premier",
					"hotelAddress": "32, 12th Cross, Indiranagar 1st Stage, Opposite RTOIndira Nagar",
					"paxId": "6155273",
					"updateStatus": "pending",
					"itineraryId": "1654833",
					"itineraryType": "Domestic",
					"id": "62494e29ed19f10001380592",
					"TripId": "TA2503220050610",
					"BookingId": "5310323",
					"bookingType": "HOTEL",
					"PaxName": "Raushan Kumar"
				}
			]
		},
		{
			"superPnr": "1108210017477",
			"bookings": [
				{
					"startDate": "2021-08-11 12:00:00.000",
					"endDate": "2021-08-12 12:00:00.000",
					"cityCode": "SRINAGAR",
					"hotelName": "Welcome Hotel",
					"hotelAddress": "Boulevard Road, Opp. Shikara Ghat No. 7, Dalgate, Srinagar, Jammu and Kashmir 190001Boulevard Road",
					"paxId": "5399930",
					"updateStatus": "pending",
					"itineraryId": "1437322",
					"itineraryType": "Domestic",
					"id": "6117842e9fe9610001298b31",
					"TripId": "TA1108210016914",
					"BookingId": "4675751",
					"bookingType": "HOTEL",
					"PaxName": "Chandan K Singh"
				},
				{
					"startDate": "2021-08-12 12:00:00.000",
					"endDate": "2021-08-13 12:00:00.000",
					"cityCode": "SRINAGAR",
					"hotelName": "Welcome Hotel",
					"hotelAddress": "Boulevard Road, Opp. Shikara Ghat No. 7, Dalgate, Srinagar, Jammu and Kashmir 190001Boulevard Road",
					"paxId": "5399930",
					"updateStatus": "pending",
					"itineraryId": "1437322",
					"itineraryType": "Domestic",
					"id": "6117842e9fe9610001298b32",
					"TripId": "TA1108210016914",
					"BookingId": "4675751",
					"bookingType": "HOTEL",
					"PaxName": "Chandan K Singh"
				},
				{
					"startDate": "2021-08-13 12:00:00.000",
					"endDate": "2021-08-14 12:00:00.000",
					"cityCode": "SRINAGAR",
					"hotelName": "Welcome Hotel",
					"hotelAddress": "Boulevard Road, Opp. Shikara Ghat No. 7, Dalgate, Srinagar, Jammu and Kashmir 190001Boulevard Road",
					"paxId": "5399930",
					"updateStatus": "pending",
					"itineraryId": "1437322",
					"itineraryType": "Domestic",
					"id": "6117842e9fe9610001298b33",
					"TripId": "TA1108210016914",
					"BookingId": "4675751",
					"bookingType": "HOTEL",
					"PaxName": "Chandan K Singh"
				}
			]
		},
		{
			"superPnr": "2809210021933",
			"bookings": [
				{
					"startDate": "2021-09-28 12:00:00.000",
					"endDate": "2021-09-29 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Trident Bandra Kurla",
					"hotelAddress": "C56  G Block Bandra Kurla Complex  ,MUMBAI   India ,,MUMBAI,Maharashtra",
					"paxId": "5540245",
					"updateStatus": "pending",
					"itineraryId": "1480198",
					"itineraryType": "Domestic",
					"id": "61544094ed19f1000136eaee",
					"TripId": "TA2809210021802",
					"BookingId": "4796058",
					"bookingType": "HOTEL",
					"PaxName": "Shivam S Khanna"
				}
			]
		},
		{
			"superPnr": "131197833088",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "4194505",
					"segmentId": "3724723",
					"itineraryType": "Domestic",
					"id": "5dcd4eb23370f30001579e9c",
					"TripId": "TA131196624185",
					"BookingId": "3631493",
					"bookingType": "AIR",
					"PaxName": "GAURAVMR JAISINGHANIA",
					"description": "Vistara(UK-930)",
					"itineraryId": "3222683",
					"Origin": "BOM",
					"Destination": "DEL",
					"FlightDeparture": "14-11-2019 07:30 AM",
					"FlightArrival": "14-11-2019 09:40 AM"
				}
			]
		},
		{
			"superPnr": "0507220004824",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6707905",
					"segmentId": "5670571",
					"itineraryType": "Domestic",
					"id": "62c51b8245aea800014d6551",
					"TripId": "TA0507220004428",
					"BookingId": "5775118",
					"bookingType": "AIR",
					"PaxName": "Mr Anjul  Bhalla",
					"description": "IndiGo(6E-6814)",
					"itineraryId": "5007187",
					"Origin": "DEL",
					"Destination": "BOM",
					"FlightDeparture": "06-07-2022 07:20 AM",
					"FlightArrival": "06-07-2022 09:25 AM"
				},
				{
					"updateStatus": "pending",
					"paxId": "6707905",
					"segmentId": "5670572",
					"itineraryType": "Domestic",
					"id": "62c5ee6a45aea800014d6815",
					"TripId": "TA0507220004428",
					"BookingId": "5775118",
					"bookingType": "AIR",
					"PaxName": "Mr Anjul  Bhalla",
					"description": "Vistara(UK-950)",
					"itineraryId": "5007188",
					"Origin": "BOM",
					"Destination": "DEL",
					"FlightDeparture": "06-07-2022 09:55 PM",
					"FlightArrival": "07-07-2022 12:10 AM"
				}
			]
		},
		{
			"superPnr": "2801210006448",
			"bookings": [
				{
					"startDate": "2021-01-28 12:00:00.000",
					"endDate": "2021-01-29 12:00:00.000",
					"cityCode": "GUWAHATI",
					"hotelName": "Landmark Hotel",
					"hotelAddress": "Dr B Barooah Road, Ulubari, GuwahatiUlubari",
					"paxId": "5094632",
					"updateStatus": "Availed",
					"itineraryId": "1350893",
					"itineraryType": "Domestic",
					"id": "60151d824739a100011f81f0",
					"TripId": "TA2801210006007",
					"BookingId": "4415875",
					"bookingType": "HOTEL",
					"PaxName": "Shruti Arora"
				},
				{
					"startDate": "2021-01-29 12:00:00.000",
					"endDate": "2021-01-30 12:00:00.000",
					"cityCode": "GUWAHATI",
					"hotelName": "Landmark Hotel",
					"hotelAddress": "Dr B Barooah Road, Ulubari, GuwahatiUlubari",
					"paxId": "5094632",
					"updateStatus": "Availed",
					"itineraryId": "1350893",
					"itineraryType": "Domestic",
					"id": "60151d824739a100011f81f9",
					"TripId": "TA2801210006007",
					"BookingId": "4415875",
					"bookingType": "HOTEL",
					"PaxName": "Shruti Arora"
				}
			]
		},
		{
			"superPnr": "903728",
			"bookings": [
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Grand Hyatt Mumbai",
					"hotelAddress": "Off Western Express Highway ,MUMBAI India,,MUMBAI,Maharashtra",
					"paxId": "2987177",
					"updateStatus": "pending",
					"itineraryId": "903728",
					"itineraryType": "Domestic",
					"id": "5cab6a0cf1bc2500015c8a98",
					"TripId": "TA08049177203",
					"BookingId": "2587696",
					"bookingType": "HOTEL",
					"PaxName": "AMIT VYAS"
				},
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Grand Hyatt Mumbai",
					"hotelAddress": "Off Western Express Highway ,MUMBAI India,,MUMBAI,Maharashtra",
					"paxId": "2987175",
					"updateStatus": "Availed",
					"itineraryId": "903728",
					"itineraryType": "Domestic",
					"id": "5cab6a0cf1bc2500015c8a94",
					"TripId": "TA08049177203",
					"BookingId": "2587696",
					"bookingType": "HOTEL",
					"PaxName": "JINU THANKACHAN"
				}
			]
		},
		{
			"superPnr": "888565",
			"bookings": [
				{
					"startDate": "2019-03-27 14:00:00.000",
					"endDate": "2019-03-28 14:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Taj MG Road, Bengaluru",
					"hotelAddress": "41/3, Mahatma Gandhi Road  M G Road BANGALORE KARNATAKA,",
					"paxId": "2881729",
					"updateStatus": "pending",
					"itineraryId": "888565",
					"itineraryType": "Domestic",
					"id": "5c9dd93da890a70001440190",
					"TripId": "TA1903913238690",
					"BookingId": "2498661",
					"bookingType": "HOTEL",
					"PaxName": "Yasir Ahmad"
				},
				{
					"startDate": "2019-03-28 14:00:00.000",
					"endDate": "2019-03-29 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "Taj MG Road, Bengaluru",
					"hotelAddress": "41/3, Mahatma Gandhi Road  M G Road BANGALORE KARNATAKA,",
					"paxId": "2881729",
					"updateStatus": "pending",
					"itineraryId": "888565",
					"itineraryType": "Domestic",
					"id": "5c9dd93da890a70001440192",
					"TripId": "TA1903913238690",
					"BookingId": "2498661",
					"bookingType": "HOTEL",
					"PaxName": "Yasir Ahmad"
				}
			]
		},
		{
			"superPnr": "887794",
			"bookings": [
				{
					"startDate": "2019-03-26 14:00:00.000",
					"endDate": "2019-03-27 14:00:00.000",
					"cityCode": "HYDERABAD",
					"hotelName": "Taj Banjara Hyderabad",
					"hotelAddress": "Road No. 1, Banjara Hills  Banjara Hills HYDERABAD TELANGANA,",
					"paxId": "2876982",
					"updateStatus": "pending",
					"itineraryId": "887794",
					"itineraryType": "Domestic",
					"id": "5c9dd93da890a7000144018f",
					"TripId": "TA1803913297620",
					"BookingId": "2494617",
					"bookingType": "HOTEL",
					"PaxName": "santosh talwar"
				},
				{
					"startDate": "2019-03-27 14:00:00.000",
					"endDate": "2019-03-28 14:00:00.000",
					"cityCode": "HYDERABAD",
					"hotelName": "Taj Banjara Hyderabad",
					"hotelAddress": "Road No. 1, Banjara Hills  Banjara Hills HYDERABAD TELANGANA,",
					"paxId": "2876982",
					"updateStatus": "pending",
					"itineraryId": "887794",
					"itineraryType": "Domestic",
					"id": "5c9dd93da890a70001440191",
					"TripId": "TA1803913297620",
					"BookingId": "2494617",
					"bookingType": "HOTEL",
					"PaxName": "santosh talwar"
				},
				{
					"startDate": "2019-03-28 14:00:00.000",
					"endDate": "2019-03-29 12:00:00.000",
					"cityCode": "HYDERABAD",
					"hotelName": "Taj Banjara Hyderabad",
					"hotelAddress": "Road No. 1, Banjara Hills  Banjara Hills HYDERABAD TELANGANA,",
					"paxId": "2876982",
					"updateStatus": "pending",
					"itineraryId": "887794",
					"itineraryType": "Domestic",
					"id": "5c9dd93da890a70001440194",
					"TripId": "TA1803913297620",
					"BookingId": "2494617",
					"bookingType": "HOTEL",
					"PaxName": "santosh talwar"
				}
			]
		},
		{
			"superPnr": "1902210035444",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5152166",
					"segmentId": "4546230",
					"itineraryType": "International",
					"id": "6040ba779fe9610001294202",
					"TripId": "TA1902210032820",
					"BookingId": "4466026",
					"bookingType": "AIR",
					"PaxName": "Mr Anindya Sundar  Ghosh",
					"description": "SpiceJet(SG-44)",
					"itineraryId": "3968134",
					"Origin": "DAC",
					"Destination": "CCU",
					"FlightDeparture": "04-03-2021 02:00 PM",
					"FlightArrival": "04-03-2021 02:40 PM"
				}
			]
		},
		{
			"superPnr": "1802210131020",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151749",
					"segmentId": "4545906",
					"itineraryType": "Domestic",
					"id": "602fa5034739a100011f9523",
					"TripId": "TA1802210130409",
					"BookingId": "4465660",
					"bookingType": "AIR",
					"PaxName": "Mr Siva  Moorty",
					"description": "SpiceJet(SG-768)",
					"itineraryId": "3967831",
					"Origin": "BLR",
					"Destination": "PAT",
					"FlightDeparture": "19-02-2021 01:00 PM",
					"FlightArrival": "19-02-2021 03:25 PM"
				}
			]
		},
		{
			"superPnr": "1202994263073",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "2712535",
					"segmentId": "2357154",
					"itineraryType": "Domestic",
					"id": "5c80ed632ef2f9282500b6cc",
					"TripId": "TA1202955262196",
					"BookingId": "2352845",
					"bookingType": "AIR",
					"PaxName": "MS NOOPUR AGASHE",
					"description": "Vistara(UK-899)",
					"itineraryId": "2040350",
					"Origin": "DEL",
					"Destination": "HYD",
					"FlightDeparture": "18-02-2019 02:35 PM",
					"FlightArrival": "18-02-2019 04:45 PM"
				}
			]
		},
		{
			"superPnr": "16029973520",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2731942",
					"segmentId": "2375358",
					"itineraryType": "Domestic",
					"id": "5c8a5882af5c890001e55444",
					"TripId": "TA16029983301",
					"BookingId": "2369734",
					"bookingType": "AIR",
					"PaxName": "Mr TravelDesk PWC",
					"description": "Vistara(UK-933)",
					"itineraryId": "2055815",
					"Origin": "DEL",
					"Destination": "BOM",
					"FlightDeparture": "14-03-2019 03:15 PM",
					"FlightArrival": "14-03-2019 05:35 PM"
				}
			]
		},
		{
			"superPnr": "914818",
			"bookings": [
				{
					"startDate": "2018-11-06 12:00:00.000",
					"endDate": "2018-11-07 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cee",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-07 12:00:00.000",
					"endDate": "2018-11-08 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cf3",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-08 12:00:00.000",
					"endDate": "2018-11-09 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cf5",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-09 12:00:00.000",
					"endDate": "2018-11-10 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cf6",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-10 12:00:00.000",
					"endDate": "2018-11-11 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cf7",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-11 12:00:00.000",
					"endDate": "2018-11-12 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cf8",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-12 12:00:00.000",
					"endDate": "2018-11-13 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cf9",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-13 12:00:00.000",
					"endDate": "2018-11-14 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914818",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cfa",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				}
			]
		},
		{
			"superPnr": "3010200009862",
			"bookings": [
				{
					"updateStatus": "No show",
					"paxId": "4969960",
					"segmentId": "4408071",
					"itineraryType": "Domestic",
					"id": "5f9d0904f12d640001f86199",
					"TripId": "TA3010200009752",
					"BookingId": "4310453",
					"bookingType": "AIR",
					"PaxName": "Mr Praveen Kumar  Mishra",
					"description": "IndiGo(6E-2023)",
					"itineraryId": "3839990",
					"Origin": "HYD",
					"Destination": "DEL",
					"FlightDeparture": "31-10-2020 08:10 AM",
					"FlightArrival": "31-10-2020 10:40 AM"
				}
			]
		},
		{
			"superPnr": "1902210042937",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5152305",
					"segmentId": "4546340",
					"itineraryType": "International",
					"id": "6033d1c39fe961000129396b",
					"TripId": "TA1902210039012",
					"BookingId": "4466142",
					"bookingType": "AIR",
					"PaxName": "Mr Manish  Sharma",
					"description": "Biman Bangladesh Airline(BG-4098)",
					"itineraryId": "3968239",
					"Origin": "DEL",
					"Destination": "DAC",
					"FlightDeparture": "22-02-2021 03:45 PM",
					"FlightArrival": "22-02-2021 07:25 PM"
				}
			]
		},
		{
			"superPnr": "1509220037853",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "7150845",
					"segmentId": "6024171",
					"itineraryType": "Domestic",
					"id": "6332070c45aea800014e6f99",
					"TripId": "TA1509220037585",
					"BookingId": "6159903",
					"bookingType": "AIR",
					"PaxName": "Mr gaurav  arora",
					"description": "Vistara(UK-981)",
					"itineraryId": "5331167",
					"Origin": "DEL",
					"Destination": "BOM",
					"FlightDeparture": "26-09-2022 09:30 PM",
					"FlightArrival": "26-09-2022 11:40 PM"
				}
			]
		},
		{
			"superPnr": "11029183134",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2709115",
					"segmentId": "2353969",
					"itineraryType": "Domestic",
					"id": "5c6a9be4b3334900014ee70e",
					"TripId": "TA11029841790",
					"BookingId": "2350275",
					"bookingType": "AIR",
					"PaxName": "Ms vinita bali",
					"description": "Air India(AI-501)",
					"itineraryId": "2037544",
					"Origin": "BLR",
					"Destination": "DEL",
					"FlightDeparture": "18-02-2019 01:20 PM",
					"FlightArrival": "18-02-2019 04:10 PM"
				}
			]
		},
		{
			"superPnr": "2006220014444",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6628349",
					"segmentId": "5609254",
					"itineraryType": "International",
					"id": "62b02e8b45aea800014d3806",
					"TripId": "TA2006220014148",
					"BookingId": "5708508",
					"bookingType": "AIR",
					"PaxName": "Mr DINESH  CHOWBEY",
					"description": "SpiceJet(SG-76)",
					"itineraryId": "4951201",
					"Origin": "CCU",
					"Destination": "DAC",
					"FlightDeparture": "20-06-2022 11:10 AM",
					"FlightArrival": "20-06-2022 12:35 PM"
				}
			]
		},
		{
			"superPnr": "2212220084651",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "7744850",
					"segmentId": "6509167",
					"itineraryType": "Domestic",
					"id": "63b2a71f45aea800014f9980",
					"TripId": "TA2212220083409",
					"BookingId": "6674725",
					"bookingType": "AIR",
					"PaxName": "Mr bopaiah  k u",
					"description": "Air Asia India(I5-1562)",
					"itineraryId": "5776483",
					"Origin": "BLR",
					"Destination": "BBI",
					"FlightDeparture": "02-01-2023 11:55 AM",
					"FlightArrival": "02-01-2023 01:55 PM"
				}
			]
		},
		{
			"superPnr": "2008200004145",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4912177",
					"segmentId": "4362521",
					"itineraryType": "Domestic",
					"id": "5f3fc654e434ee0001f7ddab",
					"TripId": "TA2008200004120",
					"BookingId": "4259741",
					"bookingType": "AIR",
					"PaxName": "Mr Gaurav Prasad  Verma",
					"description": "IndiGo(6E-2052)",
					"itineraryId": "3797443",
					"Origin": "BHO",
					"Destination": "DEL",
					"FlightDeparture": "21-08-2020 04:00 PM",
					"FlightArrival": "21-08-2020 05:30 PM"
				}
			]
		},
		{
			"superPnr": "903730",
			"bookings": [
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Grand Hyatt Mumbai",
					"hotelAddress": "Off Western Express Highway ,MUMBAI India,,MUMBAI,Maharashtra",
					"paxId": "2987176",
					"updateStatus": "pending",
					"itineraryId": "903730",
					"itineraryType": "Domestic",
					"id": "5cab6a0cf1bc2500015c8a99",
					"TripId": "TA08049177203",
					"BookingId": "2587696",
					"bookingType": "HOTEL",
					"PaxName": "NITHIN BOSE"
				}
			]
		},
		{
			"superPnr": "RQP2644559",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "2942863",
					"segmentId": "2581828",
					"itineraryType": "International",
					"id": "5c9f5489a890a70001441435",
					"TripId": "TA3003971280948",
					"BookingId": "2550881",
					"bookingType": "AIR",
					"PaxName": "Mr ANISH HIRALAL  SANGHAVI",
					"description": "Air India(AI-131)",
					"itineraryId": "2232642",
					"Origin": "BOM",
					"Destination": "LHR",
					"FlightDeparture": "25-03-2019 07:00 AM",
					"FlightArrival": "25-03-2019 11:30 AM"
				},
				{
					"updateStatus": "Availed",
					"paxId": "2942863",
					"segmentId": "2581829",
					"itineraryType": "International",
					"id": "5c9f5489a890a7000144143c",
					"TripId": "TA3003971280948",
					"BookingId": "2550881",
					"bookingType": "AIR",
					"PaxName": "Mr ANISH HIRALAL  SANGHAVI",
					"description": "Air India(AI-130)",
					"itineraryId": "2232642",
					"Origin": "LHR",
					"Destination": "BOM",
					"FlightDeparture": "28-03-2019 01:30 PM",
					"FlightArrival": "29-03-2019 04:00 AM"
				}
			]
		},
		{
			"superPnr": "2710200000594",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4957091",
					"segmentId": "4396007",
					"itineraryType": "Domestic",
					"id": "5f9968e6f12d640001f860cc",
					"TripId": "TA2710200000477",
					"BookingId": "4298071",
					"bookingType": "AIR",
					"PaxName": "Mr Ankur  Tyagi",
					"description": "Vistara(UK-684)",
					"itineraryId": "3828164",
					"Origin": "JDH",
					"Destination": "DEL",
					"FlightDeparture": "28-10-2020 03:45 PM",
					"FlightArrival": "28-10-2020 04:55 PM"
				}
			]
		},
		{
			"superPnr": "1512200124777",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5026463",
					"segmentId": "4450728",
					"itineraryType": "Domestic",
					"id": "5fdae3654739a100011f675a",
					"TripId": "TA1212200109730",
					"BookingId": "4358245",
					"bookingType": "AIR",
					"PaxName": "Mr Nishkarsh  Mehra",
					"description": "IndiGo(6E-129)",
					"itineraryId": "3879023",
					"Origin": "DEL",
					"Destination": "DED",
					"FlightDeparture": "17-12-2020 08:05 AM",
					"FlightArrival": "17-12-2020 08:55 AM"
				}
			]
		},
		{
			"superPnr": "966671",
			"bookings": [
				{
					"startDate": "2019-02-26 12:00:00.000",
					"endDate": "2019-02-27 12:00:00.000",
					"cityCode": "AMRITSAR",
					"hotelName": "Holiday Inn- Amritasar",
					"hotelAddress": ",,,Amritsar,Punjab",
					"paxId": "3297498",
					"updateStatus": "pending",
					"itineraryId": "966671",
					"itineraryType": "Domestic",
					"id": "5d010e512b93f90001264d02",
					"TripId": null,
					"BookingId": "2853034",
					"bookingType": "HOTEL",
					"PaxName": "Breakfast Cost"
				}
			]
		},
		{
			"superPnr": "2509200010742",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "4935435",
					"segmentId": "4381521",
					"itineraryType": "Domestic",
					"id": "5f7977fce434ee0001f7e644",
					"TripId": "TA2509200010426",
					"BookingId": "4280215",
					"bookingType": "AIR",
					"PaxName": "Mr Sumit  Rajput",
					"description": "IndiGo(6E-2195)",
					"itineraryId": "3815486",
					"Origin": "RPR",
					"Destination": "DEL",
					"FlightDeparture": "04-10-2020 09:30 AM",
					"FlightArrival": "04-10-2020 11:25 AM"
				}
			]
		},
		{
			"superPnr": "1902210034127",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5152151",
					"segmentId": "4546213",
					"itineraryType": "International",
					"id": "603620649fe9610001293add",
					"TripId": "TA1902210032820",
					"BookingId": "4466011",
					"bookingType": "AIR",
					"PaxName": "Mr Anindya Sundar  Ghosh",
					"description": "IndiGo(6E-8293)",
					"itineraryId": "3968117",
					"Origin": "CCU",
					"Destination": "DAC",
					"FlightDeparture": "24-02-2021 12:05 PM",
					"FlightArrival": "24-02-2021 01:30 PM"
				}
			]
		},
		{
			"superPnr": "1302979307546",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2718369",
					"segmentId": "2362505",
					"itineraryType": "Domestic",
					"id": "5c6c2bc98094f700016ae440",
					"TripId": "TA1302917307161",
					"BookingId": "2358149",
					"bookingType": "AIR",
					"PaxName": "Mr pramod kumar sadhu",
					"description": "SpiceJet(SG-3309)",
					"itineraryId": "2044979",
					"Origin": "BLR",
					"Destination": "VGA",
					"FlightDeparture": "19-02-2019 06:35 PM",
					"FlightArrival": "19-02-2019 07:50 PM"
				}
			]
		},
		{
			"superPnr": "1802210113909",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151562",
					"segmentId": "4545800",
					"itineraryType": "Domestic",
					"id": "602fdd434739a100011f954f",
					"TripId": "TA1802210113632",
					"BookingId": "4465505",
					"bookingType": "AIR",
					"PaxName": "Mr Gaurav Prasad Verma",
					"description": "IndiGo(6E-2122)",
					"itineraryId": "3967730",
					"Origin": "IDR",
					"Destination": "DEL",
					"FlightDeparture": "19-02-2021 06:05 PM",
					"FlightArrival": "19-02-2021 07:35 PM"
				}
			]
		},
		{
			"superPnr": "2208230084347",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "9210754",
					"segmentId": "7747255",
					"itineraryType": "Domestic",
					"id": "64ef899519b3c10001f2c223",
					"TripId": "TA2208230083580",
					"BookingId": "7943055",
					"bookingType": "AIR",
					"PaxName": "Ms Nikita  Agarwal",
					"description": "Vistara(UK-992)",
					"itineraryId": "6903130",
					"Origin": "PNQ",
					"Destination": "DEL",
					"FlightDeparture": "30-08-2023 08:25 PM",
					"FlightArrival": "30-08-2023 10:30 PM"
				}
			]
		},
		{
			"superPnr": "1212200107100",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5022824",
					"segmentId": "4448233",
					"itineraryType": "Domestic",
					"id": "5fd75f704739a100011f6624",
					"TripId": "TA1212200106082",
					"BookingId": "4355213",
					"bookingType": "AIR",
					"PaxName": "Ms Anusha  Gupta",
					"description": "IndiGo(6E-402)",
					"itineraryId": "3876780",
					"Origin": "PNQ",
					"Destination": "DEL",
					"FlightDeparture": "14-12-2020 10:10 AM",
					"FlightArrival": "14-12-2020 12:30 PM"
				},
				{
					"updateStatus": "Availed",
					"paxId": "5022824",
					"segmentId": "4448234",
					"itineraryType": "Domestic",
					"id": "5fd75f704739a100011f6626",
					"TripId": "TA1212200106082",
					"BookingId": "4355213",
					"bookingType": "AIR",
					"PaxName": "Ms Anusha  Gupta",
					"description": "IndiGo(6E-2192)",
					"itineraryId": "3876780",
					"Origin": "DEL",
					"Destination": "GAU",
					"FlightDeparture": "14-12-2020 02:15 PM",
					"FlightArrival": "14-12-2020 04:30 PM"
				}
			]
		},
		{
			"superPnr": "0206220005750",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6521723",
					"segmentId": "5526132",
					"itineraryType": "International",
					"id": "629b32bb45aea800014d0c9b",
					"TripId": "TA0206220005590",
					"BookingId": "5617557",
					"bookingType": "AIR",
					"PaxName": "Mr Dipayan  Roy",
					"description": "SpiceJet(SG-77)",
					"itineraryId": "4874241",
					"Origin": "DAC",
					"Destination": "CCU",
					"FlightDeparture": "04-06-2022 01:35 PM",
					"FlightArrival": "04-06-2022 01:55 PM"
				}
			]
		},
		{
			"superPnr": "1005220036393",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6400221",
					"segmentId": "5431232",
					"itineraryType": "Domestic",
					"id": "627bf307ed19f10001386ef0",
					"TripId": "TA1005220035892",
					"BookingId": "5515742",
					"bookingType": "AIR",
					"PaxName": "Mr priyank  sharma",
					"description": "IndiGo(6E-6265)",
					"itineraryId": "4787084",
					"Origin": "UDR",
					"Destination": "DEL",
					"FlightDeparture": "11-05-2022 08:30 PM",
					"FlightArrival": "11-05-2022 09:35 PM"
				}
			]
		},
		{
			"superPnr": "1212200109960",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5022832",
					"segmentId": "4448243",
					"itineraryType": "Domestic",
					"id": "5fd878a64739a100011f6689",
					"TripId": "TA1212200109730",
					"BookingId": "4355221",
					"bookingType": "AIR",
					"PaxName": "Mr Nishkarsh  Mehra",
					"description": "Air India(AI-482)",
					"itineraryId": "3876788",
					"Origin": "BHO",
					"Destination": "DEL",
					"FlightDeparture": "15-12-2020 11:25 AM",
					"FlightArrival": "15-12-2020 12:50 PM"
				}
			]
		},
		{
			"superPnr": "1302916308675",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2718382",
					"segmentId": "2362516",
					"itineraryType": "Domestic",
					"id": "5c6c47e88094f700016ae4e6",
					"TripId": "TA1302947308144",
					"BookingId": "2358162",
					"bookingType": "AIR",
					"PaxName": "Mr saravana srinivas maddigatla",
					"description": "SpiceJet(SG-3318)",
					"itineraryId": "2044989",
					"Origin": "BLR",
					"Destination": "MAA",
					"FlightDeparture": "19-02-2019 09:30 PM",
					"FlightArrival": "19-02-2019 10:30 PM"
				}
			]
		},
		{
			"superPnr": "910547",
			"bookings": [
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Grand Hyatt Mumbai",
					"hotelAddress": "Off Western Express Highway ,MUMBAI India,,MUMBAI,Maharashtra",
					"paxId": "2987175",
					"updateStatus": "pending",
					"itineraryId": "910547",
					"itineraryType": "Domestic",
					"id": "5cb6f29c90f9b9000107321f",
					"TripId": "TA08049177203",
					"BookingId": "2587696",
					"bookingType": "HOTEL",
					"PaxName": "JINU THANKACHAN"
				},
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Grand Hyatt Mumbai",
					"hotelAddress": "Off Western Express Highway ,MUMBAI India,,MUMBAI,Maharashtra",
					"paxId": "2987176",
					"updateStatus": "pending",
					"itineraryId": "910547",
					"itineraryType": "Domestic",
					"id": "5cb6f29c90f9b90001073220",
					"TripId": "TA08049177203",
					"BookingId": "2587696",
					"bookingType": "HOTEL",
					"PaxName": "NITHIN BOSE"
				}
			]
		},
		{
			"superPnr": "1509220050760",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "7151850",
					"segmentId": "6024948",
					"itineraryType": "Domestic",
					"id": "6332cbf845aea800014e717b",
					"TripId": "TA1509220050484",
					"BookingId": "6160712",
					"bookingType": "AIR",
					"PaxName": "Mr gaurav  arora",
					"description": "Vistara(UK-952)",
					"itineraryId": "5331879",
					"Origin": "BOM",
					"Destination": "DEL",
					"FlightDeparture": "27-09-2022 12:25 PM",
					"FlightArrival": "27-09-2022 02:20 PM"
				}
			]
		},
		{
			"superPnr": "1902210006756",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151862",
					"segmentId": "4545968",
					"itineraryType": "Domestic",
					"id": "60328e559fe96100012938a2",
					"TripId": "TA1902210006446",
					"BookingId": "4465751",
					"bookingType": "AIR",
					"PaxName": "Mr vivek  agarwal",
					"description": "IndiGo(6E-5379)",
					"itineraryId": "3967889",
					"Origin": "BOM",
					"Destination": "IXC",
					"FlightDeparture": "21-02-2021 06:40 PM",
					"FlightArrival": "21-02-2021 09:10 PM"
				},
				{
					"updateStatus": "Cancelled at Yatra",
					"paxId": "5151862",
					"segmentId": "4545969",
					"itineraryType": "Domestic",
					"id": "603690e79fe9610001293b21",
					"TripId": "TA1902210006446",
					"BookingId": "4465751",
					"bookingType": "AIR",
					"PaxName": "Mr vivek  agarwal",
					"description": "Vistara(UK-652)",
					"itineraryId": "3967890",
					"Origin": "IXC",
					"Destination": "BOM",
					"FlightDeparture": "24-02-2021 07:20 PM",
					"FlightArrival": "24-02-2021 09:50 PM"
				}
			]
		},
		{
			"superPnr": "1902210023801",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5151967",
					"segmentId": "4546044",
					"itineraryType": "Domestic",
					"id": "603007754739a100011f95a3",
					"TripId": "TA1902210023455",
					"BookingId": "4465846",
					"bookingType": "AIR",
					"PaxName": "Mr soumya  mandal",
					"description": "IndiGo(6E-6107)",
					"itineraryId": "3967959",
					"Origin": "PAT",
					"Destination": "CCU",
					"FlightDeparture": "19-02-2021 09:20 PM",
					"FlightArrival": "19-02-2021 10:30 PM"
				}
			]
		},
		{
			"superPnr": "903186",
			"bookings": [
				{
					"startDate": "2019-04-08 12:00:00.000",
					"endDate": "2019-04-09 12:00:00.000",
					"cityCode": "GURGAON",
					"hotelName": "Ahuja Residency Parklane",
					"hotelAddress": "D/7-6, DLF City Phase 1,Arjun MargDLF Phase I,",
					"paxId": "2984159",
					"updateStatus": "pending",
					"itineraryId": "903186",
					"itineraryType": "Domestic",
					"id": "5caf0239f1bc2500015c99a8",
					"TripId": "TA0804998818641",
					"BookingId": "2585105",
					"bookingType": "HOTEL",
					"PaxName": "Vinod Madeyambaeth"
				},
				{
					"startDate": "2019-04-09 12:00:00.000",
					"endDate": "2019-04-10 12:00:00.000",
					"cityCode": "GURGAON",
					"hotelName": "Ahuja Residency Parklane",
					"hotelAddress": "D/7-6, DLF City Phase 1,Arjun MargDLF Phase I,",
					"paxId": "2984159",
					"updateStatus": "pending",
					"itineraryId": "903186",
					"itineraryType": "Domestic",
					"id": "5caf0239f1bc2500015c99a9",
					"TripId": "TA0804998818641",
					"BookingId": "2585105",
					"bookingType": "HOTEL",
					"PaxName": "Vinod Madeyambaeth"
				},
				{
					"startDate": "2019-04-10 12:00:00.000",
					"endDate": "2019-04-11 12:00:00.000",
					"cityCode": "GURGAON",
					"hotelName": "Ahuja Residency Parklane",
					"hotelAddress": "D/7-6, DLF City Phase 1,Arjun MargDLF Phase I,",
					"paxId": "2984159",
					"updateStatus": "pending",
					"itineraryId": "903186",
					"itineraryType": "Domestic",
					"id": "5caf0239f1bc2500015c99ab",
					"TripId": "TA0804998818641",
					"BookingId": "2585105",
					"bookingType": "HOTEL",
					"PaxName": "Vinod Madeyambaeth"
				}
			]
		},
		{
			"superPnr": "0503996336039",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "2815768",
					"segmentId": "2456752",
					"itineraryType": "Domestic",
					"id": "5c84b799e5b3040001f9f27f",
					"TripId": "TA0503943335365",
					"BookingId": "2442876",
					"bookingType": "AIR",
					"PaxName": "Ms divya vijayvargia",
					"description": "IndiGo(6E-748)",
					"itineraryId": "2127247",
					"Origin": "UDR",
					"Destination": "BOM",
					"FlightDeparture": "10-03-2019 09:55 AM",
					"FlightArrival": "10-03-2019 11:35 AM"
				}
			]
		},
		{
			"superPnr": "887818",
			"bookings": [
				{
					"startDate": "2019-03-25 14:00:00.000",
					"endDate": "2019-03-26 12:00:00.000",
					"cityCode": "HYDERABAD",
					"hotelName": "Taj Banjara Hyderabad",
					"hotelAddress": "Road No. 1, Banjara Hills  Banjara Hills HYDERABAD TELANGANA,",
					"paxId": "2877094",
					"updateStatus": "pending",
					"itineraryId": "887818",
					"itineraryType": "Domestic",
					"id": "5c99e3ffecc699000198a7c9",
					"TripId": "TA1803914300488",
					"BookingId": "2494714",
					"bookingType": "HOTEL",
					"PaxName": "santokh singh"
				}
			]
		},
		{
			"superPnr": "910553",
			"bookings": [
				{
					"startDate": "2019-04-07 12:00:00.000",
					"endDate": "2019-04-08 12:00:00.000",
					"cityCode": "MUMBAI",
					"hotelName": "Grand Hyatt Mumbai",
					"hotelAddress": "Off Western Express Highway ,MUMBAI India,,MUMBAI,Maharashtra",
					"paxId": "2987177",
					"updateStatus": "pending",
					"itineraryId": "910553",
					"itineraryType": "Domestic",
					"id": "5cb6f29c90f9b90001073223",
					"TripId": "TA08049177203",
					"BookingId": "2587696",
					"bookingType": "HOTEL",
					"PaxName": "AMIT VYAS"
				}
			]
		},
		{
			"superPnr": "1906220008352",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "6625674",
					"segmentId": "5607893",
					"itineraryType": "Domestic",
					"id": "62b1c66145aea800014d3ace",
					"TripId": "TA1906220008326",
					"BookingId": "5706846",
					"bookingType": "AIR",
					"PaxName": "Mr Shomik  Dasgupta",
					"description": "Vistara(UK-775)",
					"itineraryId": "4949945",
					"Origin": "BOM",
					"Destination": "CCU",
					"FlightDeparture": "21-06-2022 02:05 PM",
					"FlightArrival": "21-06-2022 04:55 PM"
				}
			]
		},
		{
			"superPnr": "914795",
			"bookings": [
				{
					"startDate": "2018-10-20 12:00:00.000",
					"endDate": "2018-10-21 12:00:00.000",
					"cityCode": "NEW DELHI",
					"hotelName": "ITC Maurya New Delhi",
					"hotelAddress": "Diplomatic Enclave,Sardar Patel Marg,,New Delhi,Delhi",
					"paxId": "3053312",
					"updateStatus": "pending",
					"itineraryId": "914795",
					"itineraryType": "Domestic",
					"id": "5cbee9bf90f9b90001074ced",
					"TripId": null,
					"BookingId": "2643265",
					"bookingType": "HOTEL",
					"PaxName": "Dieter Schneiderbauer"
				},
				{
					"startDate": "2018-10-21 12:00:00.000",
					"endDate": "2018-10-22 12:00:00.000",
					"cityCode": "NEW DELHI",
					"hotelName": "ITC Maurya New Delhi",
					"hotelAddress": "Diplomatic Enclave,Sardar Patel Marg,,New Delhi,Delhi",
					"paxId": "3053312",
					"updateStatus": "pending",
					"itineraryId": "914795",
					"itineraryType": "Domestic",
					"id": "5cbee9bf90f9b90001074cf4",
					"TripId": null,
					"BookingId": "2643265",
					"bookingType": "HOTEL",
					"PaxName": "Dieter Schneiderbauer"
				}
			]
		},
		{
			"superPnr": "1407210002260",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "5332855",
					"segmentId": "4667399",
					"itineraryType": "Domestic",
					"id": "60efbc629fe96100012974ea",
					"TripId": "TA1407210002084",
					"BookingId": "4618327",
					"bookingType": "AIR",
					"PaxName": "Mr Rameez  Usmani",
					"description": "IndiGo(6E-196)",
					"itineraryId": "4078898",
					"Origin": "BLR",
					"Destination": "LKO",
					"FlightDeparture": "15-07-2021 06:25 AM",
					"FlightArrival": "15-07-2021 09:05 AM"
				}
			]
		},
		{
			"superPnr": "1302937305946",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2718304",
					"segmentId": "2362440",
					"itineraryType": "Domestic",
					"id": "5c6c39d88094f700016ae4bd",
					"TripId": "TA1302917305198",
					"BookingId": "2358091",
					"bookingType": "AIR",
					"PaxName": "Mr ranjeet kumar sahu",
					"description": "IndiGo(6E-149)",
					"itineraryId": "2044923",
					"Origin": "BLR",
					"Destination": "HYD",
					"FlightDeparture": "19-02-2019 08:25 PM",
					"FlightArrival": "19-02-2019 09:40 PM"
				},
				{
					"updateStatus": "pending",
					"paxId": "2718305",
					"segmentId": "2362440",
					"itineraryType": "Domestic",
					"id": "5c6c39d88094f700016ae4bf",
					"TripId": "TA1302917305198",
					"BookingId": "2358091",
					"bookingType": "AIR",
					"PaxName": "Mr Prateek Pareek",
					"description": "IndiGo(6E-149)",
					"itineraryId": "2044923",
					"Origin": "BLR",
					"Destination": "HYD",
					"FlightDeparture": "19-02-2019 08:25 PM",
					"FlightArrival": "19-02-2019 09:40 PM"
				},
				{
					"updateStatus": "pending",
					"paxId": "2718306",
					"segmentId": "2362440",
					"itineraryType": "Domestic",
					"id": "5c6c39d98094f700016ae4d5",
					"TripId": "TA1302917305198",
					"BookingId": "2358091",
					"bookingType": "AIR",
					"PaxName": "Mr Akash Kumar",
					"description": "IndiGo(6E-149)",
					"itineraryId": "2044923",
					"Origin": "BLR",
					"Destination": "HYD",
					"FlightDeparture": "19-02-2019 08:25 PM",
					"FlightArrival": "19-02-2019 09:40 PM"
				}
			]
		},
		{
			"superPnr": "914870",
			"bookings": [
				{
					"startDate": "2018-11-06 12:00:00.000",
					"endDate": "2018-11-07 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cfb",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-07 12:00:00.000",
					"endDate": "2018-11-08 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cfc",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-08 12:00:00.000",
					"endDate": "2018-11-09 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cfd",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-09 12:00:00.000",
					"endDate": "2018-11-10 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cfe",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-10 12:00:00.000",
					"endDate": "2018-11-11 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074cff",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-11 12:00:00.000",
					"endDate": "2018-11-12 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074d00",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-12 12:00:00.000",
					"endDate": "2018-11-13 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074d01",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				},
				{
					"startDate": "2018-11-13 12:00:00.000",
					"endDate": "2018-11-14 12:00:00.000",
					"cityCode": "CAMPBELLTOWN",
					"hotelName": "Quest Apartment Hotel Campbelltown",
					"hotelAddress": "1 Rennie Rd Woodbine NSW 2560 Australia,CAMPBELLTOWN,Campbelltown",
					"paxId": "3053390",
					"updateStatus": "pending",
					"itineraryId": "914870",
					"itineraryType": "International",
					"id": "5cbee9bf90f9b90001074d02",
					"TripId": null,
					"BookingId": "2643310",
					"bookingType": "HOTEL",
					"PaxName": "Muthamma Malanda"
				}
			]
		},
		{
			"superPnr": "1402919286511",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2723347",
					"segmentId": "2366959",
					"itineraryType": "Domestic",
					"id": "5c6c39d88094f700016ae49a",
					"TripId": "TA1402995286261",
					"BookingId": "2362377",
					"bookingType": "AIR",
					"PaxName": "Ms pooja bhattacharya",
					"description": "IndiGo(6E-639)",
					"itineraryId": "2048779",
					"Origin": "BOM",
					"Destination": "AMD",
					"FlightDeparture": "19-02-2019 08:05 PM",
					"FlightArrival": "19-02-2019 09:20 PM"
				}
			]
		},
		{
			"superPnr": "0610210009385",
			"bookings": [
				{
					"startDate": "2021-10-08 12:00:00.000",
					"endDate": "2021-10-09 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "IBIS City Centre Bengaluru",
					"hotelAddress": "Plot No 30 Rajaram Mohan Roy Road,Bengaluru Karnataka 560027,,BANGALORE,Karnataka",
					"paxId": "5568258",
					"updateStatus": "pending",
					"itineraryId": "1487042",
					"itineraryType": "Domestic",
					"id": "61644a9ced19f1000136fcb8",
					"TripId": "TA0610210008761",
					"BookingId": "4819736",
					"bookingType": "HOTEL",
					"PaxName": "Aditya Agarwal"
				},
				{
					"startDate": "2021-10-09 12:00:00.000",
					"endDate": "2021-10-10 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "IBIS City Centre Bengaluru",
					"hotelAddress": "Plot No 30 Rajaram Mohan Roy Road,Bengaluru Karnataka 560027,,BANGALORE,Karnataka",
					"paxId": "5568258",
					"updateStatus": "pending",
					"itineraryId": "1487042",
					"itineraryType": "Domestic",
					"id": "61644a9ced19f1000136fcc6",
					"TripId": "TA0610210008761",
					"BookingId": "4819736",
					"bookingType": "HOTEL",
					"PaxName": "Aditya Agarwal"
				},
				{
					"startDate": "2021-10-10 12:00:00.000",
					"endDate": "2021-10-11 12:00:00.000",
					"cityCode": "BANGALORE",
					"hotelName": "IBIS City Centre Bengaluru",
					"hotelAddress": "Plot No 30 Rajaram Mohan Roy Road,Bengaluru Karnataka 560027,,BANGALORE,Karnataka",
					"paxId": "5568258",
					"updateStatus": "pending",
					"itineraryId": "1487042",
					"itineraryType": "Domestic",
					"id": "61644a9ced19f1000136fcca",
					"TripId": "TA0610210008761",
					"BookingId": "4819736",
					"bookingType": "HOTEL",
					"PaxName": "Aditya Agarwal"
				}
			]
		},
		{
			"superPnr": "16029184205",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "2731944",
					"segmentId": "2375362",
					"itineraryType": "Domestic",
					"id": "5c935bcf0398490001e1ee47",
					"TripId": "TA16029983301",
					"BookingId": "2369736",
					"bookingType": "AIR",
					"PaxName": "Mr TravelDesk PWC",
					"description": "Vistara(UK-983)",
					"itineraryId": "2055818",
					"Origin": "DEL",
					"Destination": "BOM",
					"FlightDeparture": "21-03-2019 11:40 AM",
					"FlightArrival": "21-03-2019 02:00 PM"
				}
			]
		},
		{
			"superPnr": "0503997329015",
			"bookings": [
				{
					"updateStatus": "Availed",
					"paxId": "2815612",
					"segmentId": "2456609",
					"itineraryType": "Domestic",
					"id": "5c8f214c0398490001e1d85b",
					"TripId": "TA0503997328021",
					"BookingId": "2442747",
					"bookingType": "AIR",
					"PaxName": "Mr rupesh salvi",
					"description": "IndiGo(6E-213)",
					"itineraryId": "2127119",
					"Origin": "BOM",
					"Destination": "AMD",
					"FlightDeparture": "18-03-2019 07:25 AM",
					"FlightArrival": "18-03-2019 08:50 AM"
				}
			]
		},
		{
			"superPnr": "2612971125870",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "4434554",
					"segmentId": "3937574",
					"itineraryType": "International",
					"id": "5e1366c65525a200011dee01",
					"TripId": "TA2612973125423",
					"BookingId": "3845348",
					"bookingType": "AIR",
					"PaxName": "MS RAKSHITA",
					"description": "Biman Bangladesh Airline(BG-98)",
					"itineraryId": "3414057",
					"Origin": "DEL",
					"Destination": "DAC",
					"FlightDeparture": "06-01-2020 06:20 PM",
					"FlightArrival": "06-01-2020 09:15 PM"
				}
			]
		},
		{
			"superPnr": "2105230005012",
			"bookings": [
				{
					"updateStatus": "pending",
					"paxId": "8648600",
					"segmentId": "7253926",
					"itineraryType": "Domestic",
					"id": "646b49b245aea80001519f01",
					"TripId": "TA2105230004793",
					"BookingId": "7457686",
					"bookingType": "AIR",
					"PaxName": "Ms Subhra  Lahiri",
					"description": "SpiceJet(SG-332)",
					"itineraryId": "6455397",
					"Origin": "RDP",
					"Destination": "MAA",
					"FlightDeparture": "22-05-2023 12:45 PM",
					"FlightArrival": "22-05-2023 03:15 PM"
				},
				{
					"updateStatus": "pending",
					"paxId": "8648601",
					"segmentId": "7253926",
					"itineraryType": "Domestic",
					"id": "646b49b245aea80001519f05",
					"TripId": "TA2105230004793",
					"BookingId": "7457686",
					"bookingType": "AIR",
					"PaxName": "Mr Swapan  Banerjee",
					"description": "SpiceJet(SG-332)",
					"itineraryId": "6455397",
					"Origin": "RDP",
					"Destination": "MAA",
					"FlightDeparture": "22-05-2023 12:45 PM",
					"FlightArrival": "22-05-2023 03:15 PM"
				}
			]
		}
	]
}


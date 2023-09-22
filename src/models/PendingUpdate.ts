export interface MainData{
    status: string,
    httpCode: number,
    message: null,
    data: PendingUpdate[]
}

export interface PendingUpdate{
    superPnr:string
    bookings: Booking[];
}

export interface Booking{
    BookingId:string;
    PaxName:string;
    TripId:string;
    bookingType:string;
    cityCode:string;
    endDate:string;
    hotelAddress:string;
    hotelName:string;
    id: string;
    itineraryId:string;
    itineraryType:string;
    paxId:string;
    startDate:string;
    updateStatus:any;
    description:string;
    FlightArrival:string;
    Origin:string;
    Destination:string;
}

export enum BookingTypes{   
    AIR = 'AIR',
    HOTEL = 'HOTEL',
    TRAIN = 'TRAIN',
    VISA = 'VISA',
}
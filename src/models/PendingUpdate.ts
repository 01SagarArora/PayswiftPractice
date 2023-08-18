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
    updateStatus:any
}
import { BookingType } from "pages/Static/TravelStatusHomePage";
import HotelIcon from '@mui/icons-material/Hotel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisaIcon from '@mui/icons-material/CreditCard';
import FlightIcon from '@mui/icons-material/Flight';

export type TripIcon = "callender" | 'completed' | 'approved' | 'submitted' | 'rejected' | 'pending';
export type IconSize = 'medium' | 'small' | 'large'
export type TimeLineIcons = BookingType | TripIcon;
export function Icon(props: { name: TimeLineIcons, color: string, size: IconSize }) {

    function getTravelStatusIcon() {
        switch (props.name) {

            case 'HOTEL':
                return <HotelIcon style={{ color: props.color }} fontSize={props?.size || 'medium'} />
            case 'completed':
                return <CheckCircleIcon style={{ color: props.color }} fontSize={props?.size || 'medium'} />
            case 'VISA':
                return <VisaIcon style={{ color: props.color }} fontSize={props?.size || 'medium'} />
            case 'FLIGHTS':
                return <>&nbsp;<FlightIcon className="rotate-45" style={{ color: props.color }} fontSize={props?.size || 'medium'} /></>

            default:
                return <></>
        }
    }

    return getTravelStatusIcon();
}

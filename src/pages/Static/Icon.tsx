import { BookingType } from "pages/Static/TravelStatusHomePage";
import HotelIcon from '@mui/icons-material/Hotel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import VisaIcon from '@mui/icons-material/CreditCard';
import FlightIcon from '@mui/icons-material/Flight';
import TrainIcon from '@mui/icons-material/Train';
import CarIcon from '@mui/icons-material/DirectionsCar';
import BusIcon from '@mui/icons-material/DirectionsBus';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';


export type TripIcon = "callender" | 'completed' | 'approved' | 'submitted' | 'rejected' | 'pending' | 'Error' | 'Success';
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
            case 'AIR':
                return <>&nbsp;<FlightIcon className="rotate-45" style={{ color: props.color }} fontSize={props?.size || 'medium'} /></>
            case 'TRAIN':
                return <TrainIcon style={{ color: props.color }} fontSize={props?.size || 'medium'} />
            case 'CAR':
                return <CarIcon style={{ color: props.color }} fontSize={props?.size || 'medium'} />
            case 'BUS':
                return <BusIcon style={{ color: props.color }} fontSize={props?.size || 'medium'} />
            case 'Error':
                return <ErrorOutlineIcon  style={{ color: props.color || 'red'}} fontSize={props?.size || 'medium'} />
            case 'Success':
                return <CheckCircleOutlineOutlinedIcon  style={{ color: props.color || 'green'}} fontSize={props?.size || 'medium'} />

            default:
                return <InfoOutlinedIcon  style={{ color: props.color || 'black' }} fontSize={props?.size || 'medium'} />
        }
    }

    return getTravelStatusIcon();
}

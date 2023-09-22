import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';
import "../Static/TravelStatusHomePage.scss";
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Stack } from '@mui/material';
import PaginationButton, { PaginationData } from 'components/Pagination/PaginationButton';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState, useAppDispatch } from 'store/store';
import { Icon } from 'pages/Static/Icon';
import { PaginationModel } from './PaginationModel';
import { styled } from '@mui/system';
import TravelStatusIconSvg from './TravelStatusIconSvg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import TSDialog from 'pages/TSDialog/TSDialog';
import { UPDATE_TRAVEL_STATUS } from 'utils/constants';
import { commonApi } from 'api/commonApi/apis';
import { startLoading, stopLoading } from 'store/Loader/LoaderSlice';
import { LOADER_MSG } from 'components/Loader/loader.contant';
import { ALERT_DIALOG, TRAVEL_STATUS_PAGE } from 'constants/commonConstants';
import { setTSDailogData, showTSDialog } from 'store/TSDialogSlice/TSDialogSlice';
import { NotFoundPage } from 'components/ResultNotFound/NoResultFound';
import { showAlert } from 'store/Alert/alertSlice';
import { updateMainListData } from 'store/MainData/MainDataSlice';
import { setError } from 'store/Error/ErrorSlice';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Booking, BookingTypes} from './../../models/PendingUpdate';



// Mui div Component mainly for box shadow 
const ShadowBox = styled('div')({
  borderRadius: '0px 6px 6px 6px',
  boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
  backgroundColor: '#fff',
  overflow: 'hidden'
});

// Mui info Box, div component 
const InfoBox = styled('div')({
  fontFamily: 'Rubik',
  fontSize: '13px',
  lineHeight: '1.23',
  color: '#333',
  borderRadius: '8px',
  backgroundColor: '#fffcc7',
  padding: '12px',
  display: 'flex',
  margin: '25px 20px 20px 20px'
});

const theme = createTheme({
  typography: {
    fontFamily: [
      'Rubik',
      'sans-serif'
    ].join(','),
  }
});

export type BookingType = "HOTEL" | "VISA" | "FLIGHTS" | "TRAIN" | "CAR" | "BUS" | "AIR";
const itemsPerPage = 10;

const TravelStatusHomePage = () => {
  const [page, setPage] = useState<number>(1);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [paginationData, setPaginationData] = useState<PaginationData>(
    {} as PaginationData
  );
  const [travelList, setTravelList] = useState<any>([]);
  const bookingsData = useSelector((state: RootState) => state.mainData?.mainData) as Booking[];
  const reasonData = useSelector((state: RootState) => state.reasonData?.data);
  const isReasonLoaded = useSelector((state: RootState) => state.reasonData.isReasonLoaded);
  const flightReasons = reasonData?.configurations?.travelStatusConfig.domFlight;
  const hotelReasons = reasonData?.configurations?.travelStatusConfig.domHotel;
  const dispatch = useAppDispatch();
  const loaderDispatch = useDispatch<AppDispatch>();
  const isEmulation = window.isEmulate ? true:false;
  // For update the Pagination
  const updatePagination = (totalPages: number, startIndex: number, endIndex: number, totalRecords: number) => {
    const paginationData = PaginationModel.getPaginationData({
      startIndex: startIndex,
      endIndex: endIndex,
      nextPageLink: "nextPage",
      pageNumber: page,
      previousPageLink: "previousPage",
      recordInPages: itemsPerPage,
      totalPages: totalPages,
      totalRecords: totalRecords,
      responseStatus: 200,
      listingData: []
    });
    setPaginationData({ ...paginationData });
  }

  // For swapping the classNames of action buttons through the dialog box
  const onDialogClose = () => {
    const array = [...travelList];
    array.forEach((data) => {
      if (data.isCloseClicked) {
        data.isCloseClicked = false;
      }
    })
    setTravelList(array);
  }

  // For Pagination 
  useEffect(() => {
    const totalPages = Math.ceil(bookingsData.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const arr = [...bookingsData];
    loaderDispatch(startLoading(LOADER_MSG.tripDetails.default));
    setTimeout(() => {
      loaderDispatch(stopLoading());
    }, 1000)
    setTimeout(() => {
      setIsDataLoaded(true);
      setTravelList(arr.slice(startIndex, endIndex));
    }, 0)
    updatePagination(totalPages, startIndex, endIndex, bookingsData.length);
  }, [page, bookingsData])

  const handlePageChange = (clickedOnPageNumber: number) => {
    setPage(clickedOnPageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const onClickTravelled = (trip: any, isYesClicked: boolean, index: number) => {
    let tripObj = {
      updateList: [] as any[],
      type: trip.bookingType,
      //trip : {...trip},
    };
    tripObj.updateList.push({ id: trip.id, status: isYesClicked ? 'Availed' : 'U' });
    if (isYesClicked) {
      //Todo: Set Loader
      delete tripObj.type;
      //As per production call update travel status api
      dispatch(commonApi.endpoints.postApi.initiate({ url: UPDATE_TRAVEL_STATUS, data: tripObj }))
        .then((res: any) => {
          try {
            const resp = res.data;
            if (resp.data && resp.status == 'success') {
              dispatch(updateMainListData(trip.id))
            } else if (resp.data.httpCode == 401) {
              dispatch(setError())
              return false
            } else if (resp.data.httpCode == 500) {
              //todo error handling
              let alertData = {
                title: ALERT_DIALOG.DIALOG_TITLE,
                messages: [ALERT_DIALOG.TRY_AGAIN_MESSAGE],
                actions: ['OK'],
              };
              dispatch(showAlert(alertData));
            }
          } catch (e) {
            console.log(e)
            let alertData = {
              title: ALERT_DIALOG.DIALOG_TITLE,
              messages: [ALERT_DIALOG.TRY_AGAIN_MESSAGE],
              actions: ['OK'],
            };
            dispatch(showAlert(alertData));
          }
        })
    } else {
      // TSDialog is shown
      const array = JSON.parse(JSON.stringify(travelList));
      array[index].isCloseClicked = true;
      setTravelList(array);
      let obj = {
        type: trip.bookingType as string,
        tripData: { ...tripObj },
        reasonData: trip.bookingType == 'AIR' ? flightReasons : hotelReasons,
      }
      dispatch(setTSDailogData(obj));
      dispatch(showTSDialog());
    }
  }

  const getArrivalDateTime =(trip:Booking)=>{
    let text="";
    switch(trip.bookingType){
      case BookingTypes.AIR:
        text = trip.FlightArrival ==='' || trip.FlightArrival == '-' ? "NA": trip.FlightArrival;
        break;
      case BookingTypes.HOTEL:
      case BookingTypes.TRAIN:
      case BookingTypes.VISA:
        text = trip.startDate ==='' || trip.startDate == '-' ? "NA": trip.startDate;
        break;
      default:
        text ="";
        break;
    }
    return text;
  }

  const getDescription =(trip:Booking)=>{
    let text="";
    switch(trip.bookingType){
      case BookingTypes.AIR:
        text = trip.description ==='' || trip.description == '-' ? "NA": trip.description;
        break;
      case BookingTypes.HOTEL:
      case BookingTypes.TRAIN:
      case BookingTypes.VISA:
        text = trip.hotelName ==='' || trip.hotelName == '-' ? "NA": trip.hotelName;
        break;
      default:
        text ="";
        break;
    }
    return text;
  }

  const getSector = (trip:Booking) =>{
    let text="";
    switch(trip.bookingType){
      case BookingTypes.AIR:
        text = trip.Origin +" - "+ trip.Destination;
        break;
      case BookingTypes.HOTEL:
      case BookingTypes.TRAIN:
      case BookingTypes.VISA:
        text = trip.hotelAddress;
        break;
      default:
        text ="";
        break;
    }
    return text;
  }

  return (
    <>
      <Container sx={{maxWidth:'1400px!important'}}>
        <SEO title={PAGE.travelStatus.title} description={PAGE.travelStatus.description} />
        <Stack className="padding">
          <Tabs aria-label="travel status tab"
            variant="scrollable"
            scrollButtons="auto"
            className="mainTabs"
            value={0}
            sx={{ minWidth: 172, '& .MuiTabs-indicator': { display: 'none' } }}
          >
            <Tab className="tabLink"
              label={
                <Box sx={{ display: "flex" }}>
                  <div className="checkMarkIcon"><TravelStatusIconSvg /></div>
                  <span className="tabContent">{TRAVEL_STATUS_PAGE.TRAVEL_STATUS}</span>
                </Box>
              } />
          </Tabs>
          <ShadowBox>
            <ThemeProvider theme={theme}>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="table content">
                <TableHead className="tableHead">
                  <TableRow>
                    <TableCell className="tripHeader">Trip ID</TableCell>
                    <TableCell className="tripHeader">CT Number</TableCell>
                    <TableCell className="tripHeader">Description</TableCell>
                    <TableCell className="tripHeader">Sector</TableCell>
                    <TableCell className="tripHeader">Pax Name</TableCell>                                                                                                                                                                                                                                            
                    <TableCell className="tripHeader">Arrival Date and Time</TableCell>
                    {isEmulation && <TableCell className="tripHeader">Status Updated by Traveller</TableCell>}
                    <TableCell className="tripHeader">Travelled</TableCell>
                  </TableRow>
                </TableHead>
                {isDataLoaded && travelList.length ? <TableBody>
                  {
                    travelList && travelList?.map((item: any, index: number) =>                 
                      <TableRow key={item.BookingId}>
                        <TableCell className="tripBody">
                          <Box sx={{ display: 'flex', alignItems: "center" }}>
                            <div className="gray-dark productNameHolder ">
                              <Stack direction={"row"} alignItems={"center"}>
                                <span className='icon-container'>
                                  <Icon name={item.bookingType as BookingType} color={'red'} size={'medium'} />
                                </span>
                                &nbsp;&nbsp;
                                <span>{item.TripId}</span>
                              </Stack>
                            </div>
                          </Box>
                        </TableCell>                                                                                                                                                    
                        <TableCell className="tripBody">{item.BookingId === "-" || item.BookingId === "" ? "NA" : item.BookingId}</TableCell>
                        <TableCell className="tripBody">{getDescription(item)}</TableCell>
                        <TableCell className="tripBody">{getSector(item)}</TableCell>
                        <TableCell className="tripBody">{item.PaxName === "-" || item.PaxName === "" ? "NA" : item.PaxName}</TableCell>
                        <TableCell className="tripBody">{getArrivalDateTime(item)}</TableCell>
                        {isEmulation && <TableCell className={`tripBody ${item.updateState =='Availed'? 'text-success' :''} ${item.updateState =='Pending'? 'text-error' :''}`}>{item.updateStatus}</TableCell>}
                        <TableCell className="tripBody w-12                                                                                                                                                                                                                                                                                                                                                                                                           ">
                          <Stack
                            direction="row"
                            alignItems={"center"}
                            justifyContent="space-between"
                            gap={2}
                            className="mr-1 travelActions"
                          >
                            <span>
                              <Button variant={item?.isCloseClicked ? "outlined" : "contained"} className={item?.isCloseClicked ? "containedButton" : "outlinedButton"}
                                onClick={() => { onClickTravelled(item, true, index) }}>
                                Yes
                              </Button>
                            </span>
                            <span className="actionButtons">
                              <Button variant={item?.isCloseClicked ? "contained" : "outlined"} className={item?.isCloseClicked ? "outlinedButton" : "containedButton"} disabled={!isReasonLoaded}
                                onClick={() => { onClickTravelled(item, false, index) }}>
                                No
                              </Button>
                            </span>
                          </Stack>
                        </TableCell>
                      </TableRow>
                    )
                  }
                </TableBody> : null}
              </Table>
              {travelList.length === 0 && isDataLoaded === true && <NotFoundPage />}
            </TableContainer>
            </ThemeProvider>
            <Box className="infoContainer">
              <InfoBox>
                <InfoOutlinedIcon style={{ color: '#333333' }} />
                <Typography variant="body2" className='px-2'>
                  {TRAVEL_STATUS_PAGE.INFO_CONTENT}
                </Typography>
              </InfoBox>
            </Box>
          </ShadowBox>
        </Stack>
        {travelList.length ?
          <Stack
            alignItems="center"
            justifyContent="end"
            direction={"row"}
            className="py-4"
          >
            <span className="mr-1">{TRAVEL_STATUS_PAGE.SHOW_RESULTS}</span>
            <PaginationButton
              data={paginationData}
              handlePageChange={handlePageChange
              }
            ></PaginationButton>
          </Stack>
          : ""}
      </Container>
      <TSDialog onClose={() => { onDialogClose() }} />
    </>

  )
}

export { TravelStatusHomePage };

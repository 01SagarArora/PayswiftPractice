import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';
import "../Static/TravelStatusHomePage.scss";
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Stack } from '@mui/material';
import PaginationButton, { PaginationData } from 'components/Pagination/PaginationButton';
import { useState, useEffect } from 'react';
// import { travelStatusTripApi } from "api";
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/store';
import { Icon } from 'pages/Static/Icon';
import { PaginationModel } from './PaginationModel';
import { styled } from '@mui/system';
import TravelStatusIconSvg from './TravelStatusIconSvg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
// import {tripMockData} from '../../mockData';
// import { Booking } from 'models/PendingUpdate';
import TSDialog from 'pages/TSDialog/TSDialog';
import { UPDATE_TRAVEL_STATUS } from 'utils/constants';
import { commonApi } from 'api/commonApi/apis';
import { setPendingList } from 'store/PostSlice/PostSlice';
import { setMainData } from 'store/MainData/mainDataSlice';
// import { setMainData } from 'store/MainData/mainDataSlice';

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
  padding: '16px',
  display: 'flex'
});

export type BookingType = "HOTEL" | "VISA" | "FLIGHTS";
const itemsPerPage = 3;

const TravelStatusHomePage = () => {
  const [mainBookingData, setMainBookingData] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [paginationData, setPaginationData] = useState<PaginationData>(
    {} as PaginationData
  );
  const [travelList, setTravelList] = useState<any>([]);
  const bookingsData = useSelector((state: RootState) => state.mainData);
  const tripDataArray = useSelector((state: RootState) => state.pendingList?.data);
  const reasonData = useSelector((state: RootState) => state.reasonData?.data);
  const isReasonLoaded = useSelector((state: RootState) => state.reasonData.isReasonLoaded);
  const flightReasons = reasonData?.configurations?.travelStatusConfig.domFlight;
  const hotelReasons = reasonData?.configurations?.travelStatusConfig.domHotel;
  const [dialogProps, setDialogProps] = useState({ show: false });
  const dispatch = useAppDispatch();

  console.log("tripDataArray", tripDataArray);

  // For Travel List
  const getTravelStatusList = () => {
    setMainBookingData(bookingsData.mainData)
    setIsDataLoaded(true)
  }

  // Payload For Reasons API 
  // const configPayload = {
  //   configs : [{
  //     'name': 'travelStatusConfig',
  //     'whereConditions': [{
  //       'name': 'channel',
  //       'value': 'web'
  //     }]
  //   }]
  // }

  // const getConfigApiData = () => {
  //   travelStatusTripDispatch(
  //     travelStatusTripApi.endpoints.getConfigData.initiate(configPayload, {})
  //   ).then((response: any) => {
  //     console.log("configData", JSON.parse(response.data))
  //   });
  // }

  console.log("travelList", travelList)
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
      listingData: tripDataArray
    });
    setPaginationData({ ...paginationData });
  }

  useEffect(() => {
    // getConfigApiData();
    getTravelStatusList();
  }, [])

  // For Pagination 
  useEffect(() => {
    const totalPages = Math.ceil(mainBookingData.length / itemsPerPage);
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const arr = [...mainBookingData];
    setTravelList(arr.slice(startIndex, endIndex));

    setMainData(arr.slice(startIndex, endIndex));

    updatePagination(totalPages, startIndex, endIndex, mainBookingData.length);
  }, [page, isDataLoaded])

  const updateTripList = (id: string) => {
    let newArr = tripDataArray.filter((trip) => trip.id !== id);
    setPendingList(newArr);
  }

  const onClickTravelled = (trip: any, isYes: boolean) => {
    let tripObj = {
      updateList: [] as any[],
      type: trip.bookingType,
      //trip : {...trip},
    };
    tripObj.updateList.push({ id: trip.id, status: isYes ? 'Availed' : 'U' });

    console.log(tripObj)


    if (isYes) {
      //Todo: Set Loader
      delete tripObj.type;
      //As per production call update travel status api
      console.log(tripObj)
      return;
      dispatch(commonApi.endpoints.postApi.initiate({ url: UPDATE_TRAVEL_STATUS, data: tripObj }))
        .then((res: any) => {
          console.log(res);
          const resp = res.data;
          if (resp.data && resp.data.success == 'success') {
            updateTripList(trip.id);
          } else if (resp.data.httpCode == 401) {
            //todo lgoin 
          } else if (resp.data.httpCode == 500) {
            //todo error handling
          }
        })
    } else {
      // model show
      let props = {
        show: true,
        type: trip.bookingType as string,
        tripData: { ...tripObj },
        reason: trip.bookingType == 'AIR' ? flightReasons : hotelReasons
      }
      setDialogProps(props);
    }

  }
  return (
    <>
      <Container>
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
                  <span className="tabContent">Travel Status</span>
                </Box>
              } />
          </Tabs>
          <ShadowBox>
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tripHeader">Trip ID</TableCell>
                    <TableCell className="tripHeader">CT Number</TableCell>
                    <TableCell className="tripHeader">Description</TableCell>
                    <TableCell className="tripHeader">Sector</TableCell>
                    <TableCell className="tripHeader">Pax Name</TableCell>
                    <TableCell className="tripHeader">Arrival Date and Time</TableCell>
                    <TableCell className="tripHeader">Travelled</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    travelList && travelList?.map((item: any) =>
                      <TableRow key={item.id}>
                        <TableCell className="tripBody">

                          <Box sx={{ display: 'flex', alignItems: "center" }}>
                            <div className="">
                              <span className="gray-dark productNameHolder ">
                                <Stack direction={"row"} alignItems={"center"}>
                                  <div className='icon-container'>
                                    <Icon name={item.bookingType as BookingType} color={'red'} size={'medium'} />
                                  </div>
                                  &nbsp;&nbsp;
                                  <span>{item.TripId}</span>
                                </Stack>
                              </span>
                            </div>
                          </Box>
                        </TableCell>
                        <TableCell className="tripBody">{item.BookingId === "-" || item.BookingId === "" ? "NA" : item.BookingId}</TableCell>
                        <TableCell className="tripBody">{item.hotelName === "-" || item.hotelName === "" ? "NA" : item.hotelName}</TableCell>
                        <TableCell className="tripBody">{item.hotelAddress === "-" || item.hotelAddress === "" ? "NA" : item.hotelAddress}</TableCell>
                        <TableCell className="tripBody">{item.PaxName === "-" || item.PaxName === "" ? "NA" : item.PaxName}</TableCell>
                        <TableCell className="tripBody">{item.startDate === "-" || item.startDate === "" ? "NA" : item.startDate}</TableCell>
                        <TableCell className="tripBody">
                          <Stack
                            direction="row"
                            alignItems={"center"}
                            justifyContent="space-between"
                            spacing={2}
                            className="mr-1"
                          >
                            <span>
                              <Button variant="contained" className="filterApplyButton"
                                onClick={() => { onClickTravelled(item, true) }}>
                                Yes
                              </Button>
                            </span>
                            <span>
                              <Button variant="outlined" className="resetButton" disabled={!isReasonLoaded}
                                onClick={() => { onClickTravelled(item, false) }}>
                                No
                              </Button>
                            </span>
                          </Stack>
                        </TableCell>
                      </TableRow>)
                  }
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ padding: "16px" }}>
              <InfoBox>
                <InfoOutlinedIcon style={{ color: '#333333' }} />
                <Typography variant="body2" className='px-2'>
                  Your Travel policy mandates you to update if you have availed your booked flights or hotels. If you do not update this info your expense claims can be rejected & future booking may be denied.
                </Typography>
              </InfoBox>
            </Box>
          </ShadowBox>
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="end"
          direction={"row"}
          className="py-4"
        >
          <span className="mr-1">Showing results</span>
          <PaginationButton
            data={paginationData}
            handlePageChange={(clickedOnPageNumber: number) =>
              setPage(clickedOnPageNumber)
            }
          ></PaginationButton>
        </Stack>
      </Container>
      <TSDialog {...dialogProps} />
    </>

  )
}

export { TravelStatusHomePage };
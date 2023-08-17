import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';
import "../Static/TravelStatusHomePage.scss";
import { Container, Box, Button, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab, Stack } from '@mui/material';
import PaginationButton, { PaginationData } from 'components/Pagination/PaginationButton';
import { useState } from 'react';
import { travelStatusTripApi } from "api";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
import { Icon } from 'pages/Static/Icon';
import { PaginationModel } from './PaginationModel';
import { styled } from '@mui/system';
import TravelStatusIconSvg from './TravelStatusIconSvg';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

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
  const [bookingsData, setBookingsData] = useState<string[]>([]);
  const [mainBookingData, setMainBookingData] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
  const [paginationData, setPaginationData] = useState<PaginationData>(
    {} as PaginationData
  );
  const travelStatusTripDispatch = useDispatch<AppDispatch>();
  const tripDataArray: string[] = [];

  // For Travel List
  const getTravelStatusList = () => {
    travelStatusTripDispatch(
      travelStatusTripApi.endpoints.getTripData.initiate({})
    ).then((response: any) => {
      const tripData = JSON.parse(response.data)
      tripData?.data?.forEach((tripDataItem: any) => {
        tripDataItem.bookings?.forEach((bookingsItem: any) => {
          tripDataArray?.push(bookingsItem);
        })
      })
      setBookingsData(tripDataArray);
      setMainBookingData(tripDataArray)
      setIsDataLoaded(true)
    });
  }

  // For Reasons API Data
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
      listingData: bookingsData
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
    setBookingsData(arr.slice(startIndex, endIndex));
    updatePagination(totalPages, startIndex, endIndex, mainBookingData.length);
  }, [page, isDataLoaded])

  return (
    <Container>
      <SEO title={PAGE.travelStatus.title} description={PAGE.travelStatus.description} />
      <Stack className="padding">
        <Tabs aria-label="travel status tab"
          variant="scrollable"
          scrollButtons="auto"
          className="mainTabs"
          value={0}
          sx={{ minWidth: 172 ,'& .MuiTabs-indicator': { display: 'none' }}}
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
            <Table aria-label="simple table">
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
                  bookingsData && bookingsData?.map((item: any) =>
                    <TableRow key={item.startDate}>
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
                      <TableCell className="tripBody">{item.BookingId}</TableCell>
                      <TableCell className="tripBody">{item.hotelName}</TableCell>
                      <TableCell className="tripBody">{item.hotelAddress}</TableCell>
                      <TableCell className="tripBody">{item.PaxName}</TableCell>
                      <TableCell className="tripBody">{item.startDate}</TableCell>
                      <TableCell className="tripBody">
                        <Stack
                          direction="row"
                          alignItems={"center"}
                          justifyContent="space-between"
                          spacing={2}
                          className="mr-1"
                        >
                          <span>
                            <Button variant="contained" className="filterApplyButton ">
                              Yes
                            </Button>
                          </span>
                          <span>
                            <Button variant="outlined" className="resetButton">
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
  )
}

export { TravelStatusHomePage };
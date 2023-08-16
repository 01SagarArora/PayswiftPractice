import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';
import "../Static/TravelStatusHomePage.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from "@mui/material/Stack";
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import { tripData } from "../../mockData";
import { Button, Typography, Table, TableBody } from '@mui/material';
import PaginationButton, { PaginationData } from 'components/Pagination/PaginationButton';
import { useState } from 'react';
import { travelStatusTripApi } from "api";
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'store/store';
// import { PaginationModel } from './PaginationModel';
// import checkMark from "../../assets/images/icons/checkMark.svg";

import { styled } from '@mui/system';
import TravelStatusIconSvg from './TravelStatusIconSvg';

const ShadowBox = styled('div')({
  borderRadius: '0px 6px 6px 6px',
  boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.3)',
  backgroundColor: '#fff',
  overflow: 'hidden'
});

const InfoBox = styled('div')({
  fontFamily: 'Rubik',
  fontSize: '13px',
  lineHeight: '1.23',
  color: '#333',
  borderRadius: '8px',
  backgroundColor: '#fffcc7',
  padding: '16px'
});


const TravelStatusHomePage = () => {
  const [bookingsData, setBookingsData] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1);
  const [paginationData] = useState<PaginationData>(
    {} as PaginationData
  );
  const travelStatusTripDispatch = useDispatch<AppDispatch>();

  const getTravelStatusList = () => {
    travelStatusTripDispatch(
      travelStatusTripApi.endpoints.getTripData.initiate({})
    ).then((response: any) => {
      const tripDataArray: string[] = [];
      console.log("response", response)
      const tripData = JSON.parse(response.data)
      tripData?.data?.forEach((tripDataItem: any) => {
        tripDataItem.bookings?.forEach((bookingsItem: any) => {
          tripDataArray?.push(bookingsItem);
        })
      })
      setBookingsData(tripDataArray);


    });
  }

  // const updatePagination = () => {
  //   const paginationData = PaginationModel.getPaginationData({
  //     startIndex: 1,
  //     endIndex: 10,
  //     nextPageLink: "nextPage",
  //     pageNumber: page,
  //     previousPageLink: "previousPage",
  //     recordInPages: 3,
  //     totalPages: 20,
  //     totalRecords: bookingsData.length,
  //     responseStatus: bookingsData.status,
  //     listingData: bookingsData
  //   });
  //   setPaginationData({ ...paginationData });
  // }

  useEffect(() => {

    // updatePagination();
    getTravelStatusList();
  }, [page])


  return (
    <Container>
      <SEO title={PAGE.travelStatus.title} description={PAGE.travelStatus.description} />
      <Stack className="padding">
        <Tabs aria-label="travel status tab"
          variant="scrollable"
          scrollButtons="auto"
          className="mainTabs"
          sx={{ minWidth: 172 }}
        >
          <Tab className="tabLink"
            label={
              <Box sx={{display:"flex"}}>
                <TravelStatusIconSvg/>
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
                          <span className="imageContainer"></span>
                          <span>{item.TripId}</span>
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
              <Typography variant="body2">
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
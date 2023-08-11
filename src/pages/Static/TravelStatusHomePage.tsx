import Container from '@mui/material/Container';
import Box from "@mui/material/Box";
import SEO from '../../seo/Seo';
import { PAGE } from '../../seo/seo.constant';
import "../Static/TravelStatusHomePage.scss";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from "@mui/material/Stack";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { tripData } from "../../mockData";
import { Button } from '@mui/material';


const TravelStatusHomePage = () => {

  let tripDataArray: string[] = [];
  tripData?.data?.map((item) => {
    item.bookings?.map((data: any) => {
      tripDataArray?.push(data);
    })
  })
  return (
    <Container>
      <SEO title={PAGE.travelStatus.title} description={PAGE.travelStatus.description} />
      <section className="padding-b">
        <Stack>
          <Tabs aria-label="basic tabs example">
          <i className="trip-icon-checkMark"></i>
            <Tab className="tabLink" label="Travel Status" />
          </Tabs>
          <Box className="filterBox padding">
            <TableContainer>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tripHeader">Trip Id</TableCell>
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
                    tripDataArray?.map((item: any) =>
                      <>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell className="tripBody">{item.TripId}</TableCell>
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
                        </TableRow>
                      </>
                    )
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </section>
    </Container>
  )
}

export { TravelStatusHomePage };
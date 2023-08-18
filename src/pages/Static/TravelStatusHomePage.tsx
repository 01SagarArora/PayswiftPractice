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
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from 'store/store';
import { Booking } from 'models/PendingUpdate';
import { commonApi } from 'api/commonApi/apis';
import { UPDATE_TRAVEL_STATUS } from 'utils/constants';
import { setPendingList } from 'store/PostSlice/PostSlice';
import TSDialog from 'pages/TSDialog/TSDialog';
import { useState } from 'react';


const TravelStatusHomePage = () => {
  const tripDataArray = useSelector((state:RootState)=> state.pendingList?.data);
  const reasonData = useSelector((state: RootState)=> state.reasonData?.data);
  const isReasonLoaded = useSelector((state:RootState)=> state.reasonData.isReasonLoaded);
  const flightReasons = reasonData?.configurations?.travelStatusConfig.domFlight;
  const hotelReasons = reasonData?.configurations?.travelStatusConfig.domHotel;
  const [dialogProps,setDialogProps] = useState({show:false});
  const dispatch = useAppDispatch();
  //console.log(domReasons,hotelReasons);

  const updateTripList = (id:string)=>{
    let newArr = tripDataArray.filter((trip)=>trip.id!==id);
    setPendingList(newArr);
  }

  const onClickTravelled = (trip:any,isYes:boolean)=>{
    let tripObj = {
      updateList:[] as any[],
      type: trip.bookingType,
      //trip : {...trip},
    };
    tripObj.updateList.push({id: trip.id, status: isYes? 'Availed': 'U'});

    console.log(tripObj)

    
    if(isYes){
      //Todo: Set Loader
      delete tripObj.type;
      //As per production call update travel status api
      console.log(tripObj)
      return;
      dispatch(commonApi.endpoints.postApi.initiate({url: UPDATE_TRAVEL_STATUS, data: tripObj}))
      .then((res:any) =>{
        console.log(res);
        const resp = res.data;
        if(resp.data && resp.data.success == 'success'){
          updateTripList(trip.id);
        }else if(resp.data.httpCode == 401){
          //todo lgoin 
        }else if(resp.data.httpCode == 500){
          //todo error handling
        }
      })
    }else{
      // model show
      let props = {
        show:true,
        type: trip.bookingType as string,
        tripData: {...tripObj},
        reason : trip.bookingType =='AIR'? flightReasons : hotelReasons
      }
      setDialogProps(props);
    }

  }
  return (
    <>
    <Container>
      <SEO title={PAGE.travelStatus.title} description={PAGE.travelStatus.description} />
      <section className="padding-b">
        <Stack>
          <Tabs aria-label="basic tabs example" >
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
                    tripDataArray.length &&  tripDataArray?.map((item: Booking) =>
                      
                        <TableRow key={item.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
                                <Button variant="contained" className="filterApplyButton"
                                onClick={()=>{onClickTravelled(item,true)}}>
                                  Yes
                                </Button>
                              </span>
                              <span>
                                <Button variant="outlined" className="resetButton" disabled={!isReasonLoaded}
                                 onClick={()=>{onClickTravelled(item,false)}}>
                                  No
                                </Button>
                              </span>
                            </Stack>
                          </TableCell>
                        </TableRow>
                    
                    )
                  }
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </section>
    </Container>
    <TSDialog {...dialogProps} />
    </>
    
  )
}

export { TravelStatusHomePage };
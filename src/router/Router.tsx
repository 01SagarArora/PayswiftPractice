import { FC } from 'react';
import {Route, Routes} from 'react-router-dom';
import { ROUTE_CONSTANTS } from 'constants/routeConstants';
import {
  DefaultPage, 
} from 'pages';
import { TravelStatusHomePage } from 'pages/Static/TravelStatusHomePage';

const Router: FC = () => (  
  <Routes>    
    <Route path={ROUTE_CONSTANTS.DEFAULT_PAGE} element={<DefaultPage />} />
    <Route path={ROUTE_CONSTANTS.TRAVEL_STATUS_HOME_PAGE} element={<TravelStatusHomePage/>} />
  </Routes>
);
export default Router;
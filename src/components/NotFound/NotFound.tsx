import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { BASE_URL, LOGIN_URL, PROD_BASE_URL } from "utils/constants";
import { ROUTE_CONSTANTS } from "constants/routeConstants";
import NotFoundSvg from "./NotFoundSvg";
import "./NotFound.scss";

const NotFound = (props: {
  notFound?: {
    show?: boolean;
    noDataStatus?: boolean;
    viewMode?: string;
    tripId?: string;
    backdropUrl?: string;
    errorMsg?: string;
  };
}) => {
  function openLogin() {
    const loginRequiredUrl =
      PROD_BASE_URL +
      LOGIN_URL +
      `channel=crp&returnUrl=${BASE_URL}${ROUTE_CONSTANTS.BASE_PATH}${props?.notFound?.backdropUrl}`;
    window.location.href = loginRequiredUrl;
    return;
  }
  function goBack() {
    window.location.href = ROUTE_CONSTANTS.BASE_PATH+ROUTE_CONSTANTS.TRAVEL_STATUS_HOME_PAGE;
  }
  return props.notFound?.show ? (
    <div className="layer-not-found ">
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        className="body background-white height-100"
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Grid item xs={12} md={3} className="padding">
          <Stack>
            <div className="sorry-text">SORRY!!!</div>
            <div className="page-not-text">PAGE NOT FOUND</div>
            <div className="sub-text-404">
              <span>We could not find the resource you are looking for.</span>{" "}
              <br />
              Why not try us from{" "}
              <span>
                <a href="https://www.Yatra.com" className="text-link">
                  Yatra.com
                </a>
              </span>{" "}
              Home Page again?
            </div>
          </Stack>
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: "16px" }}
            onClick={() => openLogin()}
          >
            <span className="fs-20 padding-x">Log In</span>
          </Button>
        </Grid>
        <Grid item xs={12} md={7} className="padding">
          <NotFoundSvg notFound={props.notFound} />
        </Grid>
      </Stack>
    </div>
  ) : (
    <div className="layer-not-found ">
      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        className="body background-white height-100"
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Grid item xs={12} md={3} className="padding">
          <Stack>
            <div className="sorry-text">SORRY!!!</div>
            <div className="page-not-text">DETAILS NOT FOUND</div>
            <div className="sub-text-404">
              <span>{props.notFound?.errorMsg}</span> <br />
            </div>
          </Stack>
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: "16px" }}
            onClick={() => goBack()}
          >
            <span className="fs-20 padding-x">Go Back</span>
          </Button>
        </Grid>
        <Grid item xs={12} md={7} className="padding">
          <NotFoundSvg notFound={props.notFound} />
        </Grid>
      </Stack>
    </div>
  );
};

export default NotFound;

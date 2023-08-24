import {  Stack } from "@mui/material";
import "./NoResultFound.scss";
import NoResultFoundSvg from "./NoResultFoundSvg";

const NotFoundPage = () => {
    return (
        <div className="layer-not-found ">
            <Stack
                direction={'row'}
                >
                    <NoResultFoundSvg />
                    <Stack className = "noDataFoundContent">
                        <div className='sorry-text'>Sorry, No Data Found</div>
                        <div className='sub-text-404'>There were no Travel Status found for this scenario.</div>
                    </Stack>
            </Stack>
        </div>
    )
}

export { NotFoundPage }
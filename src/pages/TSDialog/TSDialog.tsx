import { Dialog, DialogTitle, IconButton, DialogContent, DialogActions, Button, MenuItem, Select, SelectChangeEvent, TextField, Divider } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { YT_TRAVEL_DATA } from "utils/helpers";

interface TSDialogProps {
    show: boolean,
    tripData?: any,
    type?: string,
    reason?: any,
    setDialogProps: (value: {
        show: boolean,
        tripData?: any,
        type?: string,
        reason?: any,
    }) => void
}
const TSDialog = (props: TSDialogProps) => {
    const [selStatus, setSelStatus] = useState("");

    const modelData = {
        title: 'Reason for not travelling',
        reasonList: [
            "Cancelled at Yatra",
            props.type === 'AIR' ? "Cancelled at Airline" : "Cancelled at Hotel",
            "No Show",
            "Dispute"
        ],
        isShowReasonDropdown: props?.reason?.reasonInputType == 'both' || props?.reason?.reasonInputType == 'master' || props?.reason?.reasonInputType == 'dropdown'
    }
    let selectedReason = modelData.isShowReasonDropdown ? YT_TRAVEL_DATA.defaultSelectedReason : '';
    const tripObj = props.tripData;
    const onClickSubmit = () => {
        if (selStatus == '') {
            return;
        }

        if (props.reason.reasonInputType == 'master' || props.reason.reasonInputType == 'dropdown') {
            tripObj.updateList[0].comment = selectedReason;
        }
    }
    const triggerAction = (action: string) => {
        if (action == 'OK') {
            onClickSubmit();
        }
        else if (action == 'CLOSE') {
            props.setDialogProps({ ...props, show: false })
        }
    }


    const handleChange = (event: SelectChangeEvent) => {
        setSelStatus(event.target.value as string);
    };

    return (
        <Dialog open={props.show} fullWidth={true} maxWidth={'sm'}>
            <DialogTitle>{modelData.title}
                <IconButton onClick={() => triggerAction('CLOSE')}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                    }}>
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <Divider />
            <DialogContent >
                {/* <Stack direction="column"> */}
                {modelData.isShowReasonDropdown ? <Select
                    sx={{ width: 300 }}
                    id="nt-reason"
                    value={selStatus}
                    displayEmpty
                    onChange={handleChange}
                >
                    <MenuItem disabled value="">Select Reason</MenuItem>
                    {modelData.reasonList.map((reason: string) => <MenuItem key={reason} value={reason}>{reason}</MenuItem>)}
                </Select> : ''}

                <TextField
                    sx={{ marginTop: '12px' }}
                    id="outlined-textarea"
                    className="w-100"
                    multiline
                    rows={3}
                    defaultValue=""
                />
                {/* </Stack> */}
            </DialogContent>
            <DialogActions className="m-2">
                <Button variant="contained" color="error" size="large"
                    onClick={() => triggerAction('OK')}
                    sx={{ boxShadow: 'none', textTransform: 'none', fontSize: '12px!important', fontWeight: '500', borderRadius: '4px!important' }} >Submit</Button>

            </DialogActions>
        </Dialog>
    )
}

export default TSDialog
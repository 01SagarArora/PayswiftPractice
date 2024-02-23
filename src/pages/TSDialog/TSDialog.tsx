import { Dialog, DialogTitle, IconButton, DialogContent, Button, MenuItem, TextField, Divider, Stack, FormControl, FormHelperText } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { LOGIN_URL, PROD_BASE_URL, UPDATE_TRAVEL_STATUS } from "utils/ApiConstants";
import { commonApi } from "api/commonApi/apis";
import { RootState, useAppDispatch } from "store/store";
import { updateMainListData } from "store/MainData/MainDataSlice";
import { useSelector } from "react-redux";
import { hideTSDialog } from "store/TSDialogSlice/TSDialogSlice";
import { ALERT_DIALOG, TS_DIALOG } from "constants/commonConstants";
import { showAlert } from "store/Alert/alertSlice";
import { YT_TRAVEL_DATA } from "utils/helpers";

interface TSDialogProps {
    onClose: () => void
}
const TSDialog = (props: TSDialogProps) => {
    const { register, formState: { errors}, reset, handleSubmit } = useForm();
    const [selectedReason, setSelectedReason] = useState("");
    const [showTextField, setShowTextField] = useState(false);
    // const [shoeReasonsValidation, setShowReasonsValidations] = useState(false);

    const show = useSelector((state: RootState) => state.tsDialog.show);
    const data = useSelector((state: RootState) => state.tsDialog.data);
    const dispatch = useAppDispatch();

    
    let modelData = {
        title: 'Reason for not travelling',
        statusList: data?.reasonData?.travelStatusMaster ? data?.reasonData?.travelStatusMaster : [
            "Cancelled at Yatra",
            data.type === 'AIR' ? "Cancelled at Airline" : "Cancelled at Hotel",
            "No Show",
            "Dispute"
        ],
        reasonList: data?.reasonData?.reasonInputMaster ? data?.reasonData?.reasonInputMaster : [
            "test",
            "test34"
        ],
        isShowReasonDropdown: data?.reasonData?.reasonInputType == 'both' || data?.reasonData?.reasonInputType == 'master' || data?.reasonData?.reasonInputType == 'dropdown'||false
    }

    useEffect(()=>{
        setSelectedReason(modelData?.reasonList[0])
    },[modelData]);

    useEffect(()=>{
        if(data?.reasonData?.reasonInputType)
        setShowTextField(data.reasonData.reasonInputType === 'text')
    },[data])
    const onClose = () => {
        reset();
        //props.setDialogProps({ ...props, show: false })
        props.onClose();

        dispatch(hideTSDialog());
    }
    const onSubmit: SubmitHandler<any> = (fData) => {
        // if (!modelData.isShowReasonDropdown) {
        //     setShowReasonsValidations(true);
        //     return;
        // }
        const obj = JSON.parse(JSON.stringify(data.tripData));

        obj.updateList[0].status = fData.status;
        obj.updateList[0].comment = showTextField ? fData.reasonText : fData.reason;
        delete obj.type;
        dispatch(commonApi.endpoints.postApi.initiate({ url: UPDATE_TRAVEL_STATUS +'?_&n='+Date.now(), data: obj }))
            .then((res: any) => {
                try {
                    const resp = JSON.parse(res.data);
                    if (resp && resp.status.toLowerCase() == 'success') {
                        //updating main data
                        props.onClose();
                        dispatch(updateMainListData(obj.updateList[0].id));
                        dispatch(hideTSDialog());
                        let alertData = {
                            title: ALERT_DIALOG.SUCCESS_TITLE,
                            messages: [ALERT_DIALOG.SUCCESSFULLY_UPDATED],
                            actions: ['OK'],
                        };
                        dispatch(showAlert(alertData));
                    } else if (resp.data.httpCode == 401) {
                        //todo lgoin 
                        const redirectUrl = window.location.href;
                        const loginRequiredUrl = PROD_BASE_URL + LOGIN_URL + `channel=crp&returnUrl=` + redirectUrl;
                        window.location.href = loginRequiredUrl;
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

    };
    const onError: SubmitErrorHandler<any> = (errors, e) => console.log('ereroe', errors, e);

    // FUNCTION FOR REASONS DROPDOWN
    const handleChangeReason = (event: any) => {
        if (data?.reasonData && data?.reasonData.reasonInputType === YT_TRAVEL_DATA.noReasonBothType) {
            setShowTextField(event.target.value === YT_TRAVEL_DATA.noReasonText)
        }
        setSelectedReason(event.target.value as string);
    };

    const handlePaste = (e: any) => {
        e.preventDefault();
    };

    return (
        <Dialog open={show} fullWidth={true} maxWidth={'sm'}>
            <DialogTitle>{modelData.title}
                <IconButton onClick={() => onClose()}
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
                <form onSubmit={handleSubmit(onSubmit, onError)}>
                    <Stack spacing={2}>
                        <FormControl size="small">
                            <TextField
                                select
                                className="w-50"
                                id="filled-size-normal"
                                label="Status"
                                {...register("status", { required: true })}

                                size="small"
                                defaultValue={modelData?.statusList[0]}
                                name="status"
                            >
                                {modelData?.statusList && modelData?.statusList.map(
                                    (status: any) => (
                                        <MenuItem key={status} value={status}>{status}</MenuItem>
                                    )
                                )}
                                
                            </TextField>

                            {errors.status?.type === 'required'&& <FormHelperText className="validation-error">{TS_DIALOG.SELECT_STATUS}</FormHelperText>}
                            {/* {shoeReasonsValidation && <FormHelperText className="validation-error">{TS_DIALOG.LIST_NOT_FETCHED}</FormHelperText>} */}

                        </FormControl>

                        {/* REASONS DROPDOWN */}
                        {
                            modelData?.isShowReasonDropdown &&
                            <FormControl >
                                <TextField
                                    size="small"
                                    select
                                    className="w-50"
                                    id="nt-reason"
                                    label="Reason"
                                    value={selectedReason}
                                    {...register("reason", { required: true })}
                                    defaultValue={modelData?.reasonList[0]}
                                    name="reason"

                                    onChange={handleChangeReason}

                                >
                                    {/* <MenuItem key="select reason" value="" disabled>{TS_DIALOG.SELECT_REASON}</MenuItem> */}
                                    {modelData?.reasonList?.map((reason: string) => <MenuItem key={reason} value={reason}>{reason}</MenuItem>)}
                                </TextField>

                                {errors.reason?.type == 'required' && <FormHelperText className="validation-error">{TS_DIALOG.PLEASE_SELECT_REASON}</FormHelperText>}
                            </FormControl>
                        }

                        {showTextField &&
                            <FormControl>
                                <TextField
                                    {...register('reasonText', {
                                        required: true,
                                        minLength: 10,
                                        pattern: /^(?!.*(?:[<>[\]@!#$%^&*()]|href))[ a-zA-Z0-9,.-]+$/
                                    })}
                                    sx={{ marginTop: '12px' }}
                                    id="outlined-textarea"
                                    className="w-100"
                                    multiline
                                    rows={3}
                                    defaultValue=""
                                    onPaste={handlePaste}
                                />
                                {errors.reasonText && errors.reasonText.type === 'required' && (
                                    <FormHelperText className="validation-error">{TS_DIALOG.REQUIRED_FIELD}</FormHelperText>
                                )}
                                {errors.reasonText && errors.reasonText.type === 'minLength' && (
                                    <FormHelperText className="validation-error">{TS_DIALOG.ENTER_CHAR}</FormHelperText>
                                )}
                                {errors.reasonText && errors.reasonText.type === 'pattern' && (
                                    <FormHelperText className="validation-error">{TS_DIALOG.NOT_ALLOWED_CHAR}</FormHelperText>
                                )}
                            </FormControl>
                        }

                        <Button variant="contained" color="error" size="small" type="submit" className="w-25"
                            sx={{ boxShadow: 'none', textTransform: 'none', fontSize: '12px!important', fontWeight: '500', borderRadius: '4px!important' }} >{TS_DIALOG.SUBMIT}</Button>
                    </Stack>

                </form>

            </DialogContent>
        </Dialog>
    )
}

export default TSDialog
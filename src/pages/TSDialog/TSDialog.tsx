import { Dialog, DialogTitle, IconButton, DialogContent, Button, MenuItem, TextField, Divider, Stack, FormControl, FormHelperText } from "@mui/material"
import CloseIcon from '@mui/icons-material/Close';
import { useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm} from "react-hook-form";
import { YT_TRAVEL_DATA } from "utils/helpers";
import { UPDATE_TRAVEL_STATUS } from "utils/constants";
import { commonApi } from "api/commonApi/apis";
import { useAppDispatch } from "store/store";
import { updateMainListData } from "store/MainData/MainDataSlice";

interface TSDialogProps {
    show: boolean,
    tripData?: any,
    type?: string,
    reasonData?: any,
    setDialogProps: (value: {
        show: boolean,
        tripData?: any,
        type?: string,
        reason?: any,
    }) => void
}
const TSDialog = (props: TSDialogProps) => {
    const {register, formState:{errors},handleSubmit} = useForm();
    const [selectedReason, setSelectedReason] = useState("");
    const [showTextField, setShowTextField] = useState(false);
    const dispatch = useAppDispatch();

    let modelData = {
        title: 'Reason for not travelling',
        statusList: [
            "Cancelled at Yatra",
            props.type === 'AIR' ? "Cancelled at Airline" : "Cancelled at Hotel",
            "No Show",
            "Dispute"
        ],
        reasonList: props?.reasonData?.reasonInputMaster,
        isShowReasonDropdown: props?.reasonData?.reasonInputType == 'both' || props?.reasonData?.reasonInputType == 'master' || props?.reasonData?.reasonInputType == 'dropdown'
    }
    useEffect(()=>{
        modelData = {
            ...modelData,
            reasonList: props?.reasonData?.reasonInputMaster,
            isShowReasonDropdown: props?.reasonData?.reasonInputType == 'both' || props?.reasonData?.reasonInputType == 'master' || props?.reasonData?.reasonInputType == 'dropdown'
        }
        console.log('change',modelData);
        setSelectedReason(modelData.isShowReasonDropdown ? YT_TRAVEL_DATA.defaultSelectedReason : '')
    },[props]);

    const onClose = () => {
            props.setDialogProps({ ...props, show: false })
    }
    const onSubmit:SubmitHandler<any> = (data, e) => {
        console.log(data, e)

        const obj = props.tripData;

        obj.updateList[0].status = data.status;
        obj.updateList[0].comment = showTextField ? data.reasonText : data.reason;
        delete obj.type;

        console.log("final obj",obj);
        dispatch(commonApi.endpoints.postApi.initiate({ url: UPDATE_TRAVEL_STATUS, data: obj }))
        .then((res: any) => {
          console.log(res);
          const resp = res.data;
          if (resp.data && resp.data.success == 'success') {
            //updating main data
            dispatch(updateMainListData(obj.updateList[0].id));
          } else if (resp.data.httpCode == 401) {
            //todo lgoin 
          } else if (resp.data.httpCode == 500) {
            //todo error handling
          }
        })

    };
    const onError:SubmitErrorHandler<any> = (errors, e) => console.log('ereroe',errors, e);


    const handleChangeReason = (event: any) => {
        if(props.reasonData && props.reasonData.reasonInputType === YT_TRAVEL_DATA.noReasonBothType){
            setShowTextField(event.target.value === YT_TRAVEL_DATA.noReasonText)
        }
        setSelectedReason(event.target.value as string);
    };

    return (
        <Dialog open={props.show} fullWidth={true} maxWidth={'sm'}>
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
                <form onSubmit={handleSubmit(onSubmit,onError)}>
                    <Stack spacing={2}>
                    <FormControl size="small">
                        <TextField
                            select
                            className="w-50"
                            id="filled-size-normal"
                            label="Status"
                            {...register("status",{required:true})}
                            
                            size="small"
                            defaultValue={""}
                            >
                            {modelData.statusList.map(
                                (status) => (
                                <MenuItem key={status} value={status}>{status}</MenuItem>
                                )
                            )}
                        </TextField>
                        
                        {errors.status?.type==='required' && <FormHelperText className="validation-error">Please select status</FormHelperText>}
                    </FormControl>

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
                        defaultValue={""}
                        {...register("reason",{required:true})}
                        onChange={handleChangeReason}
                        >
                            <MenuItem key="select reason" value="" disabled>Select reason</MenuItem>
                            {modelData.reasonList.map((reason: string) => <MenuItem key={reason} value={reason}>{reason}</MenuItem>)}
                        </TextField>
                        
                            {errors.reason?.type=='required' && <FormHelperText  className="validation-error">Please select reason</FormHelperText>}
                        </FormControl>
                    

                    }
                    {showTextField && 
                    <FormControl>
                        <TextField
                            {...register('reasonText',{required:true,minLength:10})}
                            sx={{ marginTop: '12px' }}
                            id="outlined-textarea"
                            className="w-100"
                            multiline
                            rows={3}
                            defaultValue=""
                        />
                            {errors.reasonText && <FormHelperText  className="validation-error">Enter minimum 10 characters</FormHelperText>}
                    </FormControl>
                    
                    }

                    <Button variant="contained" color="error" size="small" type="submit" className="w-25"
                    
                    sx={{ boxShadow: 'none', textTransform: 'none', fontSize: '12px!important', fontWeight: '500', borderRadius: '4px!important' }} >Submit</Button>
                </Stack>
                
                </form>
                
            </DialogContent>
        </Dialog>
    )
}

export default TSDialog
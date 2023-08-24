import { createSlice } from "@reduxjs/toolkit";

const TSDialogSlice = createSlice({
    name: 'pendingList',    
    initialState : { 
        show:false,
        data :{
            reasonData:{} as any,
            type:'',
            tripData:{} as any
        }
    },
    reducers : {
        showTSDialog(state){
            state.show = true
        },
        hideTSDialog(state){
            state.show = false
        },
        setTSDailogData(state,action){
            state.data = action.payload
        }

    }
});

export const {showTSDialog,hideTSDialog,setTSDailogData} = TSDialogSlice.actions;
export const tsDailogReducer = TSDialogSlice.reducer;
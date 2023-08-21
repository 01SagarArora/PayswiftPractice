import { createSlice } from "@reduxjs/toolkit";
import { ReasonData } from "models/ReasonData";

const reasonsSlice = createSlice({
    name:'reasons',
    initialState:{
        data: {} as ReasonData,
        isReasonLoaded: false
    },
    reducers:{
        setReasonData : (state, action)=>{  
            state.data = action?.payload;
        },
        setReasonLoaded : (state)=>{
            state.isReasonLoaded = true
        }
    }
});

export const {setReasonData,setReasonLoaded} = reasonsSlice.actions;
export const reasonsReducer = reasonsSlice.reducer;
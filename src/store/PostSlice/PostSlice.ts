import { createSlice } from "@reduxjs/toolkit";
import { Booking } from "models/PendingUpdate";

const pendingListSlice = createSlice({
    name: 'pendingList',
    initialState : { 
        data: [] as Booking[] 
    },
    reducers : {
        setPendingList : (state, action)=>{  
            state.data = action?.payload;
        }
    }
});

export const {setPendingList} = pendingListSlice.actions;
export const pendingListReducer = pendingListSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import { Booking } from "models/PendingUpdate";


const mainDataSlice = createSlice({
    name: 'mainData',
    initialState: {
        mainData: [] as Booking[] ,
        csrfToken:""
    },
    reducers: {
        setMainData(state, action) {
            state.mainData = action.payload;
        },
        setToken(state, action) {
            state.csrfToken = action.payload;
        }
    }
})

export const { setMainData, setToken } = mainDataSlice.actions;
export const mainDataReducer = mainDataSlice.reducer;

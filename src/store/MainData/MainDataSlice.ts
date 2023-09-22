import { createSlice } from "@reduxjs/toolkit";
import { Booking} from './../../models/PendingUpdate';


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
        },
        updateMainListData(state,action){
            state.mainData = state.mainData.filter(booking=> action.payload!== booking.id)
        }
    }
})

export const { setMainData, setToken,updateMainListData } = mainDataSlice.actions;
export const mainDataReducer = mainDataSlice.reducer;

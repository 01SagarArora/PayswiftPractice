import { createSlice } from "@reduxjs/toolkit";
// import { TripType } from "models/PaymentOptions";

const mainDataPaymentSlice = createSlice({
    name: 'mainDataPayment',
    initialState: {
        mainDataPayment: [] as any[],
    },
    reducers: {
        setPaymentMainData(state, action) {
            state.mainDataPayment = action.payload;
        }
    }
})

export const { setPaymentMainData } = mainDataPaymentSlice.actions;
export const mainDataPaymentReducer = mainDataPaymentSlice.reducer;

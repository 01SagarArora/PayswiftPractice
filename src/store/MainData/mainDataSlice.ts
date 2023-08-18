import { createSlice } from "@reduxjs/toolkit";
// import {MAIN_DATA} from 'server/middlewares/mainDataRequests';


const mainDataSlice = createSlice({
    name : 'queryProp',
    initialState : { mainData : {
            data:[{}],
            status:"200"       
    },csrfToken:""},
    reducers : {
        setMainData(state , action){
            state.mainData = action.payload;
        },
        setToken(state , action){
            state.csrfToken = action.payload;
        }
    }
})

export const { setMainData,setToken } = mainDataSlice.actions;
export const mainDataReducer = mainDataSlice.reducer;

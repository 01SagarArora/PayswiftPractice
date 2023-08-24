import { createSlice } from "@reduxjs/toolkit";
import { AlertActions } from '../../services/uiServices/alert.interface'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const INITIAL_STATE = {
    show: false,
    title: '',
    messages: [''],
    actions: [AlertActions.OK],
    icon: {
        name: InfoOutlinedIcon,
        color: 'black'
    }
};
const alertSlice = createSlice({
    name: 'alert',
    initialState: INITIAL_STATE,
    reducers: {
        showAlert: (state, action) => {
            state.show = true;
            state.title = action?.payload.title;
            state.messages = action?.payload.messages;
            state.actions = action.payload.actions;
            state.icon = action.payload.icon;

        },
        hideAlert: (state) => {
            state.show = false;
        }
    }
})

export const { showAlert, hideAlert } = alertSlice.actions;
export const alertReducer = alertSlice.reducer
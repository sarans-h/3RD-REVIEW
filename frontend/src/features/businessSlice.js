import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = { 
    business: {}, 
    bLoading: false,
    bIsUpdated: false, 
    berror: null,
    businesss: [],
   
};
const businessSlice = createSlice({
    name: 'business',
    initialState,
    reducers: {
        addBusinessRequest: (state) => {
            state.bLoading = true;
        },
        addBusinessSuccess: (state, action) => {
            state.bLoading = false;
            state.business = action.payload;
        },
        addBusinessFail: (state, action) => {
            state.bLoading = false;
            state.berror = action.payload;
        },
        loadMyBusinessRequest:(state)=>{
            state.bLoading=true;
        },
        loadMyBusinessSuccess:(state,action)=>{
            state.bLoading=false;
            state.businesss=action.payload;
        },
        loadMyBusinessFail:(state,action)=>{
            state.bLoading=false;
            state.berror=action.payload;
        },
        

        clearberrors: (state) => {
            state.berror = null;
        }
    }
});

export const { 
    addBusinessRequest,
    addBusinessSuccess,
    addBusinessFail,
    loadMyBusinessRequest,
    loadMyBusinessSuccess,
    loadMyBusinessFail,
    clearberrors } = businessSlice.actions;

export const addBusiness = (formData) => async (dispatch) => {
    try {
        dispatch(addBusinessRequest());
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        };
        const { data } = await axios.post('/api/business/createbusiness', formData, config);
        dispatch(addBusinessSuccess(data));
    } catch (error) {
        dispatch(addBusinessFail(error.response.data.message));
    }
};
export const myBusiness = () => async (dispatch) => {
    try {
        dispatch(loadMyBusinessRequest());
        const { data } = await axios.get('/api/business/mybusiness');
        dispatch(loadMyBusinessSuccess(data));
    } catch (error) {
        dispatch(loadMyBusinessFail(error.response.data.message));
    }
};




export default businessSlice.reducer;
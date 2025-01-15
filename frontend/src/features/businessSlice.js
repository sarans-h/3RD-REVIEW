import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import API_URL from './constant';

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
        getBusinessRequest: (state) => {
            state.bLoading = true;
        },
        getBusinessSuccess: (state, action) => {
            state.bLoading = false;
            state.business = action.payload;
        },
        getBusinessFail: (state, action) => {
            state.bLoading = false;
            state.berror = action.payload;
        },
        clearBusiness: (state) => {
            state.business = {};
            state.bLoading = false;
            state.berror = null;
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
    getBusinessRequest,
    getBusinessSuccess,
    getBusinessFail,
    clearBusiness,
    clearberrors } = businessSlice.actions;

export const addBusiness = (formData) => async (dispatch) => {
    try {
        dispatch(addBusinessRequest());
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            withCredentials: true, 
        };
        const { data } = await axios.post(`${API_URL}/api/business/createbusiness`, formData, config);
        dispatch(addBusinessSuccess(data));
    } catch (error) {
        dispatch(addBusinessFail(error.response.data.message));
    }
};
export const myBusiness = () => async (dispatch) => {
    try {
        dispatch(loadMyBusinessRequest());
        const config = {
            withCredentials: true, // Include cookies in the request
        };
        const { data } = await axios.get(`${API_URL}/api/business/mybusiness`, config);
        dispatch(loadMyBusinessSuccess(data));
    } catch (error) {
        dispatch(loadMyBusinessFail(error.response.data.message));
    }
};
export const getBusiness = (businessId) => async (dispatch) => {
    try {
        dispatch(getBusinessRequest());
        const {data}=await axios.get(`${API_URL}/api/business/getbusiness`, {
            headers: {
              'businessId': businessId, 
            },
            withCredentials: true,
          });
        dispatch(getBusinessSuccess(data));
    }
    catch (error) {
        // console.log(error);
        dispatch(getBusinessFail(error.response.data.message));
    }
}




export default businessSlice.reducer;
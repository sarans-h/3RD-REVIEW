import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const token = document.cookie.split('; ').find(row => row.startsWith('access_token='));
const initialState = { 
    user: {}, 
    loading: false,
    isUpdated: false, 
    isAuthenticated: !!token, 
    error: null,
    users: [],
    userDetails: {}
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        authRequest: (state) => {
            state.loading = true;
            state.isAuthenticated = false;
        },
        authSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        authFail: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
            state.user=null;
        },
        loadUserRequest:(state)=>{
            state.loading=true;
            state.isAuthenticated=false;
        },
        loadUserSuccess:(state,action)=>{
            state.loading=false;
            state.isAuthenticated=true;
            state.user=action.payload;
        },
        loadUserFail:(state,action)=>{
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
            state.user=null;
        },
        logoutSuccess:(state)=>{
            state.loading=false;
            state.user=null;
            state.isAuthenticated=false;

        },
        logoutFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },

        updateProfileRequest:(state)=>{
            state.loading=true;
        },
        updateProfileSuccess:(state,action)=>{
            state.loading = false;
            state.isUpdated = true; 
        },
        updateProfileFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        updateProfileReset:(state,action)=>{
            state.isUpdated=false;
        },
        updatePasswordRequest:(state,action)=>{
            state.loading=true;
        },
        updatePasswordSuccess:(state,action)=>{
            state.loading = false;
            state.isUpdated = true; 
        },
        updatePasswordFail:(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        },
        updatePasswordReset:(state,action)=>{
            state.isUpdated=false;
        },
        forgotPasswordRequest:(state,action)=>{
            state.loading=true;
            state.error=null;
        },
        forgotPasswordSuccess:(state,action)=>{
            state.loading = false;
            state.message=action.payload;

        },
        forgotPasswordFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
        resetPasswordRequest:(state,action)=>{
            state.loading=true;
            state.error=null;
        },
        resetPasswordSuccess:(state,action)=>{
            state.loading = false;
            state.success=action.payload;
        },
        resetPasswordFail:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        },
       
        

        clearErrors: (state) => {
            state.error = null;
        }
    }
});

export const { authRequest,
    authSuccess,
    authFail,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail,
    logoutSuccess,
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail,
    updateProfileReset,
    updatePasswordRequest,
    updatePasswordSuccess,
    updatePasswordFail,
    updatePasswordReset,
    forgotPasswordRequest,
    forgotPasswordSuccess,
    forgotPasswordFail,
    resetPasswordRequest,
    resetPasswordSuccess,
    resetPasswordFail,
    clearErrors } = userSlice.actions;

export const loginUser = (formData) => async (dispatch) => {
    try {
        dispatch(authRequest());
        const config = { headers: { "Content-Type": "multipart/form-data" } };

        const { data } = await axios.post('/api/auth/signin', formData, config);
        console.log(data);

        dispatch(authSuccess(data));
    } catch (error) {
        dispatch(authFail(error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message));
    }
};
export const logoutUser = () => async (dispatch) => {
    try {
        await axios.post('/api/auth/signout');

        dispatch(logoutSuccess()); // No payload needed if we're setting user to null
        
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message || 'An unknown error occurred';
        dispatch(logoutFail(errorMessage));
    }
};
export const registerUser = (formdata) => async (dispatch) => {
    try {
        dispatch(authRequest());
        const config = { headers: { "Content-Type": "multipart/form-data" } };
        const { data } = await axios.post('/api/auth/signup', formdata,config);
        console.log(data);

        dispatch(authSuccess(data.user));
    } catch (error) {
        dispatch(authFail(error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message));
    }
};

export const loadUser=()=>async(dispatch)=>{
    try{
        dispatch(loadUserRequest());
        const {data}=await axios.get(
            '/api/auth/me',
        )
        dispatch(loadUserSuccess(data));

    }catch(error){
        
       

        dispatch(loadUserFail(error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message));
            
    }
}





export default userSlice.reducer;
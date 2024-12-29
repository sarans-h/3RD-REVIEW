
import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './features/userSlice';
import businessReduer from './features/businessSlice';
const store = configureStore({
    reducer: {
        user:userReducer,
        business:businessReduer
    },
});
export default store;
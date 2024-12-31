
import { configureStore } from '@reduxjs/toolkit';
import  userReducer  from './features/userSlice';
import businessReduer from './features/businessSlice';
import productReducer from './features/productSlice';
const store = configureStore({
    reducer: {
        user:userReducer,
        business:businessReduer,
        product:productReducer,
    },
});
export default store;
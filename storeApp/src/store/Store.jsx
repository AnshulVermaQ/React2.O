import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './CardSlice';

const AppStore = configureStore({
    reducer:{
        cart:cartReducer
    }
})

export default AppStore;
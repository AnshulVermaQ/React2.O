import {configureStore} from '@reduxjs/toolkit'
import apiSlice from './apiSlice';
import counterReducer from './CounterSlice.jsx';

const store = configureStore({
    reducer:{
        counter: counterReducer,
    },

    middleware: (prevMiddleware) => prevMiddleware.concat(apiSlice.middleware),
})

export default store;
import {configureStore} from '@reduxjs/toolkit';
import lightReducer from './lightSlice';

export const store = configureStore({
    reducer: {
        lighter: lightReducer,
    }
})
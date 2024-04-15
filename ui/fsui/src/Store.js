import { configureStore } from '@reduxjs/toolkit';
import updateReducer from '../src/Slice/updateslice';

export const store = configureStore({
    reducer: updateReducer
})
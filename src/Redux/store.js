// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './slice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
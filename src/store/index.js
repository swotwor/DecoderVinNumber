import { configureStore } from '@reduxjs/toolkit';
import VIN from './reducer.js'

export const store = configureStore({
  reducer: {
    VIN
  },
})
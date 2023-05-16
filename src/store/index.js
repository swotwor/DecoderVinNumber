import VIN from './reducer.js';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { VIN }
})
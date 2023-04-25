import { configureStore } from '@reduxjs/toolkit';
import buttonsReducer from './Button';

const store = configureStore({
  reducer: {
    buttons: buttonsReducer,
  },
});

export default store;

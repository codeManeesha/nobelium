import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const buttonsSlice = createSlice({
  name: 'buttons',
  initialState,
  reducers: {
    incrementButton: (state, action) => {
      const { buttonName } = action.payload;
      if (state[buttonName]) {
        state[buttonName]++;
      } else {
        state[buttonName] = 1;
      }
    },
  },
});

export const { incrementButton } = buttonsSlice.actions;

export default buttonsSlice.reducer;

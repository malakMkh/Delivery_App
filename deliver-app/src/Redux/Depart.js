import { createSlice } from '@reduxjs/toolkit';

export const departSlice = createSlice({
  name: 'depart',
  initialState: {
    Data_d: [],
  },
  reducers: {
    addData: (state, action) => {
      state.Data_d.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData } = departSlice.actions;

export default departSlice.reducer;

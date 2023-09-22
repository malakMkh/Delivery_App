import { createSlice } from '@reduxjs/toolkit';

export const departSlice = createSlice({
  name: 'arrivee',
  initialState: {
    Data_a: [],
  },
  reducers: {
    addData_a: (state, action) => {
      state.Data_a.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData_a } = departSlice.actions;

export default departSlice.reducer;

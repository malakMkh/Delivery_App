import { createSlice } from '@reduxjs/toolkit';

export const departSlice = createSlice({
  name: 'objet',
  initialState: {
    Data_o: [],
  },
  reducers: {
    addData_o: (state, action) => {
      state.Data_o.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addData_o } = departSlice.actions;

export default departSlice.reducer;

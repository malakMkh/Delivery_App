import { createSlice } from '@reduxjs/toolkit';

export const estimationSlice = createSlice({
  name: 'estimation',
  initialState: {},
  reducers: {
    addest: (state, action) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addest } = estimationSlice.actions;

export default estimationSlice.reducer;

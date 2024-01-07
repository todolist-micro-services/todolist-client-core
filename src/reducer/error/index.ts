import { createSlice } from "@reduxjs/toolkit";

import { initialErrorState } from "@core/dto";

const errorSlice = createSlice({
  name: "error",
  initialState: initialErrorState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;

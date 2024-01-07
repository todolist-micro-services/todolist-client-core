import { createSlice } from "@reduxjs/toolkit";

import { initialErrorState } from "@core/dto";
import { UseCases } from "../types.ts";

const errorSlice = createSlice({
  name: UseCases.Error,
  initialState: initialErrorState,
  reducers: {
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;

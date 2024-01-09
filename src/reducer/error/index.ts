import { createSlice } from "@reduxjs/toolkit";

import { initialError } from "@core/dto";
import { UseCases } from "../types.ts";

const errorSlice = createSlice({
  name: UseCases.Error,
  initialState: initialError,
  reducers: {
    setErrorMessage: (state, action) => {
      state.id += 1;
      state.errorMessage = action.payload;
      state.time = new Date();
    },
  },
});

export const { setErrorMessage } = errorSlice.actions;

export default errorSlice.reducer;

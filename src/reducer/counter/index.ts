import { createSlice } from "@reduxjs/toolkit";

import { initialCounterState } from "@core/dto";
import incrementAsync from "@core/core/counter";

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {
        state.status = "failure";
      });
  },
});

export default counterSlice.reducer;

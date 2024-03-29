import { createSlice } from "@reduxjs/toolkit";

import { initialCounter } from "@core/dto";
import incrementAsync from "@core/core/counter";
import { CounterState } from "./type.ts";
import { UseCases } from "../types.ts";

export const counterSlice = createSlice({
  name: UseCases.Counter,
  initialState: initialCounter as CounterState,
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
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default counterSlice.reducer;

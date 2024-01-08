import { createSlice } from "@reduxjs/toolkit";

import incrementAsync from "@core/core/counter";
import { initialToken } from "@core/dto";
import { TokenState } from "./type.ts";
import { UseCases } from "../types.ts";

export const loginSlice = createSlice({
  name: UseCases.Login,
  initialState: initialToken as TokenState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = "pending";
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = "success";
        state.value = action.payload.toString();
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default loginSlice.reducer;

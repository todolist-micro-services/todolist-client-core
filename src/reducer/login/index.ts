import { createSlice } from "@reduxjs/toolkit";

import incrementAsync from "@core/core/login";
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
        state.token = action.payload.token;
        state.expiration = action.payload.expiration;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default loginSlice.reducer;

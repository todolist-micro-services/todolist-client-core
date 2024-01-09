import { createSlice } from "@reduxjs/toolkit";

import loginCore from "@core/core/auth/login";
import { initialToken } from "@core/dto";
import { TokenState } from "./type.ts";
import { UseCases } from "../../types.ts";

export const loginSlice = createSlice({
  name: UseCases.Login,
  initialState: initialToken as TokenState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(loginCore.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        state.expiration = action.payload.expiration;
      })
      .addCase(loginCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default loginSlice.reducer;

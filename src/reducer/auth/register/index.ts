import { createSlice } from "@reduxjs/toolkit";

import registerCore from "@core/core/auth/register";
import { initialToken } from "@core/dto";
import { TokenState } from "./type.ts";
import { UseCases } from "../../types.ts";

export const registerSlice = createSlice({
  name: UseCases.Register,
  initialState: initialToken as TokenState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(registerCore.fulfilled, (state, action) => {
        state.status = "success";
        state.token = action.payload.token;
        state.expiration = action.payload.expiration;
      })
      .addCase(registerCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default registerSlice.reducer;

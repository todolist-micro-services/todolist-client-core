import { createSlice } from "@reduxjs/toolkit";

import { initialUser } from "@core/dto";
import { UserState } from "./type.ts";
import { UseCases } from "../../types.ts";
import deleteUserCore from "@core/core/users/deleteUser";

export const deleteUserSlice = createSlice({
  name: UseCases.DeleteUser,
  initialState: initialUser as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteUserCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteUserCore.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteUserCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default deleteUserSlice.reducer;

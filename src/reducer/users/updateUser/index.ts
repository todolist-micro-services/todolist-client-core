import { createSlice } from "@reduxjs/toolkit";

import { initialUser } from "@core/dto";
import updateUserCore from "@core/core/users/updateUser";
import { UserState } from "./type.ts";
import { UseCases } from "../../types.ts";

export const updateUserSlice = createSlice({
  name: UseCases.DeleteUser,
  initialState: initialUser as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUserCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateUserCore.fulfilled, (state, action) => {
        state.status = "success";
        state.id = action.payload.id;
        state.firstname = action.payload.firstname;
        state.lastname = action.payload.lastname;
        state.email = action.payload.email;
      })
      .addCase(updateUserCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default updateUserSlice.reducer;

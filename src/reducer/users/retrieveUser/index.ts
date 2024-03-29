import { createSlice } from "@reduxjs/toolkit";

import { initialUser } from "@core/dto";
import { UserState } from "./type.ts";
import { UseCases } from "../../types.ts";
import retrieveUserCore from "@core/core/users/retrieveUser";
import updateUser from "@core/core/users/updateUser";

export const retrieveUserSlice = createSlice({
  name: UseCases.RetrieveUser,
  initialState: initialUser as UserState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveUserCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(retrieveUserCore.fulfilled, (state, action) => {
        state.status = "success";
        state.id = action.payload.id;
        state.firstname = action.payload.firstname;
        state.lastname = action.payload.lastname;
        state.email = action.payload.email;
      })
      .addCase(retrieveUserCore.rejected, (state) => {
        state.status = "failure";
      })
      .addCase(updateUser.pending, (state, action) => {
        const { user } = action.meta.arg;
        state.firstname = user.firstname;
        state.lastname = user.lastname;
      });
  },
});

export default retrieveUserSlice.reducer;

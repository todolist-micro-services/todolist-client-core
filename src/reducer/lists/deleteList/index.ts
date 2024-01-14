import { createSlice } from "@reduxjs/toolkit";

import { initialList } from "@core/dto";
import deleteListCore from "@core/core/lists/deleteList";
import { UseCases } from "../../types.ts";
import { ListState } from "./type.ts";

export const deleteListSlice = createSlice({
  name: UseCases.DeleteList,
  initialState: initialList as ListState,
  reducers: {
    resetDeleteListStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteListCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteListCore.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteListCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default deleteListSlice.reducer;
export const { resetDeleteListStatus } = deleteListSlice.actions;

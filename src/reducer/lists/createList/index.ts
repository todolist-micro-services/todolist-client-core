import { createSlice } from "@reduxjs/toolkit";

import createListCore from "@core/core/lists/createList";
import { UseCases } from "../../types.ts";
import { initialList } from "./type.ts";

export const createListSlice = createSlice({
  name: UseCases.CreateList,
  initialState: initialList,
  reducers: {
    resetCreateListStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createListCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createListCore.fulfilled, (state, action) => {
        state.status = "success";
        state.id = action.payload.list;
      })
      .addCase(createListCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default createListSlice.reducer;
export const { resetCreateListStatus } = createListSlice.actions;

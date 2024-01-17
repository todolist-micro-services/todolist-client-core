import { createSlice } from "@reduxjs/toolkit";

import { initialList } from "@core/dto";
import linkUserToListCore from "@core/core/lists/linkUserToList";
import { UseCases } from "../../types.ts";
import { ListState } from "./type.ts";

export const linkUserToListSlice = createSlice({
  name: UseCases.LinkUserToList,
  initialState: initialList as ListState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(linkUserToListCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(linkUserToListCore.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(linkUserToListCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default linkUserToListSlice.reducer;

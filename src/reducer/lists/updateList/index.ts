import { createSlice } from "@reduxjs/toolkit";

import updateListCore from "@core/core/lists/updateList";
import { UseCases } from "../../types.ts";
import { initialList } from "./type.ts";

export const updateListSlice = createSlice({
  name: UseCases.UpdateList,
  initialState: initialList,
  reducers: {
    resetUpdateListStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateListCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateListCore.fulfilled, (state, action) => {
        state.status = "success";
        state.list = {
          name: action.payload.name,
          description: action.payload.description,
          project: action.payload.project,
          id: action.payload.listId,
          creator: action.payload.creator,
          parent: action.payload.parent ? action.payload.parent : undefined,
        };
      })
      .addCase(updateListCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default updateListSlice.reducer;
export const { resetUpdateListStatus } = updateListSlice.actions;

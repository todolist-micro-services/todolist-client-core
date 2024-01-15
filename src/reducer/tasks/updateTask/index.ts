import { createSlice } from "@reduxjs/toolkit";

import updateTaskCore from "@core/core/tasks/updateTask";
import { UseCases } from "../../types.ts";
import { initialTask } from "./type.ts";
import { initialList, initialUser } from "@core/dto";

export const updateTaskSlice = createSlice({
  name: UseCases.UpdateTask,
  initialState: initialTask,
  reducers: {
    resetUpdateTaskStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateTaskCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateTaskCore.fulfilled, (state, action) => {
        state.status = "success";
        state.task = {
          id: action.payload.taskId,
          name: action.payload.name,
          description: action.payload.description,
          creationDate: new Date(action.payload.creationDateTime),
          creator: { ...initialUser, id: action.payload.creator.userId },
          list: { ...initialList, id: action.payload.list.listId },
        };
      })
      .addCase(updateTaskCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default updateTaskSlice.reducer;
export const { resetUpdateTaskStatus } = updateTaskSlice.actions;

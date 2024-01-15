import { createSlice } from "@reduxjs/toolkit";

import { initialTask } from "@core/dto";
import deleteTaskCore from "@core/core/tasks/deleteTask";
import { UseCases } from "../../types.ts";
import { TaskState } from "./type.ts";

export const deleteTaskSlice = createSlice({
  name: UseCases.DeleteTask,
  initialState: initialTask as TaskState,
  reducers: {
    resetDeleteTaskStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTaskCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteTaskCore.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteTaskCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default deleteTaskSlice.reducer;
export const { resetDeleteTaskStatus } = deleteTaskSlice.actions;

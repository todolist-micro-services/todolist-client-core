import { createSlice } from "@reduxjs/toolkit";

import createTaskCore from "@core/core/tasks/createTask";
import { UseCases } from "../../types.ts";
import { initialTask } from "./type.ts";

export const createTaskSlice = createSlice({
  name: UseCases.CreateTask,
  initialState: initialTask,
  reducers: {
    resetCreateTaskStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTaskCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createTaskCore.fulfilled, (state, action) => {
        state.status = "success";
        state.id = action.payload.task;
      })
      .addCase(createTaskCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default createTaskSlice.reducer;
export const { resetCreateTaskStatus } = createTaskSlice.actions;

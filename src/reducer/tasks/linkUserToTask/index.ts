import { createSlice } from "@reduxjs/toolkit";

import linkUserToTaskCore from "@core/core/tasks/linkUserToTask";
import { initialTask } from "@core/dto";
import { UseCases } from "../../types.ts";
import { TaskState } from "./type.ts";

export const linkUserToTaskSlice = createSlice({
  name: UseCases.LinkUserToTask,
  initialState: initialTask as TaskState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(linkUserToTaskCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(linkUserToTaskCore.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(linkUserToTaskCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default linkUserToTaskSlice.reducer;

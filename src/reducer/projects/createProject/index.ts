import { createSlice } from "@reduxjs/toolkit";

import createProjectCore from "@core/core/projects/createProject";
import { UseCases } from "../../types.ts";
import { initialProject } from "./type.ts";

export const createProjectSlice = createSlice({
  name: UseCases.CreateProject,
  initialState: initialProject,
  reducers: {
    resetCreateProjectStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProjectCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(createProjectCore.fulfilled, (state, action) => {
        state.status = "success";
        state.id = action.payload.project;
      })
      .addCase(createProjectCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default createProjectSlice.reducer;
export const { resetCreateProjectStatus } = createProjectSlice.actions;

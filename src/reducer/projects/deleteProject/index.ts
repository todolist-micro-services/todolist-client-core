import { createSlice } from "@reduxjs/toolkit";

import { initialProject } from "@core/dto";
import deleteProjectCore from "@core/core/projects/deleteProject";
import { UseCases } from "../../types.ts";
import { ProjectState } from "./type.ts";

export const deleteProjectSlice = createSlice({
  name: UseCases.DeleteProject,
  initialState: initialProject as ProjectState,
  reducers: {
    resetDeleteProjectStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteProjectCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteProjectCore.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(deleteProjectCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default deleteProjectSlice.reducer;
export const { resetDeleteProjectStatus } = deleteProjectSlice.actions;

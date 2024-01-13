import { createSlice } from "@reduxjs/toolkit";

import updateProjectCore from "@core/core/projects/updateProject";
import { UseCases } from "../../types.ts";
import { initialProject } from "./type.ts";

export const updateProjectSlice = createSlice({
  name: UseCases.UpdateProject,
  initialState: initialProject,
  reducers: {
    resetUpdateProjectStatus: (state) => {
      state.status = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateProjectCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProjectCore.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(updateProjectCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default updateProjectSlice.reducer;
export const { resetUpdateProjectStatus } = updateProjectSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

import createProjectCore from "@core/core/projects/createProject";
import { UseCases } from "../../types.ts";
import { initialProject } from "./type.ts";
import linkUserToProjectCore from "@core/core/projects/linkUserToProject";
import { useAppDispatch } from "@core/utils";

export const createProjectSlice = createSlice({
  name: UseCases.CreateProject,
  initialState: initialProject,
  reducers: {},
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

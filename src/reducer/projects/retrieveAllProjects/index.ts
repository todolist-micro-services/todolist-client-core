import { createSlice } from "@reduxjs/toolkit";

import retrieveAllProjectsCore from "@core/core/projects/retrieveAllProjects";
import { initialProject } from "./type.ts";
import { UseCases } from "../../types.ts";
import linkUserToProjectCore from "@core/core/projects/linkUserToProject";

export const retrieveAllProjectsSlice = createSlice({
  name: UseCases.RetrieveAllProjects,
  initialState: initialProject,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveAllProjectsCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(retrieveAllProjectsCore.fulfilled, (state, action) => {
        state.status = "success";
        state.projects = action.payload.map((project, key) => ({
          ...project,
          uuid: action.payload.at(key).id,
        }));
      })
      .addCase(retrieveAllProjectsCore.rejected, (state) => {
        state.status = "failure";
      })
      .addCase(linkUserToProjectCore.fulfilled, (state, action) => {
        state.projects = [...state.projects, action.meta.arg.project];
      });
  },
});

export default retrieveAllProjectsSlice.reducer;

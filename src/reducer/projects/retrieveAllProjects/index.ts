import { createSlice } from "@reduxjs/toolkit";

import retrieveAllProjectsCore from "@core/core/projects/retrieveAllProjects";
import { initialProject } from "./type.ts";
import { UseCases } from "../../types.ts";
import linkUserToProjectCore from "@core/core/projects/linkUserToProject";
import deleteProjectCore from "@core/core/projects/deleteProject";
import updateProjectCore from "@core/core/projects/updateProject";

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
          // uuid: action.payload.at(key).id,
        }));
      })
      .addCase(retrieveAllProjectsCore.rejected, (state) => {
        state.status = "failure";
      })
      .addCase(linkUserToProjectCore.fulfilled, (state, action) => {
        state.projects = [...state.projects, action.meta.arg.project];
      })
      .addCase(deleteProjectCore.fulfilled, (state, action) => {
        state.projects = state.projects.filter(
          (project) => project.id !== action.meta.arg.project
        );
      })
      .addCase(updateProjectCore.pending, (state, action) => {
        state.projects = state.projects.map((project) =>
          project.id === action.meta.arg.oldProject.id
            ? {
                ...action.meta.arg.oldProject,
                name: action.meta.arg.newProject.name,
                description: action.meta.arg.newProject.description,
              }
            : project
        );
      });
  },
});

export default retrieveAllProjectsSlice.reducer;

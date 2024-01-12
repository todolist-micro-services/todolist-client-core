import { createSlice } from "@reduxjs/toolkit";

import retrieveAllProjectsCore from "@core/core/projects/retrieveAllProjects";
import { initialProject } from "./type.ts";
import { UseCases } from "../../types.ts";

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
        state.projects = action.payload;
      })
      .addCase(retrieveAllProjectsCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default retrieveAllProjectsSlice.reducer;

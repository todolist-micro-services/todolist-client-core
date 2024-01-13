import { createSlice } from "@reduxjs/toolkit";

import { initialProject } from "@core/dto";
import { UseCases } from "../../types.ts";
import retrieveUserCore from "@core/core/users/retrieveUser";
import { ProjectState } from "./type.ts";

export const createProjectSlice = createSlice({
  name: UseCases.CreateProject,
  initialState: initialProject as ProjectState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveUserCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(retrieveUserCore.fulfilled, (state, action) => {
        state.status = "success";
      })
      .addCase(retrieveUserCore.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export default createProjectSlice.reducer;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { httpRequest } from "@core/utils";
import { Identifiable, Project } from "@core/dto";

const retrieveProjectTasksCore = createAsyncThunk<
  any,
  { project: Identifiable<Project>; token: string }
>(UseCases.RetrieveProjectTasks, async ({ project, token }) => {
  try {
    return await httpRequest({
      endpoint: `/tasks/project/${project.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default retrieveProjectTasksCore;

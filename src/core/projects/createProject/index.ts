import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Project } from "@core/dto";
import { httpRequest } from "@core/utils";

const createProjectCore = createAsyncThunk<
  any,
  { project: Project; token: string }
>(UseCases.CreateProject, async ({ project, token }) => {
  try {
    return await httpRequest({
      endpoint: "/projects/create",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        name: project.name,
        description: project.description,
        creationDate: project.creationDate.toISOString().replace(/\..+/, ""),
        creator: project.creator,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default createProjectCore;

import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, Project } from "@core/dto";
import { httpRequest } from "@core/utils";

const updateProjectCore = createAsyncThunk<
  Identifiable<Project>,
  { oldProject: Identifiable<Project>; newProject: Project; token: string }
>(UseCases.UpdateProject, async ({ oldProject, newProject, token }) => {
  try {
    return await httpRequest({
      endpoint: "/projects/update",
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        id: oldProject.id,
        name: newProject.name,
        description: newProject.description,
        creationDate: oldProject.creationDate.toISOString().replace(/\..+/, ""),
        creator: oldProject.creator,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default updateProjectCore;

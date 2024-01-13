import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, Project, User } from "@core/dto";
import { httpRequest } from "@core/utils";

const linkUserToProjectCore = createAsyncThunk<
  void,
  { user: User; project: Identifiable<Project>; token: string }
>(UseCases.LinkUserToProject, async ({ user, project, token }) => {
  try {
    return await httpRequest({
      endpoint: "/projects/link",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        user: user.id,
        project: project.uuid,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default linkUserToProjectCore;

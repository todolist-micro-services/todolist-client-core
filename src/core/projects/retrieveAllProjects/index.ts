import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { httpRequest } from "@core/utils";

const retrieveAllProjectsCore = createAsyncThunk<any, { token: string }>(
  UseCases.RetrieveAllProjects,
  async ({ token }) => {
    try {
      return await httpRequest({
        endpoint: "/projects/user-projects",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      throw error.response?.data?.error || "An error occurred.";
    }
  }
);

export default retrieveAllProjectsCore;

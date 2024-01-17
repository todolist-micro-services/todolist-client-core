import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { httpRequest } from "@core/utils";
import { Id } from "@core/dto";

const retrieveAllProjectListsCore = createAsyncThunk<
  any,
  { project: Id; token: string }
>(UseCases.RetrieveAllProjectLists, async ({ project, token }) => {
  try {
    return await httpRequest({
      endpoint: `/lists/all/${project}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default retrieveAllProjectListsCore;

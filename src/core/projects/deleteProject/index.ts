import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Id } from "@core/dto";
import { httpRequest } from "@core/utils";

const deleteProjectCore = createAsyncThunk<
  void,
  { project: Id; token: string }
>(UseCases.DeleteProject, async ({ project, token }) => {
  try {
    return await httpRequest({
      endpoint: `/projects/delete/${project}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default deleteProjectCore;

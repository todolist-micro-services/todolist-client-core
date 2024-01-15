import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, Task } from "@core/dto";
import { httpRequest } from "@core/utils";

const deleteTaskCore = createAsyncThunk<
  void,
  { task: Identifiable<Task>; token: string }
>(UseCases.DeleteTask, async ({ task, token }) => {
  try {
    return await httpRequest({
      endpoint: `/tasks/delete/${task.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default deleteTaskCore;

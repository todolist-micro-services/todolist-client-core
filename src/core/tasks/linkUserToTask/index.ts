import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, Task, User } from "@core/dto";
import { httpRequest } from "@core/utils";

const linkUserToTaskCore = createAsyncThunk<
  void,
  { user: User; task: Identifiable<Task>; token: string }
>(UseCases.LinkUserToTask, async ({ user, task, token }) => {
  try {
    return await httpRequest({
      endpoint: "/tasks/link",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        user: user.id,
        task: task.id,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default linkUserToTaskCore;

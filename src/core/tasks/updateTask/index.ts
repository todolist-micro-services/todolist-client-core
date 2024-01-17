import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, Task } from "@core/dto";
import { httpRequest } from "@core/utils";

const updateTaskCore = createAsyncThunk<
  any,
  { oldTask: Identifiable<Task>; newTask: Task; token: string }
>(UseCases.UpdateTask, async ({ oldTask, newTask, token }) => {
  try {
    return await httpRequest({
      endpoint: "/tasks/update",
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        id: oldTask.id,
        name: newTask.name,
        description: newTask.description,
        creationDate: oldTask.creationDate.toISOString().replace(/\..+/, ""),
        creator: oldTask.creator.id,
        list: newTask.list.id,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default updateTaskCore;

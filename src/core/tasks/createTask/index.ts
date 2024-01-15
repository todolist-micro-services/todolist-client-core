import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Task } from "@core/dto";
import { httpRequest } from "@core/utils";

const createTaskCore = createAsyncThunk<any, { task: Task; token: string }>(
  UseCases.CreateTask,
  async ({ task, token }) => {
    try {
      console.log(task);
      return await httpRequest({
        endpoint: "/tasks/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          name: task.name,
          description: task.description,
          creationDate: task.creationDate.toISOString().replace(/\..+/, ""),
          creator: task.creator.id,
          list: task.list.id,
        },
      });
    } catch (error: any) {
      throw error.response?.data?.error || "An error occurred.";
    }
  }
);

export default createTaskCore;

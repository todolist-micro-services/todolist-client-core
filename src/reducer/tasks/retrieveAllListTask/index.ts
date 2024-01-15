import { createSlice } from "@reduxjs/toolkit";

import { initialTask } from "./type.ts";
import { UseCases } from "../../types.ts";
import { initialList, initialUser } from "@core/dto";
import linkUserToTaskCore from "@core/core/tasks/linkUserToTask";
import deleteTaskCore from "@core/core/tasks/deleteTask";
import updateTaskCore from "@core/core/tasks/updateTask";
import retrieveProjectTasksCore from "@core/core/tasks/retrieveProjectTasks";

export const retrieveAllListTaskSlice = createSlice({
  name: UseCases.RetrieveProjectTasks,
  initialState: initialTask,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveProjectTasksCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(retrieveProjectTasksCore.fulfilled, (state, action) => {
        state.status = "success";
        state.tasks = action.payload.map((task) => ({
          id: task.taskId,
          name: task.name,
          description: task.description,
          creationDate: new Date(task.creationDateTime),
          creator: { ...initialUser, id: task.creator.userId },
          list: { ...initialList, id: task.list.listId },
        }));
      })
      .addCase(retrieveProjectTasksCore.rejected, (state) => {
        state.status = "failure";
      })
      .addCase(linkUserToTaskCore.pending, (state, action) => {
        state.tasks = [...state.tasks, action.meta.arg.task];
      })
      .addCase(linkUserToTaskCore.rejected, (state, action) => {
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.meta.arg.task.id
        );
      })
      .addCase(deleteTaskCore.pending, (state, action) => {
        state.tasks = state.tasks.filter(
          (task) => task.id !== action.meta.arg.task.id
        );
      })
      .addCase(deleteTaskCore.rejected, (state, action) => {
        state.tasks = [...state.tasks, action.meta.arg.task];
      })
      .addCase(updateTaskCore.pending, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.meta.arg.oldTask.id
            ? {
                ...action.meta.arg.oldTask,
                name: action.meta.arg.newTask.name,
                description: action.meta.arg.newTask.description,
                list: action.meta.arg.newTask.list,
              }
            : task
        );
      })
      .addCase(updateTaskCore.rejected, (state, action) => {
        state.tasks = state.tasks.map((task) =>
          task.id === action.meta.arg.oldTask.id
            ? action.meta.arg.oldTask
            : task
        );
      });
  },
});

export default retrieveAllListTaskSlice.reducer;

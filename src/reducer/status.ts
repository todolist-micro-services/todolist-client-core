import { UseCases } from "./types.ts";
import { resetDeleteProjectStatus } from "./projects/deleteProject";
import { resetUpdateProjectStatus } from "./projects/updateProject";
import { resetCreateProjectStatus } from "./projects/createProject";
import { resetDeleteListStatus } from "./lists/deleteList";
import { resetUpdateListStatus } from "./lists/updateList";
import { resetCreateListStatus } from "./lists/createList";
import { resetCreateTaskStatus } from "@core/reducer/tasks/createTask";
import { resetDeleteTaskStatus } from "@core/reducer/tasks/deleteTask";
import { resetUpdateTaskStatus } from "@core/reducer/tasks/updateTask";

function useResetStatus(useCase: UseCases, dispatch: (data: any) => any) {
  useCase === UseCases.CreateProject && dispatch(resetCreateProjectStatus());
  useCase === UseCases.UpdateProject && dispatch(resetUpdateProjectStatus());
  useCase === UseCases.DeleteProject && dispatch(resetDeleteProjectStatus());
  useCase === UseCases.CreateList && dispatch(resetCreateListStatus());
  useCase === UseCases.DeleteList && dispatch(resetDeleteListStatus());
  useCase === UseCases.UpdateList && dispatch(resetUpdateListStatus());
  useCase === UseCases.CreateTask && dispatch(resetCreateTaskStatus());
  useCase === UseCases.DeleteTask && dispatch(resetDeleteTaskStatus());
  useCase === UseCases.UpdateTask && dispatch(resetUpdateTaskStatus());
}

export { useResetStatus };

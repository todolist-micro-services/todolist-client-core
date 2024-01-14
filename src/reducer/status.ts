import { UseCases } from "./types.ts";
import { resetDeleteProjectStatus } from "./projects/deleteProject";
import { resetUpdateProjectStatus } from "./projects/updateProject";
import { resetCreateProjectStatus } from "./projects/createProject";
import { resetDeleteListStatus } from "./lists/deleteList";
import { resetUpdateListStatus } from "./lists/updateList";
import { resetCreateListStatus } from "./lists/createList";

function useResetStatus(useCase: UseCases, dispatch: (data: any) => any) {
  useCase === UseCases.CreateProject && dispatch(resetCreateProjectStatus());
  useCase === UseCases.UpdateProject && dispatch(resetUpdateProjectStatus());
  useCase === UseCases.DeleteProject && dispatch(resetDeleteProjectStatus());
  useCase === UseCases.CreateList && dispatch(resetCreateListStatus());
  useCase === UseCases.DeleteList && dispatch(resetDeleteListStatus());
  useCase === UseCases.UpdateList && dispatch(resetUpdateListStatus());
}

export { useResetStatus };

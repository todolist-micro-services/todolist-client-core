import { UseCases } from "@core/reducer/types.ts";
import { resetDeleteProjectStatus } from "./projects/deleteProject";
import { resetUpdateProjectStatus } from "@core/reducer/projects/updateProject";
import { resetCreateProjectStatus } from "@core/reducer/projects/createProject";

function useResetStatus(useCase: UseCases, dispatch: (data: any) => any) {
  useCase === UseCases.CreateProject && dispatch(resetCreateProjectStatus());
  useCase === UseCases.UpdateProject && dispatch(resetUpdateProjectStatus());
  useCase === UseCases.DeleteProject && dispatch(resetDeleteProjectStatus());
}

export { useResetStatus };

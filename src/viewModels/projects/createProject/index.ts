import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Id, Project } from "@core/dto";
import createProjectCore from "@core/core/projects/createProject";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  projectId: Id;
  createProject(project: Project, token: string): void;
}

function useProjectCreation(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.createProject.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.createProject.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.createProject.status) ?? ""
    ),
    projectId: useAppSelector((state: RootState) => state.createProject.id),
    createProject: (project, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(createProjectCore({ project, token }));
    },
  };
}

export { useProjectCreation };

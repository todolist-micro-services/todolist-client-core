import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, Project } from "@core/dto";
import updateProjectCore from "@core/core/projects/updateProject";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  project: Identifiable<Project>;
  updateProject(
    oldProject: Identifiable<Project>,
    newProject: Project,
    token: string
  ): void;
}

function useProjectUpdate(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.updateProject.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.updateProject.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.updateProject.status) ?? ""
    ),
    project: useAppSelector((state: RootState) => state.updateProject.project),
    updateProject: (oldProject, newProject, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(updateProjectCore({ oldProject, newProject, token }));
    },
  };
}

export { useProjectUpdate };

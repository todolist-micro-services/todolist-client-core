import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Id, Identifiable, Project } from "@core/dto";
import retrieveAllProjectsCore from "@core/core/projects/retrieveAllProjects";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  projects: Identifiable<Project>[];
  retrieveAllProjects(token: string): void;
}

function useAllProjectsRetrieval(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.retrieveAllProjects.status) ??
        ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.retrieveAllProjects.status) ??
        ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.retrieveAllProjects.status) ??
        ""
    ),
    projects: useAppSelector(
      (state: RootState) => state.retrieveAllProjects.projects
    ),
    retrieveAllProjects: (token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(retrieveAllProjectsCore({ token }));
    },
  };
}

export { useAllProjectsRetrieval };

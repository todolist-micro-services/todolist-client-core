import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Id, Identifiable, Project, User } from "@core/dto";
import linkUserToProjectCore from "@core/core/projects/linkUserToProject";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  linkUserToProject(
    user: User,
    project: Identifiable<Project>,
    token: string
  ): void;
}

function useUserToProjectLinkCreation(): ViewModel {
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
    linkUserToProject: (user, project, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(linkUserToProjectCore({ user, project, token }));
    },
  };
}

export { useUserToProjectLinkCreation };

import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, List, Project } from "@core/dto";
import retrieveAllProjectListsCore from "@core/core/lists/retrieveAllProjectLists";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  lists: Identifiable<List>[];
  retrieveAllProjectLists(project: Identifiable<Project>, token: string): void;
}

function useAllProjectListsRetrieval(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector(
        (state: RootState) => state.retrieveAllProjectLists.status
      ) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector(
        (state: RootState) => state.retrieveAllProjectLists.status
      ) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector(
        (state: RootState) => state.retrieveAllProjectLists.status
      ) ?? ""
    ),
    lists: useAppSelector(
      (state: RootState) => state.retrieveAllProjectLists.lists
    ),
    retrieveAllProjectLists: (project, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(retrieveAllProjectListsCore({ project: project.id, token }));
    },
  };
}

export { useAllProjectListsRetrieval };

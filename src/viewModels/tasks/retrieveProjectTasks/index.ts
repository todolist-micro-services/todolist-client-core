import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, Project, Task } from "@core/dto";
import retrieveProjectTasksCore from "@core/core/tasks/retrieveProjectTasks";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  tasks: Identifiable<Task>[];
  retrieveProjectTasks(project: Identifiable<Project>, token: string): void;
}

function useProjectTasksRetrieval(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.retrieveAllListTask.status) ??
        ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.retrieveAllListTask.status) ??
        ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.retrieveAllListTask.status) ??
        ""
    ),
    tasks: useAppSelector(
      (state: RootState) => state.retrieveAllListTask.tasks
    ),
    retrieveProjectTasks: (project, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(retrieveProjectTasksCore({ project, token }));
    },
  };
}

export { useProjectTasksRetrieval };

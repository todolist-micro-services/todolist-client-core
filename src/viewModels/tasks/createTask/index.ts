import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Id, Task } from "@core/dto";
import createTaskCore from "@core/core/tasks/createTask";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  taskId: Id;
  createTask(task: Task, token: string): void;
}

function useTaskCreation(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.createTask.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.createTask.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.createTask.status) ?? ""
    ),
    taskId: useAppSelector((state: RootState) => state.createTask.id),
    createTask: (task, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(createTaskCore({ task, token }));
    },
  };
}

export { useTaskCreation };

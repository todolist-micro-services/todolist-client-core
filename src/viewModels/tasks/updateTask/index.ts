import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, Task } from "@core/dto";
import updateTaskCore from "@core/core/tasks/updateTask";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  task: Identifiable<Task>;
  updateTask(oldTask: Identifiable<Task>, newTask: Task, token: string): void;
}

function useTaskUpdate(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.updateTask.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.updateTask.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.updateTask.status) ?? ""
    ),
    task: useAppSelector((state: RootState) => state.updateTask.task),
    updateTask: (oldTask, newTask, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(updateTaskCore({ oldTask, newTask, token }));
    },
  };
}

export { useTaskUpdate };

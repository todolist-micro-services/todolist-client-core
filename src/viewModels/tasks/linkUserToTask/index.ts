import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, Task, User } from "@core/dto";
import linkUserToTaskCore from "@core/core/tasks/linkUserToTask";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  linkUserToTask(user: User, task: Identifiable<Task>, token: string): void;
}

function useUserToTaskLinkCreation(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.linkUserToTask.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.linkUserToTask.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.linkUserToTask.status) ?? ""
    ),
    linkUserToTask: (user, task, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(linkUserToTaskCore({ user, task, token }));
    },
  };
}

export { useUserToTaskLinkCreation };

import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, List, User } from "@core/dto";
import linkUserToListCore from "@core/core/lists/linkUserToList";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  linkUserToList(user: User, list: Identifiable<List>, token: string): void;
}

function useUserToListLinkCreation(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.linkUserToList.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.linkUserToList.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.linkUserToList.status) ?? ""
    ),
    linkUserToList: (user, list, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(linkUserToListCore({ user, list, token }));
    },
  };
}

export { useUserToListLinkCreation };

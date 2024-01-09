import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { User } from "@core/dto";
import retrieveUserCore from "@core/core/users/retrieveUser";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  user: User;
  retrieveUser(token: string): void;
}

function useUserRetrieval(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.retrieveUser.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.retrieveUser.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.retrieveUser.status) ?? ""
    ),
    user: useAppSelector((state: RootState) => state.retrieveUser),
    retrieveUser: (token: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(retrieveUserCore({ token }));
    },
  };
}

export { useUserRetrieval };

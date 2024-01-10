import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { User } from "@core/dto";
import updateUserCore from "@core/core/users/updateUser";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  user: User;
  updateUser(token: string, user: User): void;
}

function useUserUpdate(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.updateUser.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.updateUser.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.updateUser.status) ?? ""
    ),
    user: useAppSelector((state: RootState) => state.updateUser),
    updateUser: (token: string, user: User) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(updateUserCore({ token, user }));
    },
  };
}

export { useUserUpdate };

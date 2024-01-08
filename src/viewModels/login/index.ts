import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import incrementAsync from "@core/core/counter";
import { CheckStatus } from "@core/utils";
import { Token } from "@core/dto";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  token: Token;
  login(email: string, password: string): void;
}

function useLogin(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.login.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.login.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.login.status) ?? ""
    ),
    token: useAppSelector((state: RootState) => state.login),
    login: (email: string, password: string) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(incrementAsync(amount));
    },
  };
}

export { useLogin };

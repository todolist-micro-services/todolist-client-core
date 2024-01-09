import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Token } from "@core/dto";
import registerCore from "@core/core/auth/register";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  token: Token;
  register(
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ): void;
}

function useRegister(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.register.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.register.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.register.status) ?? ""
    ),
    token: useAppSelector((state: RootState) => state.register),
    register: (firstname, lastname, email, password) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(registerCore({ firstname, lastname, email, password }));
    },
  };
}

export { useRegister };

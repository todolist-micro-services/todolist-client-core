import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import incrementAsync from "@core/core/counter";
import { CheckStatus } from "../../utils/checkStatus.ts";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  count: number;
  updateCount(amount: number): void;
}

function useCountUpdate(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.counter.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.counter.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.counter.status) ?? ""
    ),
    count: useAppSelector((state: RootState) => state.counter.value),
    updateCount: (amount: number) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(incrementAsync(amount));
    },
  };
}

export { useCountUpdate };

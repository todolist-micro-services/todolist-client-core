import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import incrementAsync from "../../core/counter";

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
    isRequestFailure:
      useAppSelector((state: RootState) => state.counter.status) === "failure",
    isRequestPending:
      useAppSelector((state: RootState) => state.counter.status) === "pending",
    isRequestSuccess:
      useAppSelector((state: RootState) => state.counter.status) === "success",
    count: useAppSelector((state: RootState) => state.counter.value),
    updateCount: (amount: number) => {
      dispatch(incrementAsync(amount));
    },
  };
}

export { useCountUpdate };

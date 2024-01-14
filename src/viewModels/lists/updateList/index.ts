import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, List } from "@core/dto";
import updateListCore from "@core/core/lists/updateList";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  list: Identifiable<List>;
  updateList(oldList: Identifiable<List>, newList: List, token: string): void;
}

function useListUpdate(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.updateList.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.updateList.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.updateList.status) ?? ""
    ),
    list: useAppSelector((state: RootState) => state.updateList.list),
    updateList: (oldList, newList, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(updateListCore({ oldList, newList, token }));
    },
  };
}

export { useListUpdate };

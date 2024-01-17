import { RootState } from "@core/utils";
import { useAppDispatch, useAppSelector } from "@core/utils";
import { CheckStatus } from "@core/utils";
import { Identifiable, List } from "@core/dto";
import deleteListCore from "@core/core/lists/deleteList";

interface ViewModel {
  isRequestPending: boolean;
  isRequestSuccess: boolean;
  isRequestFailure: boolean;
  deleteList(list: Identifiable<List>, token: string): void;
}

function useListRemoval(): ViewModel {
  const dispatch = useAppDispatch();
  return {
    isRequestFailure: CheckStatus.isStatusFailure(
      useAppSelector((state: RootState) => state.deleteList.status) ?? ""
    ),
    isRequestPending: CheckStatus.isStatusPending(
      useAppSelector((state: RootState) => state.deleteList.status) ?? ""
    ),
    isRequestSuccess: CheckStatus.isStatusSuccess(
      useAppSelector((state: RootState) => state.deleteList.status) ?? ""
    ),
    deleteList: (list, token) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(deleteListCore({ list, token }));
    },
  };
}

export { useListRemoval };

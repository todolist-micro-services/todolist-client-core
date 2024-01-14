import { initialList, Status } from "@core/dto";

type ListState = Omit<typeof initialList, "status"> & {
  status: Status;
};

export type { ListState };

import { Status } from "@core/dto";

type ProjectState = Omit<string, "status"> & {
  status: Status;
};

export type { ProjectState };

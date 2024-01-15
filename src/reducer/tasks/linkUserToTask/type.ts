import { initialTask, Status } from "@core/dto";

type TaskState = Omit<typeof initialTask, "status"> & {
  status: Status;
};

export type { TaskState };

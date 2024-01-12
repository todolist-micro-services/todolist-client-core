import { initialProject, Status } from "@core/dto";

type ProjectState = Omit<typeof initialProject, "status"> & {
  status: Status;
};

export type { ProjectState };

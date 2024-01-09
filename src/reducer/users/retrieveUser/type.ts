import { initialUser, Status } from "@core/dto";

type UserState = Omit<typeof initialUser, "status"> & {
  status: Status;
};

export type { UserState };

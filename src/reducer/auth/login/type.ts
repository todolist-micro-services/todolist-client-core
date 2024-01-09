import { initialToken, Status } from "@core/dto";

type TokenState = Omit<typeof initialToken, "status"> & {
  status: Status;
};

export { TokenState };

import { initialCounter, Status } from "@core/dto";

type CounterState = Omit<typeof initialCounter, "status"> & {
  status: Status;
};

export { CounterState };

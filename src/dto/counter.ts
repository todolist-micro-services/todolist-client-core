import { Status } from "./status.ts";

interface CounterState {
  value: number;
  status: Status;
}

const initialState: CounterState = {
  value: 0,
  status: undefined,
};

export { initialState as initialCounterState };
export type { CounterState };

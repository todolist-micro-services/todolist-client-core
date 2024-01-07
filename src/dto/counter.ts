interface CounterState {
  value: number;
  status: "success" | "pending" | "failure" | undefined;
}

const initialState: CounterState = {
  value: 0,
  status: undefined,
};

export { initialState as initialCounterState };
export type { CounterState };

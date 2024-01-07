import { CounterState, initialCounterState } from "@core/dto";

describe("CounterState", () => {
  it("should have the correct structure for initialState", () => {
    expect(initialCounterState).toEqual({
      value: 0,
      status: undefined,
    });
  });

  it("should have the correct TypeScript type for CounterState", () => {
    const testState: CounterState = {
      value: 42,
      status: "success",
    };

    expect(testState).toBeDefined();
  });
});

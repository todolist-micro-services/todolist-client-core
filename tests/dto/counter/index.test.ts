import { Counter, initialCounter } from "@core/dto";

describe("Counter", () => {
  it("should have the correct structure for initialState", () => {
    expect(initialCounter).toEqual({
      value: 0,
      status: undefined,
    });
  });

  it("should have the correct TypeScript type for Counter", () => {
    const testState: Counter = {
      value: 42,
    };

    expect(testState).toBeDefined();
  });
});

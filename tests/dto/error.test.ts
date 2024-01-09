import { Error, initialError } from "@core/dto";

describe("Error", () => {
  it("should have the correct structure for initialState", () => {
    expect(initialError).toEqual({
      errorMessage: null,
      id: 0,
      time: initialError.time,
    });
  });

  it("should have the correct TypeScript type for Error", () => {
    const testState: Error = {
      errorMessage: "",
      id: 42,
      time: new Date(),
    };
    expect(testState).toBeDefined();
  });
});

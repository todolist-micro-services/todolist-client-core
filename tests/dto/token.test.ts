import { Token, initialToken } from "@core/dto";

describe("Token", () => {
  it("should have the correct structure for initialState", () => {
    expect(initialToken).toEqual({
      token: "",
      expiration: "",
    });
  });

  it("should have the correct TypeScript type for Token", () => {
    const testState: Token = {
      token: "",
      expiration: "",
    };

    expect(testState).toBeDefined();
  });
});

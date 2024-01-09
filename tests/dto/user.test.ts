import { User, initialUser } from "@core/dto";

describe("User", () => {
  it("should have the correct structure for initialState", () => {
    expect(initialUser).toEqual({
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
    });
  });

  it("should have the correct TypeScript type for User", () => {
    const testState: User = {
      id: 0,
      firstname: "",
      lastname: "",
      email: "",
    };
    expect(testState).toBeDefined();
  });
});

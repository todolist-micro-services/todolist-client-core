import { httpRequest } from "@core/utils";
import { Token } from "@core/dto";
import registerCore from "@core/core/auth/register";

jest.mock("@core/utils", () => ({
  __esModule: true,
  ...jest.requireActual("@core/utils"),
  httpRequest: jest.fn(),
}));

describe("registerCore async thunk", () => {
  it("should handle successful register", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const mockToken: Token = {
      token: "mockAccessToken",
      expiration: "mockExpiration",
    };

    (httpRequest as jest.Mock).mockResolvedValue(mockToken);

    await registerCore({
      firstname: "John",
      lastname: "Doe",
      email: "test@example.com",
      password: "password",
    })(dispatch, getState, undefined);
  });

  it("should handle register failure", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    const mockError = {
      response: {
        data: {
          error: "Invalid credentials",
        },
      },
    };
    (httpRequest as jest.Mock).mockRejectedValue(mockError);
    await registerCore({
      firstname: "John",
      lastname: "Doe",
      email: "invalid@example.com",
      password: "wrongPassword",
    })(dispatch, getState, undefined);
  });
});

import { httpRequest } from "@core/utils";
import { Token } from "@core/dto";
import loginCore from "@core/core/login";

jest.mock("@core/utils", () => ({
  __esModule: true,
  ...jest.requireActual("@core/utils"),
  httpRequest: jest.fn(),
}));

describe("loginCore async thunk", () => {
  it("should handle successful login", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const mockToken: Token = {
      token: "mockAccessToken",
      expiration: "mockExpiration",
    };

    (httpRequest as jest.Mock).mockResolvedValue(mockToken);

    await loginCore({ email: "test@example.com", password: "password" })(
      dispatch,
      getState,
      undefined
    );
  });

  it("should handle login failure", async () => {
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
    await loginCore({
      email: "invalid@example.com",
      password: "wrongPassword",
    })(dispatch, getState, undefined);
  });
});

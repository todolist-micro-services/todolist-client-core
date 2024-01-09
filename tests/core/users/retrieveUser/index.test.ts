import { httpRequest } from "@core/utils";
import { Token } from "@core/dto";
import retrieveUserCore from "@core/core/users/retrieveUser";

jest.mock("@core/utils", () => ({
  __esModule: true,
  ...jest.requireActual("@core/utils"),
  httpRequest: jest.fn(),
}));

describe("retrieveUserCore async thunk", () => {
  it("should handle successful login", async () => {
    const dispatch = jest.fn();
    const getState = jest.fn();
    const mockToken: Token = {
      token: "mockAccessToken",
      expiration: "mockExpiration",
    };

    (httpRequest as jest.Mock).mockResolvedValue(mockToken);

    await retrieveUserCore({ token: "token" })(dispatch, getState, undefined);
  });

  it("should handle retrieveUser failure", async () => {
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
    await retrieveUserCore({
      token: "token",
    })(dispatch, getState, undefined);
  });
});

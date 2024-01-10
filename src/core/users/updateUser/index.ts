import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { User } from "@core/dto";
import { httpRequest } from "@core/utils";

const updateUserCore = createAsyncThunk<User, { token: string; user: User }>(
  UseCases.UpdateUser,
  async ({ token, user }) => {
    try {
      return await httpRequest({
        endpoint: "/users/update",
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: {
          firstname: user.firstname,
          lastname: user.lastname,
        },
      });
    } catch (error: any) {
      throw error.response?.data?.error || "An error occurred.";
    }
  }
);

export default updateUserCore;

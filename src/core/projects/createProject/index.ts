import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { User } from "@core/dto";
import { httpRequest } from "@core/utils";

const createProjectCore = createAsyncThunk<User, { token: string }>(
  UseCases.RetrieveUser,
  async ({ token }) => {
    try {
      return await httpRequest({
        endpoint: "/users/me",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error: any) {
      throw error.response?.data?.error || "An error occurred.";
    }
  }
);

export default createProjectCore;

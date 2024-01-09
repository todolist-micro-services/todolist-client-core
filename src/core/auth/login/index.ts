import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Token } from "@core/dto";
import { httpRequest } from "@core/utils";

const loginCore = createAsyncThunk<Token, { email: string; password: string }>(
  UseCases.Login,
  async ({ email, password }) => {
    try {
      return await httpRequest({
        endpoint: "/auth/login",
        method: "POST",
        body: { email, password },
      });
    } catch (error: any) {
      throw error.response?.data?.error || "An error occurred.";
    }
  }
);

export default loginCore;

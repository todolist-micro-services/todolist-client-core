import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Token } from "@core/dto";
import { httpRequest } from "@core/utils";

const registerCore = createAsyncThunk<
  Token,
  { firstname: string; lastname: string; email: string; password: string }
>(UseCases.Register, async ({ firstname, lastname, email, password }) => {
  try {
    return await httpRequest({
      endpoint: "/auth/register",
      method: "POST",
      body: { firstname, lastname, email, password },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default registerCore;

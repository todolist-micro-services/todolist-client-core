import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Token } from "@core/dto";
import axios from "axios";

async function loginApi(email: string, password: string): Promise<Token> {
  return axios
    .post("/auth/login", {
      email,
      password,
    })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
}

const incrementAsync = createAsyncThunk<
  Token,
  { email: string; password: string }
>(UseCases.Login, async ({ email, password }) => {
  return await loginApi(email, password);
});

export default incrementAsync;

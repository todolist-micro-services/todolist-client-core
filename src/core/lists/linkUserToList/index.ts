import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, List, User } from "@core/dto";
import { httpRequest } from "@core/utils";

const linkUserToListCore = createAsyncThunk<
  void,
  { user: User; list: Identifiable<List>; token: string }
>(UseCases.LinkUserToList, async ({ user, list, token }) => {
  try {
    return await httpRequest({
      endpoint: "/lists/link",
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        user: user.id,
        list: list.id,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default linkUserToListCore;

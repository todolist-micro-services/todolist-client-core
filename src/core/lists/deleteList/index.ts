import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, List } from "@core/dto";
import { httpRequest } from "@core/utils";

const deleteListCore = createAsyncThunk<
  void,
  { list: Identifiable<List>; token: string }
>(UseCases.DeleteList, async ({ list, token }) => {
  try {
    return await httpRequest({
      endpoint: `/lists/delete/${list.id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default deleteListCore;

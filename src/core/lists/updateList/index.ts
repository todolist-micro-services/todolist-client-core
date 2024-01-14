import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { Identifiable, List } from "@core/dto";
import { httpRequest } from "@core/utils";

const updateListCore = createAsyncThunk<
  any,
  { oldList: Identifiable<List>; newList: List; token: string }
>(UseCases.UpdateList, async ({ oldList, newList, token }) => {
  try {
    return await httpRequest({
      endpoint: "/lists/update",
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        id: oldList.id,
        name: newList.name,
        description: newList.description,
        parent: oldList.parent ? oldList.parent.id : "null",
        creator: oldList.creator.id,
        project: oldList.project.id,
      },
    });
  } catch (error: any) {
    throw error.response?.data?.error || "An error occurred.";
  }
});

export default updateListCore;

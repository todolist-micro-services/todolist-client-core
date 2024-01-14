import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";
import { List } from "@core/dto";
import { httpRequest } from "@core/utils";

const createListCore = createAsyncThunk<any, { list: List; token: string }>(
  UseCases.CreateList,
  async ({ list, token }) => {
    try {
      return await httpRequest({
        endpoint: "/lists/create",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          name: list.name,
          description: list.description,
          creator: list.creator.id,
          parent: list.parent ? list.parent.id : "null",
          project: list.project.id,
        },
      });
    } catch (error: any) {
      throw error.response?.data?.error || "An error occurred.";
    }
  }
);

export default createListCore;

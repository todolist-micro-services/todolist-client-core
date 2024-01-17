import { createSlice } from "@reduxjs/toolkit";

import retrieveAllProjectListsCore from "@core/core/lists/retrieveAllProjectLists";
import { initialList } from "./type.ts";
import { UseCases } from "../../types.ts";
import {
  initialProject,
  initialUser,
  initialList as initListDto,
} from "@core/dto";
import linkUserToListCore from "@core/core/lists/linkUserToList";
import deleteListCore from "@core/core/lists/deleteList";
import updateListCore from "@core/core/lists/updateList";

export const retrieveAllProjectListsSlice = createSlice({
  name: UseCases.RetrieveAllProjectLists,
  initialState: initialList,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveAllProjectListsCore.pending, (state) => {
        state.status = "pending";
      })
      .addCase(retrieveAllProjectListsCore.fulfilled, (state, action) => {
        state.status = "success";
        state.lists = action.payload.map((data) => ({
          id: data.listId,
          name: data.name,
          description: data.description,
          parent: data.parent
            ? { ...initListDto, id: data.parent.listId }
            : undefined,
          project: { ...initialProject, id: action.meta.arg.project },
          creator: { ...initialUser, id: data.creator.userId },
        }));
      })
      .addCase(retrieveAllProjectListsCore.rejected, (state) => {
        state.status = "failure";
      })
      .addCase(linkUserToListCore.pending, (state, action) => {
        state.lists = [...state.lists, action.meta.arg.list];
      })
      .addCase(linkUserToListCore.rejected, (state, action) => {
        state.lists = [...state.lists, action.meta.arg.list];
      })
      .addCase(deleteListCore.pending, (state, action) => {
        state.lists = state.lists.filter(
          (list) => list.id !== action.meta.arg.list.id
        );
      })
      .addCase(deleteListCore.rejected, (state, action) => {
        state.lists = [...state.lists, action.meta.arg.list];
      })
      .addCase(updateListCore.pending, (state, action) => {
        state.lists = state.lists.map((list) =>
          list.id === action.meta.arg.oldList.id
            ? {
                ...action.meta.arg.oldList,
                name: action.meta.arg.newList.name,
                description: action.meta.arg.newList.description,
              }
            : list
        );
      })
      .addCase(updateListCore.rejected, (state, action) => {
        state.lists = state.lists.map((list) =>
          list.id === action.meta.arg.oldList.id
            ? action.meta.arg.oldList
            : list
        );
      });
  },
});

export default retrieveAllProjectListsSlice.reducer;

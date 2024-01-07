import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import rootReducer from "@core/reducer/main.ts";
import { middlewares } from "@core/middleware";

export const store = configureStore({
  reducer: rootReducer,
  middleware: () => middlewares,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

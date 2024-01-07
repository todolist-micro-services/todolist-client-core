import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import type { RootState, AppDispatch } from "./store.ts";
import { CounterState } from "@core/dto";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState & CounterState> =
  useSelector;

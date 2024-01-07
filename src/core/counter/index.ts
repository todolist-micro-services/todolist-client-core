import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseCases } from "@core/reducer/types.ts";

export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) =>
    setTimeout(() => {
      if (amount > 10) {
        reject(new Error("Amount is too high!"));
      } else {
        resolve({ data: amount });
      }
    }, 500)
  );
}

const incrementAsync = createAsyncThunk<number, number>(
  UseCases.Counter,
  async (amount: number) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export default incrementAsync;

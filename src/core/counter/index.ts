import { createAsyncThunk } from "@reduxjs/toolkit";

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
  "counter/fetchCount",
  async (amount: number, thunkAPI) => {
    try {
      const response = await fetchCount(amount);
      return response.data;
    } catch (error) {
      if (error instanceof Error) {
        thunkAPI.dispatch(incrementAsync.rejected(error, "", amount));
      } else {
        thunkAPI.dispatch(
          incrementAsync.rejected(Error("Unknow error"), "", amount)
        );
      }
      throw error;
    }
  }
);

export default incrementAsync;

import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import errorReducer from "./error";
import { UseCases } from "./types.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  error: errorReducer,
});

export default rootReducer;
export { UseCases };

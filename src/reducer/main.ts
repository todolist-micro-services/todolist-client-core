import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import errorReducer from "./error";
import loginReducer from "./login";
import { UseCases } from "./types.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  error: errorReducer,
});

export default rootReducer;
export { UseCases };

import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import errorReducer from "./error";
import loginReducer from "./auth/login";
import registerReducer from "./auth/register";
import { UseCases } from "./types.ts";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  error: errorReducer,
  register: registerReducer,
});

export default rootReducer;
export { UseCases };

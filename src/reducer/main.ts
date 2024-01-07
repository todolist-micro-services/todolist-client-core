import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import errorReducer from "./error";

const rootReducer = combineReducers({
  counter: counterReducer,
  error: errorReducer,
});

export default rootReducer;

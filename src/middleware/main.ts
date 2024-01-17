import { Tuple } from "@reduxjs/toolkit";

import { loggerMiddleware } from "./logger";
import { errorMiddleware } from "./error.ts";

const middlewares = new Tuple(loggerMiddleware, errorMiddleware);

export { middlewares };

import { Tuple } from "@reduxjs/toolkit";

import { loggerMiddleware } from "./logger";

const middlewares = new Tuple(loggerMiddleware);

export { middlewares };

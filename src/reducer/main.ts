import { combineReducers } from "@reduxjs/toolkit";

import { UseCases } from "./types.ts";
import counterReducer from "./counter";
import errorReducer from "./error";
import loginReducer from "./auth/login";
import registerReducer from "./auth/register";
import retrieveUserReducer from "./users/retrieveUser";
import deleteUserReducer from "./users/deleteUser";
import updateUserReducer from "./users/updateUser";
import createProjectReducer from "./projects/createProject";
import updateProjectReducer from "./projects/updateProject";
import deleteProjectReducer from "./projects/deleteProject";
import retrieveAllProjectsReducer from "./projects/retrieveAllProjects";
import linkUserToProjectsReducer from "./projects/linkUserToProject";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer,
  error: errorReducer,
  register: registerReducer,
  retrieveUser: retrieveUserReducer,
  deleteUser: deleteUserReducer,
  updateUser: updateUserReducer,
  createProject: createProjectReducer,
  updateProject: updateProjectReducer,
  deleteProject: deleteProjectReducer,
  retrieveAllProjects: retrieveAllProjectsReducer,
  linkUserToProject: linkUserToProjectsReducer,
});

export default rootReducer;
export { UseCases };

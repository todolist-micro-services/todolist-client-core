const loggerMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return await action(store.dispatch, store.getState);
  }

  action.type != "SET_ERROR_MESSAGE" &&
    action.type != "Error/setErrorMessage" &&
    console.log(action);
  return next(action);
};

export { loggerMiddleware };

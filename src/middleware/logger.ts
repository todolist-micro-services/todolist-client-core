import { setErrorMessage } from "@core/reducer/error";

const loggerMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return await action(store.dispatch, store.getState);
  }

  if (action.error) {
    console.log(action.error);
    store.dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: action.error.message,
    });
    store.dispatch(setErrorMessage(action.error.message));
  } else {
    action.type != "SET_ERROR_MESSAGE" &&
      action.type != "Error/setErrorMessage" &&
      console.log(action);
  }
  return next(action);
};

export { loggerMiddleware };

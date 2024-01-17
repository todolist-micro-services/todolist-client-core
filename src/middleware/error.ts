import { setErrorMessage } from "@core/reducer/error";

const errorMiddleware = (store) => (next) => async (action) => {
  if (typeof action === "function") {
    return await action(store.dispatch, store.getState);
  }

  if (action.error) {
    store.dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: action.error.message,
    });
    store.dispatch(setErrorMessage(action.error.message));
  }
  return next(action);
};

export { errorMiddleware };

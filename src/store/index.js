import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import loggerMiddleware from "./middleware/logger";
import addUniqueIdMiddleware from "./middleware/addUniqueIdToUsers";
import rootReducer from "./reducers";

const middlewareEnhancer = applyMiddleware(
  loggerMiddleware,
  addUniqueIdMiddleware,
  thunkMiddleware
);

export const store = createStore(rootReducer, undefined, composeWithDevTools(middlewareEnhancer));

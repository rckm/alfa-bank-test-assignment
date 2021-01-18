import { render as rtlRender } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import rootReducer from "./reducers";
// Используется для тестирования
export const render = (ui, initialStore = {}, options = {}) => {
  const store = createStore(rootReducer, initialStore, applyMiddleware(thunk));
  const Providers = ({ children }) => <Provider store={store}>{children}</Provider>;

  return rtlRender(ui, { wrapper: Providers, ...options });
};

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { loadState, saveState } from "./local-storage";
import { throttle } from "lodash";

export const store = configureStore(
  {
    reducer: rootReducer,
    persistedState: loadState,
  },
  [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { loadState, saveState } from "./local-storage";
import { throttle } from "lodash";

export const store = configureStore(
  {
    reducer: rootReducer,
    persistedState: loadState,
  },

);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }, 1000)
);

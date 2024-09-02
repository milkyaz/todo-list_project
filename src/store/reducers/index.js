import { combineReducers } from "@reduxjs/toolkit";
import { todos } from "./todos-reducer";

export const rootReducer = combineReducers({
  todos,
});

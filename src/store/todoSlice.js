import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "@@todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    },
    removeTodo: (state, action) => {
      state.filter((todo) => todo.id !== action.id);
    },
    toggleTodo: (state, action) => {
      state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    },
    setFilter: (state = "all", action) => {
      return action.filter;
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, setFilter } = todoSlice.actions;

export const store = configureStore({
  reducer: todoSlice.reducer,
});

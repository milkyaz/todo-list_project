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
  },
  selectors: {
    selectStuff: (state) => state.stuff,
    selectActiveTodos: (state) => {
      state.todos.filter((todo) => todo.completed === false);
    },
    selectVisibleTodos: (state, filter) => {
      switch (filter) {
        case "all": {
          return state.todos;
        }
        case "active": {
          return state.todos.filter((todo) => !todo.completed);
        }
        case "completed": {
          return state.todos.filter((todo) => todo.completed);
        }
        default: {
          return state.todos;
        }
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;
export const { selectAllTodos, selectVisibleTodos, selectActiveTodos } =
  todoSlice.selectors;

export const store = configureStore({
  reducer: todoSlice.reducer,
});

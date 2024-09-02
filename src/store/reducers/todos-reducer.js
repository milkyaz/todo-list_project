export const filters = (state = "all", action) => {
  switch (action.type) {
    case "SET_FILTER": {
      return action.filter;
    }
    default: {
      return state;
    }
  }
};

export const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        {
          id: Date.now(),
          title: action.title,
          completed: false,
        },
      ];
    }
    case "REMOVE_TODO": {
      return state.filter((todo) => todo.id !== action.id);
    }
    case "TOGGLE_TODO": {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    }

    default: {
      return state;
    }
  }
};

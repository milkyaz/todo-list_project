import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectVisibleTodos } from "../store/todoSlice";
import { removeTodo, toggleTodo } from "../store/todoSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const TodoList = () => {
  const dispatch = useDispatch();
  const { filter } = useParams();
  const todos = useSelector((state) => selectVisibleTodos(state, filter));

  return (
    <List>
      {todos.map((todo) => (
        <ListItem className="todo__li" key={todo.title}>
          <Checkbox
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />{" "}
          {todo.title}{" "}
          <IconButton
            onClick={() => dispatch(removeTodo(todo.id))}
            edge="end"
            aria-label="comments"
          >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
};

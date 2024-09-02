import { useDispatch } from "react-redux";
import { addTodo } from "../store/action/todo-action";
import { Button, TextField } from "@mui/material";

export const NewTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(event.target.title.value));
    event.target.reset();
  };

  return (
    <form className="field" onSubmit={handleSubmit}>
      <TextField
        size="small"
        id="outlined-size-small"
        label="new todo"
        variant="outlined"
        type="text"
        name="title"
      />
      <Button size="medium" variant="contained" type="submit" value="Add Todo">
        Add Todo
      </Button>
    </form>
  );
};

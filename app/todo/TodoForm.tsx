"use client";

import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Todo } from "./page";

type Props = {
  addTodo: (newTodo: Todo) => void;
  editingTodo: null | Todo;
  setEditingTodo: Dispatch<SetStateAction<null | Todo>>;
  editTodo: (todo: Todo) => void;
};

const TodoForm = ({
  addTodo,
  editingTodo,
  editTodo,
  setEditingTodo,
}: Props) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingTodo) {
      editTodo({ ...editingTodo, task });
      setTask("");
      setEditingTodo(null);
    } else {
      addTodo({ id: Math.random(), task, isComplated: false });
      setTask("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  useEffect(() => {
    if (editingTodo === null) return;
    setTask(editingTodo.task);
  }, [editingTodo]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit" role="button">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;

"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { useTodoContext } from "./context/TodoContext";

const TodoForm = () => {
  const { editTodo, editingTodo, setEditingTodo, addTodo } = useTodoContext();
  const [task, setTask] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

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
    inputRef.current?.focus();
  }, [editingTodo]);

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={task} onChange={handleChange} />
      <button type="submit" role="button">
        Submit
      </button>
    </form>
  );
};

export default TodoForm;

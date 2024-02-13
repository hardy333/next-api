"use client";

import { Dispatch, MouseEvent, SetStateAction } from "react";
import { Todo } from "./page";

type Props = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  setEditingTodo: Dispatch<SetStateAction<null | Todo>>;
};

const TodoList = ({ todos, deleteTodo, setEditingTodo }: Props) => {
  const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    deleteTodo(id);
  };

  const handleSetEditing = (e: MouseEvent<HTMLButtonElement>, todo: Todo) => {
    setEditingTodo(todo);
  };

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.task}
            <button onClick={(e) => handleDelete(e, todo.id)}>X</button>
            <button onClick={(e) => handleSetEditing(e, todo)}>Edit</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
